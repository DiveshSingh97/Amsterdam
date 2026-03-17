import { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Comments from './Comments'
import { useComments } from '../hooks/useTrip'

const WEATHER_BADGE = {
  fine:  { bg: '#EDF7F1', color: '#2E7D52', border: '#a8d8b8', label: 'Generally Fine' },
  mixed: { bg: '#FFFBF0', color: '#8B5000', border: '#f0d0a0', label: 'Mixed' },
  wet:   { bg: '#FFF5F5', color: '#C0392B', border: '#f0b0a8', label: 'Likely Rain' },
}

const BOOK_BADGE = {
  now:  { dot: '#C0392B', bg: '#FFF5F5', border: '#f0b0a8', color: '#C0392B' },
  soon: { dot: '#D4860A', bg: '#FFFBF0', border: '#f0d0a0', color: '#D4860A' },
  easy: { dot: '#2E7D52', bg: '#F0FBF4', border: '#a8d8b8', color: '#2E7D52' },
}

const TAG_STYLES = {
  'Arrival': { bg: '#FFE8E5', color: '#9B2819' },
  'Art & Culture': { bg: '#EEF3FF', color: '#3050A0' },
  'Art': { bg: '#EEF3FF', color: '#3050A0' },
  'Park': { bg: '#EEF9F2', color: '#1E6E40' },
  'Nature': { bg: '#EEF9F2', color: '#1E6E40' },
  'Dutch Food': { bg: '#FFF4EE', color: '#A03820' },
  'Shopping': { bg: '#FFF4EE', color: '#A03820' },
  'Markets': { bg: '#FFF4EE', color: '#A03820' },
  'Day Trip': { bg: '#FFF8EE', color: '#8B5000' },
  'Optional': { bg: '#F2F2F2', color: '#666' },
  'Night Tour': { bg: '#1C1C1C', color: '#D0C0F0' },
  'Farewell 🥂': { bg: '#FEE8EF', color: '#9B1A3D' },
  'Slow start': { bg: '#F2F2F2', color: '#666' },
}

export default function DayCard({ day, votes, onVote, liveWeather }) {
  const [extrasOpen, setExtrasOpen] = useState(false)
  const { comments, loading: commentsLoading, addComment } = useComments(day.id)
  const wb = WEATHER_BADGE[day.weather.badge] || WEATHER_BADGE.fine

  // Merge live weather if available — key must match API format YYYY-MM-DD
  const live = liveWeather?.[`2026-04-${String(day.date).padStart(2, '0')}`]

  const mealSections = Object.entries(day.meals || {})

  return (
    <div id={day.id} style={{ marginBottom: 32, scrollMarginTop: 70 }}>
      <div style={{ background: '#fff', border: '1px solid #E8E0D0', borderRadius: 18, overflow: 'hidden' }}>

        {/* Header */}
        <div style={{ display: 'flex', borderBottom: '1px solid #E8E0D0' }}>
          <div style={{
            background: '#1C1C1C', color: '#F8F3EC',
            minWidth: 76, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', padding: '20px 16px',
          }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 700, lineHeight: 1 }}>{day.date}</span>
            <span style={{ fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.45 }}>{day.month}</span>
          </div>
          <div style={{ flex: 1, padding: '16px 20px', borderLeft: '1px solid #E8E0D0' }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#999', marginBottom: 3 }}>{day.dow}</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 700, lineHeight: 1.2 }}>{day.title}</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
              {day.tags.map(tag => {
                const ts = TAG_STYLES[tag] || { bg: '#F2F2F2', color: '#666' }
                return <span key={tag} style={{ fontSize: 10, fontWeight: 600, padding: '3px 10px', borderRadius: 999, background: ts.bg, color: ts.color }}>{tag}</span>
              })}
            </div>
          </div>
        </div>

        {/* Weather strip */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '12px 20px',
          background: 'linear-gradient(135deg, #EBF4F8 0%, #F0F8FC 100%)',
          borderBottom: '1px solid #E8E0D0', flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: 22 }}>{day.weather.icon}</span>
          <span style={{ fontSize: 15, fontWeight: 600, color: '#1E5F74' }}>
            {live ? `${live.high}°C / ${live.low}°C (live)` : `~${day.weather.high}°C / ${day.weather.low}°C`}
          </span>
          <span style={{ fontSize: 12, color: '#555', flex: 1 }}>
            {live ? live.desc : day.weather.desc}
          </span>
          <span style={{ fontSize: 11, fontWeight: 500, padding: '3px 10px', borderRadius: 999, background: wb.bg, color: wb.color, border: `1px solid ${wb.border}` }}>
            {wb.label}
          </span>
          <span style={{ fontSize: 11, color: '#777' }}>{day.weather.wear}</span>
        </div>

        {/* Activities */}
        <div style={{ padding: '20px 22px', borderBottom: '1px solid #E8E0D0' }}>
          <SectionLabel>Activities</SectionLabel>
          {day.activities.map((act, i) => {
            const bb = BOOK_BADGE[act.booking] || BOOK_BADGE.easy
            return (
              <div key={i} style={{ display: 'flex', gap: 12, marginBottom: i < day.activities.length - 1 ? 14 : 0 }}>
                <span style={{ fontSize: 18, width: 26, textAlign: 'center', paddingTop: 1 }}>{act.icon}</span>
                <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1, color: '#999', minWidth: 52, paddingTop: 3, textTransform: 'uppercase' }}>{act.time}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{act.title}</div>
                  <div style={{ color: '#666', fontSize: 13, marginTop: 2 }}>{act.detail}</div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 999, marginTop: 6, border: `1.5px solid ${bb.border}`, background: bb.bg, color: bb.color }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: bb.dot, display: 'inline-block' }} />
                    {act.bookingText}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Extras toggle */}
        <div style={{ padding: '16px 22px', borderBottom: '1px solid #E8E0D0', background: '#FDFAF5' }}>
          <button
            onClick={() => setExtrasOpen(o => !o)}
            style={{
              fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase',
              color: '#B8860B', background: 'none', border: 'none', cursor: 'pointer',
              padding: 0, fontFamily: "'Outfit', sans-serif",
            }}
          >
            {extrasOpen ? '▲' : '▼'} Free Things & Alternatives {extrasOpen ? '(hide)' : '(show)'}
          </button>
          {extrasOpen && (
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {day.extras.map((e, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: '#555' }}>
                  <span style={{ fontSize: 16, flexShrink: 0 }}>{e.icon}</span>
                  <div><strong style={{ color: '#1C1C1C' }}>{e.title}</strong> — {e.detail}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Meal sections */}
        {mealSections.map(([mealType, restos]) => (
          <div key={mealType} style={{ padding: '20px 22px', borderBottom: '1px solid #E8E0D0' }}>
            <SectionLabel>{mealType.charAt(0).toUpperCase() + mealType.slice(1)} Options</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {restos.map(r => (
                <RestaurantCard
                  key={r.id}
                  resto={r}
                  voteData={votes[r.id]}
                  onVote={onVote}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Comments */}
        <div style={{ padding: '20px 22px' }}>
          <SectionLabel>Comments & Feedback</SectionLabel>
          {commentsLoading
            ? <div style={{ fontSize: 12, color: '#aaa' }}>Loading...</div>
            : <Comments dayId={day.id} comments={comments} onAdd={addComment} />
          }
        </div>

      </div>
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
      <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#999', whiteSpace: 'nowrap' }}>{children}</span>
      <div style={{ flex: 1, height: 1, background: '#E8E0D0' }} />
    </div>
  )
}
