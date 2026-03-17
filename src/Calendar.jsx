import { Link } from 'react-router-dom'

const CALENDAR_DAYS = [
  { date: '3 Apr', dow: 'Thu', city: 'AMS', weather: '🌤️ 11°C', anchor: '/#day1', color: '#D94F3D', events: ['Arrival at Ruby Emma', 'Canal walk · Dam Square', 'Dinner — Moeders or Pantry'] },
  { date: '4 Apr', dow: 'Fri', city: 'AMS', weather: '🌥️ 11°C', anchor: '/#day2', color: '#1E5F74', events: ['🎨 Rijksmuseum 9:00', 'Vondelpark afternoon', 'Dinner — Foodhallen or Blushing'] },
  { date: '5 Apr', dow: 'Sat', city: 'AMS', weather: '🌦️ 11°C', anchor: '/#day3', color: '#1E5F74', events: ['🌻 Van Gogh Museum 9:00', 'De 9 Straatjes + Bloemenmarkt', '⭐ Fancy dinner — De Kas'] },
  { date: '6 Apr', dow: 'Sun', city: 'AMS', weather: '🌬️ 11°C', anchor: '/#day4', color: '#2E7D52', events: ['🌷 Keukenhof Gardens', 'Leave 7:30 — arrive at opening', 'Dinner back in Amsterdam'] },
  { date: '7 Apr', dow: 'Mon', city: 'AMS', weather: '🌥️ 11°C', anchor: '/#day5', color: '#888', events: ['🚆 Haarlem OR free day', 'Vote still open!', 'Dinner — De Pijp area'] },
  { date: '8 Apr', dow: 'Tue', city: 'AMS', weather: '🌦️ 11°C', anchor: '/#day6', color: '#7B2D8B', events: ['🚆 Utrecht day trip', 'Dom Tower + Oudegracht', '🌙 Red Light District tour 20:30'] },
  { date: '9 Apr', dow: 'Wed', city: 'AMS', weather: '🌤️ 11°C', anchor: '/#day7', color: '#B8860B', events: ['🛒 Albert Cuyp Market', '⛴️ NDSM Wharf (free ferry)', '🥂 Farewell dinner'] },
  { date: '10 Apr', dow: 'Thu', city: 'AMS → BRU', weather: '🌤️ 12°C', anchor: '/#day8', color: '#C0392B', events: ['✈️ Group flies home from AMS', '🚆 Divesh & Mom → Brussels', 'Arrival at ibis Grand Place'] },
  { date: '11 Apr', dow: 'Fri', city: 'BRU', weather: '🌥️ 13°C', anchor: '/brussels#bru2', color: '#1B4332', events: ['🗺️ Free walking tour', '🍫 Choco-Story Museum', '🧇 Waffle crawl'] },
  { date: '12 Apr', dow: 'Sat', city: 'BRU', weather: '🌤️ 14°C', anchor: '/brussels#bru3', color: '#1B4332', events: ['🚆 Day trip to Bruges', '🏰 Belfry Tower + canals', '🍺 De Halve Maan Brewery'] },
  { date: '13 Apr', dow: 'Sun', city: 'BRU', weather: '🌥️ 13°C', anchor: '/brussels#bru4', color: '#1B4332', events: ['⚛️ Atomium', '🛒 Jeu de Balle flea market', '🍺 Cantillon Brewery'] },
  { date: '14 Apr', dow: 'Mon', city: 'BRU → AMS', weather: '🌤️ 14°C', anchor: '/brussels#bru5', color: '#C0392B', events: ['☕ Final Brussels morning', '🚆 Train to Amsterdam 17:30', '✈️ KLM home from AMS 22:00'] },
]

// Build grid: Mon–Sun columns, 3 weeks
// Week 1: Mon–Wed empty, Thu Apr3 – Sun Apr6
// Week 2: Mon Apr7 – Sun Apr13
// Week 3: Mon Apr14, Tue–Sun empty
const DOW_COLS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function buildGrid() {
  const rows = [
    [null, null, null, 'Thu', 'Fri', 'Sat', 'Sun'],
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    ['Mon', null, null, null, null, null, null],
  ]
  // Map dow to day object
  const byDow = {}
  CALENDAR_DAYS.forEach(d => { byDow[d.dow] = d })

  // Week 1: Apr 3 (Thu), 4 (Fri), 5 (Sat), 6 (Sun)
  // Week 2: Apr 7 (Mon), 8 (Tue), 9 (Wed), 10 (Thu), 11 (Fri), 12 (Sat), 13 (Sun)
  // Week 3: Apr 14 (Mon)
  const week1 = [null, null, null, CALENDAR_DAYS[0], CALENDAR_DAYS[1], CALENDAR_DAYS[2], CALENDAR_DAYS[3]]
  const week2 = [CALENDAR_DAYS[4], CALENDAR_DAYS[5], CALENDAR_DAYS[6], CALENDAR_DAYS[7], CALENDAR_DAYS[8], CALENDAR_DAYS[9], CALENDAR_DAYS[10]]
  const week3 = [CALENDAR_DAYS[11], null, null, null, null, null, null]
  return [week1, week2, week3]
}

