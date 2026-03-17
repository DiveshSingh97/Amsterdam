import RestaurantCard from './RestaurantCard'
import Comments from './Comments'
import { useComments } from '../hooks/useTrip'

const WEATHER_BADGE = {
  fine:  { bg: '#EDF7F1', color: '#2E7D52', border: '#a8d8b8', label: 'Generally Fine' },
  mixed: { bg: '#FFFBF0', color: '#8B5000', border: '#f0d0a0', label: 'Mixed' },
  wet:   { bg: '#FFF5F5', color: '#C0392B', border: '#f0b0a8', label: 'Likely Rain' },
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

const SKIP_VOTING = ['Ruby Emma Hotel', 'Coffee by the canals']

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 50)
}

export default function DayCard({ day, votes, onVote, liveWeather }) {
  const { comments, loading: commentsLoading, addComment } = useComments(day.id)
  const wb = WEATHER_BADGE[day.weather.badge] || WEATHER_BADGE.fine
  const live = liveWeather?.[`2026-04-${String(day.date).padStart(2, '0')}`]
  const mealSections = Object.entries(day.meals || {})

  return (
    <div id={day.id} style={{ marginBottom: 32, scrollMarginTop: 70 }}>
      <div style={{ background: '#fff', border: '1px solid #E8E0D0', borderRadius: 18, overflow: 'hidden' }}>

        {/* ── HEADER ── */}
        <div className="day-card-header" style={{ display: 'flex', borderBottom: '1px solid #E8E0D0' }}>
          {/* Date column */}
          <div className="day-header-date" style={{
            background: '#1C1C1C', color: '#F8F3EC',
            minWidth: 80, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', padding: '22px 16px',
          }}>
            <span className="date-num" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 44, fontWeight: 700, lineHeight: 1 }}>{day.date}</span>
            <span style={{ fontSize: 12, letterSpacing: 4, textTransform: 'uppercase', opacity: 0.45, marginTop: 2 }}>{day.month}</span>
          </div>
          {/* Right info */}
          <div className="day-header-right" style={{ flex: 1, padding: '20px 24px', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', marginBottom: 5 }}>{day.dow}</div>
            <div className="day-title" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontStyle: 'italic', fontWeight: 700, lineHeight: 1.2 }}>{day.title}</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 12 }}>
              {day.tags.map(tag => {
                const ts = TAG_STYLES[tag] || { bg: '#F2F2F2', color: '#666' }
                return <span key={tag} style={{ fontSize: 12, fontWeight: 600, padding: '5px 14px', borderRadius: 999, background: ts.bg, color: ts.color }}>{tag}</span>
              })}
            </div>
          </div>
        </div>

        {/* ── WEATHER STRIP ── */}
        <div className="weather-strip" style={{
          display: 'flex', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12,
          padding: '18px 24px',
          background: 'linear-gradient(135deg, #EBF4F8 0%, #F0F8FC 100%)',
          borderBottom: '1px solid #E8E0D0',
        }}>
          <span style={{ fontSize: 28, lineHeight: 1 }}>{day.weather.icon}</span>
          <div style={{ flex: 1, minWidth: 180 }}>
            <div className="weather-temp" style={{ fontSize: 20, fontWeight: 600, color: '#1E5F74', marginBottom: 4 }}>
              {live ? `${live.high}°C / ${live.low}°C (live)` : `~${day.weather.high}°C / ${day.weather.low}°C`}
            </div>
            <div style={{ fontSize: 14, color: '#555', lineHeight: 1.7 }}>
              {live ? live.desc : day.weather.desc}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', paddingTop: 2 }}>
            <span style={{ fontSize: 13, fontWeight: 500, padding: '5px 14px', borderRadius: 999, background: wb.bg, color: wb.color, border: `1px solid ${wb.border}` }}>
              {wb.label}
            </span>
            <span style={{ fontSize: 13, color: '#777' }}>{day.weather.wear}</span>
          </div>
        </div>

        {/* ── ACTIVITIES TIMELINE ── */}
        <div style={{ padding: '24px 24px', borderBottom: '1px solid #E8E0D0' }}>
          <SectionLabel>Activities</SectionLabel>
          {day.activities.map((act, i) => {
            const isLast = i === day.activities.length - 1
            const actId = `${day.id}-${slugify(act.title)}`
            const skipVote = SKIP_VOTING.some(s => act.title.includes(s))
            const vd = votes?.[actId] || {}
            const upCount = vd.up || 0
            const downCount = vd.down || 0
            const userVote = vd.userVote || null

            return (
              <div key={i} style={{ display: 'flex', gap: 16 }}>
                {/* Left: icon circle + connector */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div className="act-icon-circle" style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: '#1C1C1C', color: '#F8F3EC',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, flexShrink: 0,
                  }}>
                    {act.icon}
                  </div>
                  {!isLast && (
                    <div style={{ width: 2, flex: 1, minHeight: 24, background: '#E8E0D0', marginTop: 6 }} />
                  )}
                </div>

                {/* Right: content */}
                <div style={{ flex: 1, paddingBottom: isLast ? 0 : 28 }}>
                  <div style={{ fontSize: 12, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{act.time}</div>
                  <div style={{ fontWeight: 500, fontSize: 17, lineHeight: 1.3 }}>{act.title}</div>
                  <div style={{ color: '#666', fontSize: 15, marginTop: 5, lineHeight: 1.7 }}>{act.detail}</div>

                  {/* Booking CTA + Directions */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginTop: 10 }}>
                    {act.booking === 'now' ? (
                      act.bookingUrl ? (
                        <a href={act.bookingUrl} target="_blank" rel="noreferrer" className="booking-btn" style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600,
                          padding: '8px 18px', borderRadius: 8, textDecoration: 'none',
                          background: '#C0392B', color: '#fff', boxShadow: '0 2px 8px rgba(192,57,43,0.3)',
                          fontFamily: "'Outfit', sans-serif",
                        }}>🎟️ {act.bookingText}</a>
                      ) : (
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600,
                          padding: '7px 14px', borderRadius: 8,
                          background: '#FFF5F5', color: '#C0392B', border: '1.5px solid #f0b0a8',
                        }}>⚠️ {act.bookingText}</span>
                      )
                    ) : act.booking === 'soon' ? (
                      act.bookingUrl ? (
                        <a href={act.bookingUrl} target="_blank" rel="noreferrer" className="booking-btn" style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600,
                          padding: '8px 18px', borderRadius: 8, textDecoration: 'none',
                          background: '#D4860A', color: '#fff', boxShadow: '0 2px 8px rgba(212,134,10,0.3)',
                          fontFamily: "'Outfit', sans-serif",
                        }}>🎟️ {act.bookingText}</a>
                      ) : (
                        <span style={{
                          display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600,
                          padding: '7px 14px', borderRadius: 8,
                          background: '#FFFBF0', color: '#D4860A', border: '1.5px solid #f0d0a0',
                        }}>📅 {act.bookingText}</span>
                      )
                    ) : (
                      <span style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 500,
                        padding: '5px 12px', borderRadius: 999,
                        background: '#F0FBF4', color: '#2E7D52', border: '1.5px solid #a8d8b8',
                      }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2E7D52', display: 'inline-block' }} />
                        {act.bookingText}
                      </span>
                    )}
                    {act.directionsUrl && (
                      <a href={act.directionsUrl} target="_blank" rel="noreferrer" className="booking-btn" style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 500,
                        padding: '7px 14px', borderRadius: 8, textDecoration: 'none',
                        background: '#F0F5FB', color: '#5B7FA6', border: '1px solid #C5D8EF',
                        fontFamily: "'Outfit', sans-serif",
                      }}>🗺️ Directions</a>
                    )}
                  </div>

                  {act.bookingUrl && act.bookingNote && (
                    <div style={{ fontSize: 13, color: '#888', marginTop: 6, lineHeight: 1.5, fontStyle: 'italic' }}>
                      {act.bookingNote}
                    </div>
                  )}

                  {!skipVote && (
                    <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 10 }}>
                      <span style={{ fontSize: 13, color: '#aaa', marginRight: 2 }}>Keen?</span>
                      <button
                        onClick={() => onVote(actId, 'up')}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 5,
                          padding: '5px 14px', borderRadius: 999, cursor: 'pointer', minHeight: 44,
                          border: `1.5px solid ${userVote === 'up' ? '#2E7D52' : '#E8E0D0'}`,
                          background: userVote === 'up' ? '#EDF7F1' : '#fff',
                          color: userVote === 'up' ? '#2E7D52' : '#555',
                          fontSize: 13, fontWeight: userVote === 'up' ? 600 : 400,
                          transition: 'all 0.15s', fontFamily: "'Outfit', sans-serif",
                        }}
                      >👍 {upCount > 0 ? upCount : ''}</button>
                      <button
                        onClick={() => onVote(actId, 'down')}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 5,
                          padding: '5px 14px', borderRadius: 999, cursor: 'pointer', minHeight: 44,
                          border: `1.5px solid ${userVote === 'down' ? '#C0392B' : '#E8E0D0'}`,
                          background: userVote === 'down' ? '#FFF5F5' : '#fff',
                          color: userVote === 'down' ? '#C0392B' : '#555',
                          fontSize: 13, fontWeight: userVote === 'down' ? 600 : 400,
                          transition: 'all 0.15s', fontFamily: "'Outfit', sans-serif",
                        }}
                      >👎 {downCount > 0 ? downCount : ''}</button>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* ── EXTRAS (always visible, Group 7) ── */}
        <div style={{
          padding: '20px 24px', borderBottom: '1px solid #E8E0D0',
          background: '#FDFAF5', borderLeft: '3px solid #B8860B',
        }}>
          <SectionLabel>Free Things &amp; Alternatives</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {day.extras.map((e, i) => (
              <div key={i} style={{ display: 'flex', gap: 12 }}>
                <span style={{ fontSize: 20, flexShrink: 0, lineHeight: 1.4 }}>{e.icon}</span>
                <div style={{ fontSize: 15, color: '#555', lineHeight: 1.7 }}>
                  <strong style={{ color: '#1C1C1C', fontWeight: 500 }}>{e.title}</strong> — {e.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MEAL SECTIONS ── */}
        {mealSections.map(([mealType, restos]) => (
          <div key={mealType} style={{ padding: '22px 24px', borderBottom: '1px solid #E8E0D0' }}>
            <SectionLabel>{mealType.charAt(0).toUpperCase() + mealType.slice(1)} Options</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {restos.map(r => (
                <RestaurantCard key={r.id} resto={r} voteData={votes[r.id]} onVote={onVote} />
              ))}
            </div>
          </div>
        ))}

        {/* ── COMMENTS ── */}
        <div style={{ padding: '22px 24px' }}>
          <SectionLabel>Comments &amp; Feedback</SectionLabel>
          {commentsLoading
            ? <div style={{ fontSize: 13, color: '#aaa' }}>Loading...</div>
            : <Comments dayId={day.id} comments={comments} onAdd={addComment} />
          }
        </div>

      </div>
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
      <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999', whiteSpace: 'nowrap' }}>{children}</span>
      <div style={{ flex: 1, height: 1, background: '#E8E0D0' }} />
    </div>
  )
}
