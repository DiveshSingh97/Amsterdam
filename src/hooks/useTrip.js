import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'

// Get a stable anonymous user ID for this browser session
function getAnonId() {
  let id = localStorage.getItem('amsterdam_anon_id')
  if (!id) {
    id = 'anon_' + Math.random().toString(36).slice(2) + Date.now().toString(36)
    localStorage.setItem('amsterdam_anon_id', id)
  }
  return id
}

export function useVotes() {
  const [votes, setVotes] = useState({}) // { restaurantId: { up: 5, down: 2, userVote: 'up' | 'down' | null } }
  const [loading, setLoading] = useState(true)
  const anonId = getAnonId()

  const fetchVotes = useCallback(async () => {
    if (!supabase) { setLoading(false); return }
    const { data, error } = await supabase
      .from('amsterdam_restaurant_votes')
      .select('restaurant_id, vote, anon_id')

    if (error) { console.error(error); setLoading(false); return }

    const summary = {}
    data.forEach(row => {
      if (!summary[row.restaurant_id]) summary[row.restaurant_id] = { up: 0, down: 0, userVote: null }
      if (row.vote === 'up') summary[row.restaurant_id].up++
      else if (row.vote === 'down') summary[row.restaurant_id].down++
      if (row.anon_id === anonId) summary[row.restaurant_id].userVote = row.vote
    })
    setVotes(summary)
    setLoading(false)
  }, [anonId])

  useEffect(() => { fetchVotes() }, [fetchVotes])

  const vote = async (restaurantId, voteType) => {
    if (!supabase) return
    const current = votes[restaurantId] || { up: 0, down: 0, userVote: null }

    // Optimistic update
    const newSummary = { ...current }
    if (current.userVote === voteType) {
      // Toggle off
      newSummary[voteType]--
      newSummary.userVote = null
    } else {
      if (current.userVote) newSummary[current.userVote]--
      newSummary[voteType]++
      newSummary.userVote = voteType
    }
    setVotes(prev => ({ ...prev, [restaurantId]: newSummary }))

    // Upsert to Supabase
    if (newSummary.userVote === null) {
      await supabase.from('amsterdam_restaurant_votes').delete()
        .eq('restaurant_id', restaurantId).eq('anon_id', anonId)
    } else {
      await supabase.from('amsterdam_restaurant_votes').upsert({
        restaurant_id: restaurantId,
        anon_id: anonId,
        vote: newSummary.userVote,
      }, { onConflict: 'restaurant_id,anon_id' })
    }
  }

  return { votes, loading, vote }
}

export function usePolls() {
  const [pollVotes, setPollVotes] = useState({}) // { pollId: { optionId: count, userVote: optionId } }
  const anonId = getAnonId()

  const fetchPollVotes = useCallback(async () => {
    if (!supabase) return
    const { data, error } = await supabase
      .from('amsterdam_poll_votes')
      .select('poll_id, option_id, anon_id')

    if (error) { console.error(error); return }

    const summary = {}
    data.forEach(row => {
      if (!summary[row.poll_id]) summary[row.poll_id] = { userVote: null }
      summary[row.poll_id][row.option_id] = (summary[row.poll_id][row.option_id] || 0) + 1
      if (row.anon_id === anonId) summary[row.poll_id].userVote = row.option_id
    })
    setPollVotes(summary)
  }, [anonId])

  useEffect(() => { fetchPollVotes() }, [fetchPollVotes])

  const votePoll = async (pollId, optionId) => {
    if (!supabase) return
    const current = pollVotes[pollId] || {}
    if (current.userVote === optionId) return // already voted this

    // Optimistic update
    const newSummary = { ...current }
    if (current.userVote) {
      newSummary[current.userVote] = Math.max(0, (newSummary[current.userVote] || 1) - 1)
    }
    newSummary[optionId] = (newSummary[optionId] || 0) + 1
    newSummary.userVote = optionId
    setPollVotes(prev => ({ ...prev, [pollId]: newSummary }))

    await supabase.from('amsterdam_poll_votes').upsert({
      poll_id: pollId,
      option_id: optionId,
      anon_id: anonId,
    }, { onConflict: 'poll_id,anon_id' })
  }

  return { pollVotes, votePoll }
}

export function useComments(dayId) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchComments = useCallback(async () => {
    if (!supabase) { setLoading(false); return }
    const { data, error } = await supabase
      .from('amsterdam_comments')
      .select('*')
      .eq('day_id', dayId)
      .order('created_at', { ascending: true })

    if (error) { console.error(error); setLoading(false); return }
    setComments(data || [])
    setLoading(false)
  }, [dayId])

  useEffect(() => { fetchComments() }, [fetchComments])

  const addComment = async (name, message) => {
    if (!supabase) return
    const newComment = {
      day_id: dayId,
      name: name.trim() || 'Anonymous',
      message: message.trim(),
      created_at: new Date().toISOString(),
    }
    // Optimistic
    setComments(prev => [...prev, { ...newComment, id: Date.now() }])

    const { error } = await supabase.from('amsterdam_comments').insert(newComment)
    if (error) console.error(error)
    else fetchComments()
  }

  return { comments, loading, addComment }
}

export function useWeather() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const cached = sessionStorage.getItem('amsterdam_weather')
    if (cached) { setWeather(JSON.parse(cached)); return }

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY
    if (!apiKey) return

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Amsterdam,NL&appid=${apiKey}&units=metric&cnt=40`)
      .then(r => r.json())
      .then(data => {
        if (data.list) {
          const byDate = {}
          data.list.forEach(item => {
            const date = item.dt_txt.split(' ')[0]
            if (!byDate[date]) byDate[date] = []
            byDate[date].push(item)
          })
          const summary = {}
          Object.entries(byDate).forEach(([date, items]) => {
            const temps = items.map(i => i.main.temp)
            const descriptions = items.map(i => i.weather[0].description)
            summary[date] = {
              high: Math.round(Math.max(...temps)),
              low: Math.round(Math.min(...temps)),
              desc: descriptions[Math.floor(descriptions.length / 2)],
              icon: items[Math.floor(items.length / 2)].weather[0].icon,
            }
          })
          sessionStorage.setItem('amsterdam_weather', JSON.stringify(summary))
          setWeather(summary)
        }
      })
      .catch(console.error)
  }, [])

  return weather
}