const GRID = buildGrid()

const CITY_BADGE = {
  'AMS':       { bg: '#1C1C1C', color: '#F8F3EC', border: 'rgba(248,243,236,0.2)' },
  'BRU':       { bg: '#1B4332', color: '#F8F3EC', border: 'rgba(248,243,236,0.2)' },
  'AMS → BRU': { bg: '#C0392B', color: '#fff',    border: 'rgba(255,255,255,0.2)' },
  'BRU → AMS': { bg: '#C0392B', color: '#fff',    border: 'rgba(255,255,255,0.2)' },
}

const STATS = [
  { icon: '📅', value: '12', label: 'Days of travel' },
  { icon: '🌷', value: '8', label: 'Days in Amsterdam' },
  { icon: '🇧🇪', value: '4', label: 'Days in Brussels' },
  { icon: '✈️', value: '2', label: 'Flights booked' },
]

const PHASES = [
  {
    label: 'Week 1 · Amsterdam',
    dates: '3–9 April',
    color: '#1C1C1C',
    accent: '#D94F3D',
    icon: '🌷',
    summary: '7 days in Amsterdam for the full group. Rijksmuseum, Van Gogh, Keukenhof tulip gardens, Utrecht day trip, Red Light District tour, canal walks and the farewell dinner.',
    highlights: ['Rijksmuseum — book NOW', 'Van Gogh Museum — book NOW', 'Keukenhof — buy Combi Ticket online', 'Red Light tour — 20:30 Day 6'],
  },
  {
    label: 'Departure · 10 April',
    dates: '10 April',
    color: '#7B1E0E',
    accent: '#C0392B',
    icon: '✈️',
    summary: 'Group flies home from Amsterdam Schiphol. Divesh and his mom take the Eurostar to Brussels for 4 more days.',
    highlights: ['Group: train to Schiphol + KLM flight', 'Divesh & Mom: Eurostar AMS → BRU (~1h 52min)', 'Check in at ibis near Grand Place'],
  },
  {
    label: 'Week 2 · Brussels',
    dates: '10–14 April',
    color: '#1B4332',
    accent: '#2D6A4F',
    icon: '🇧🇪',
    summary: 'Divesh and Mom explore Brussels — walking tours, Bruges day trip, Atomium, flea markets, craft breweries and the best waffles and chocolate in the world.',
    highlights: ['Bruges day trip — Belfry + De Halve Maan', 'Atomium + Jeu de Balle market', 'Cantillon Brewery tour', '⚠️ Train back to AMS by 17:30 on Apr 14 — flight is from Schiphol'],
  },
]

export default function Calendar() {
  return (
    <div style={{ background: '#F8F3EC', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(135deg, #1C1C1C 0%, #2D1B0E 50%, #1B4332 100%)',
        color: '#F8F3EC', padding: '64px 24px 52px', textAlign: 'center', position: 'relative',
      }}>
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: 'uppercase', color: '#B8860B', marginBottom: 14 }}>
          Amsterdam + Brussels · April 2026
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(44px, 8vw, 80px)', fontWeight: 700, lineHeight: 0.95, margin: '0 0 20px' }}>
          Trip <em style={{ fontStyle: 'italic', color: '#D94F3D' }}>Calendar</em>
        </h1>
        <p style={{ fontSize: 14, color: 'rgba(248,243,236,0.5)', margin: '0 0 28px', maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
          12 days · 3 – 14 April · 6 travellers to Amsterdam, 2 continue to Brussels
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap' }}>
          <Link to="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600,
            padding: '10px 22px', borderRadius: 10, textDecoration: 'none',
            background: 'rgba(255,255,255,0.1)', color: '#F8F3EC', border: '1px solid rgba(255,255,255,0.2)',
          }}>← Amsterdam Plan</Link>
          <Link to="/brussels" style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 600,
            padding: '10px 22px', borderRadius: 10, textDecoration: 'none',
            background: 'rgba(27,67,50,0.5)', color: '#F8F3EC', border: '1px solid rgba(255,255,255,0.2)',
          }}>🇧🇪 Brussels Plan</Link>
        </div>
      </div>

      {/* STATS STRIP */}
      <div style={{
        background: '#1C1C1C', borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '20px 24px', display: 'flex', justifyContent: 'center', gap: 0, flexWrap: 'wrap',
      }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            padding: '12px 32px', borderRight: i < STATS.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
          }}>
            <span style={{ fontSize: 22, marginBottom: 4 }}>{s.icon}</span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 700, color: '#F8F3EC', lineHeight: 1 }}>{s.value}</span>
            <span style={{ fontSize: 12, color: 'rgba(248,243,236,0.4)', marginTop: 4, letterSpacing: '0.05em' }}>{s.label}</span>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 20px 80px' }}>

        {/* LEGEND */}
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 24, alignItems: 'center' }}>
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginRight: 4 }}>Legend</span>
          {[
            { bg: '#1C1C1C', color: '#F8F3EC', label: 'Amsterdam' },
            { bg: '#1B4332', color: '#F8F3EC', label: 'Brussels' },
            { bg: '#C0392B', color: '#fff', label: 'Travel day' },
          ].map((l, i) => (
            <span key={i} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600,
              padding: '4px 12px', borderRadius: 999, background: l.bg, color: l.color,
            }}>{l.label}</span>
          ))}
        </div>

        {/* DESKTOP CALENDAR GRID */}
        <div className="cal-desktop" style={{ background: '#fff', border: '1px solid #E8E0D0', borderRadius: 18, overflow: 'hidden', marginBottom: 40 }}>

          {/* Day-of-week header */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', background: '#1C1C1C' }}>
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(d => (
              <div key={d} style={{
                padding: '12px 8px', textAlign: 'center',
                fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(248,243,236,0.45)', borderRight: '1px solid rgba(255,255,255,0.06)',
              }}>{d}</div>
            ))}
          </div>

          {/* Weeks */}
          {GRID.map((week, wi) => (
            <div key={wi} style={{
              display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
              borderTop: wi > 0 ? '1px solid #E8E0D0' : 'none',
            }}>
              {week.map((day, di) => (
                <div key={di} style={{
                  minHeight: 160, padding: '14px 12px',
                  borderRight: di < 6 ? '1px solid #E8E0D0' : 'none',
                  background: day ? '#fff' : '#FAFAF8',
                  display: 'flex', flexDirection: 'column',
                  position: 'relative',
                }}>
                  {day ? (
                    <>
                      {/* Date number + city badge */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 700, lineHeight: 1, color: '#1C1C1C' }}>
                          {day.date.split(' ')[0]}
                        </div>
                        <span style={{
                          fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 999,
                          background: CITY_BADGE[day.city]?.bg || '#1C1C1C',
                          color: CITY_BADGE[day.city]?.color || '#F8F3EC',
                          whiteSpace: 'nowrap', letterSpacing: '0.06em',
                        }}>{day.city}</span>
                      </div>

                      {/* Weather */}
                      <div style={{ fontSize: 11, color: '#999', marginBottom: 8, lineHeight: 1 }}>{day.weather}</div>

                      {/* Event pills */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
                        {day.events.slice(0, 3).map((ev, ei) => (
                          <div key={ei} style={{
                            fontSize: 11, lineHeight: 1.35, padding: '4px 8px', borderRadius: 6,
                            background: ei === 0 ? `${day.color}18` : '#F5F0E8',
                            color: ei === 0 ? day.color : '#555',
                            fontWeight: ei === 0 ? 600 : 400,
                            borderLeft: ei === 0 ? `3px solid ${day.color}` : '3px solid transparent',
                          }}>{ev}</div>
                        ))}
                      </div>

                      {/* View day link */}
                      <a href={day.anchor} style={{
                        display: 'inline-flex', alignItems: 'center', gap: 4,
                        fontSize: 11, fontWeight: 600, color: day.color,
                        textDecoration: 'none', marginTop: 10,
                        opacity: 0.8,
                      }}>View day →</a>
                    </>
                  ) : (
                    <div style={{ fontSize: 11, color: '#ddd', padding: 4 }}>—</div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* MOBILE LIST VIEW */}
        <div className="cal-mobile" style={{ display: 'none', marginBottom: 40 }}>
          {CALENDAR_DAYS.map((day, i) => {
            const badge = CITY_BADGE[day.city] || CITY_BADGE['AMS']
            return (
              <div key={i} style={{
                background: '#fff', border: '1px solid #E8E0D0', borderRadius: 14,
                overflow: 'hidden', marginBottom: 12, display: 'flex',
              }}>
                {/* Date column */}
                <div style={{
                  width: 64, flexShrink: 0, background: '#1C1C1C', color: '#F8F3EC',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  padding: '14px 8px',
                }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, lineHeight: 1 }}>
                    {day.date.split(' ')[0]}
                  </span>
                  <span style={{ fontSize: 10, letterSpacing: '0.1em', opacity: 0.45, textTransform: 'uppercase', marginTop: 2 }}>
                    {day.dow}
                  </span>
                </div>
                {/* Content */}
                <div style={{ flex: 1, padding: '14px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: 12, color: '#999' }}>{day.weather}</span>
                    <span style={{
                      fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 999,
                      background: badge.bg, color: badge.color,
                    }}>{day.city}</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                    {day.events.map((ev, ei) => (
                      <div key={ei} style={{
                        fontSize: 13, color: ei === 0 ? day.color : '#555',
                        fontWeight: ei === 0 ? 600 : 400, lineHeight: 1.4,
                      }}>{ev}</div>
                    ))}
                  </div>
                  <a href={day.anchor} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    fontSize: 12, fontWeight: 600, color: day.color,
                    textDecoration: 'none', marginTop: 8, opacity: 0.85,
                  }}>View full day →</a>
                </div>
              </div>
            )
          })}
        </div>

        {/* PHASE SUMMARY CARDS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '0 0 24px' }}>
          <div style={{ flex: 1, height: 1, background: '#E8E0D0' }} />
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999', whiteSpace: 'nowrap' }}>Trip Phases</span>
          <div style={{ flex: 1, height: 1, background: '#E8E0D0' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16, marginBottom: 40 }}>
          {PHASES.map((phase, i) => (
            <div key={i} style={{
              background: phase.color, color: '#F8F3EC',
              borderRadius: 16, overflow: 'hidden',
              border: `1px solid rgba(255,255,255,0.08)`,
            }}>
              <div style={{ padding: '22px 22px 16px', borderBottom: `1px solid rgba(255,255,255,0.08)` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <span style={{ fontSize: 26 }}>{phase.icon}</span>
                  <div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, lineHeight: 1.1 }}>{phase.label}</div>
                    <div style={{ fontSize: 12, color: 'rgba(248,243,236,0.45)', marginTop: 2, letterSpacing: '0.05em' }}>{phase.dates}</div>
                  </div>
                </div>
                <p style={{ fontSize: 13, color: 'rgba(248,243,236,0.6)', lineHeight: 1.7, margin: 0 }}>{phase.summary}</p>
              </div>
              <div style={{ padding: '14px 22px' }}>
                <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(248,243,236,0.35)', marginBottom: 8 }}>
                  Highlights
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {phase.highlights.map((h, hi) => (
                    <li key={hi} style={{
                      fontSize: 13, color: h.startsWith('⚠️') ? '#F5A623' : 'rgba(248,243,236,0.7)',
                      lineHeight: 1.6, paddingLeft: 14, position: 'relative', marginBottom: 2,
                      fontWeight: h.startsWith('⚠️') ? 600 : 400,
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: phase.accent || '#D94F3D' }}>·</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
          <Link to="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14, fontWeight: 600,
            padding: '12px 28px', borderRadius: 12, textDecoration: 'none',
            background: '#1C1C1C', color: '#F8F3EC', border: '1px solid rgba(255,255,255,0.1)',
          }}>🌷 Amsterdam — Full Plan</Link>
          <Link to="/brussels" style={{
            display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 14, fontWeight: 600,
            padding: '12px 28px', borderRadius: 12, textDecoration: 'none',
            background: '#1B4332', color: '#F8F3EC', border: '1px solid rgba(255,255,255,0.1)',
          }}>🇧🇪 Brussels — Full Plan</Link>
        </div>

      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '32px 24px 40px', fontSize: 12, color: '#999', borderTop: '1px solid #E8E0D0' }}>
        <div style={{ color: '#D94F3D', fontSize: 22, marginBottom: 8 }}>🌷</div>
        Amsterdam + Brussels · April 2026 · Curated by Bobby 🐱
      </footer>

      {/* Mobile responsive style */}
      <style>{`
        @media (max-width: 640px) {
          .cal-desktop { display: none !important; }
          .cal-mobile { display: block !important; }
        }
        @media (max-width: 500px) {
          .cal-stats-item { padding: 10px 16px !important; }
        }
      `}</style>
    </div>
  )
}
