import { Routes, Route } from 'react-router-dom'
import { DAYS, POLLS } from './data/tripData'
import { useVotes, usePolls, useWeather } from './hooks/useTrip'
import DayCard from './components/DayCard'
import Poll from './components/Poll'
import BobbyTips from './components/BobbyTips'
import Brussels from './Brussels'

const ROUTES = [
  {
    from: 'Ruby Emma Hotel',
    to: 'Amsterdam Centraal Station',
    modes: [
      { type: 'Walk', time: '18 min', detail: 'Along Sarphatistraat → Prins Hendrikkade', cost: 'Free', mapsUrl: 'https://maps.google.com/?saddr=Sarphatistraat+104+Amsterdam&daddr=Amsterdam+Centraal&travelmode=walking' },
      { type: 'Tram', time: '8 min', detail: 'Tram 14 from Ruyschstraat → Centraal Station', cost: '€2.40 (≈R46)', mapsUrl: 'https://maps.google.com/?saddr=Sarphatistraat+104+Amsterdam&daddr=Amsterdam+Centraal&travelmode=transit' },
    ]
  },
  {
    from: 'Ruby Emma Hotel',
    to: 'Rijksmuseum',
    modes: [
      { type: 'Walk', time: '22 min', detail: 'Through Oosterpark → Sarphatipark → Museum Quarter', cost: 'Free', mapsUrl: 'https://maps.google.com/?saddr=Sarphatistraat+104+Amsterdam&daddr=Rijksmuseum+Amsterdam&travelmode=walking' },
      { type: 'Tram', time: '10 min', detail: 'Tram 14 → Dam Square, then Tram 2/12 to Museumplein', cost: '€2.40 (≈R46)', mapsUrl: 'https://maps.google.com/?saddr=Sarphatistraat+104+Amsterdam&daddr=Rijksmuseum+Amsterdam&travelmode=transit' },
    ]
  },
  {
    from: 'Ruby Emma Hotel',
    to: 'Van Gogh Museum',
    modes: [
      { type: 'Walk', time: '25 min', detail: 'Through De Pijp and Vondelpark edge to Museumplein', cost: 'Free', mapsUrl: 'https://maps.google.com/?saddr=Sarphatistraat+104+Amsterdam&daddr=Van+Gogh+Museum+Amsterdam&travelmode=walking' },
      { type: 'Tram', time: '12 min', detail: 'Tram 14 toward Centraal, change to Tram 2/12 at Leidseplein', cost: '€2.40 (≈R46)', mapsUrl: 'https://maps.google.com/?saddr=Sarphatistraat+104+Amsterdam&daddr=Van+Gogh+Museum+Amsterdam&travelmode=transit' },
    ]
  },
  {
    from: 'Ruby Emma Hotel',
    to: 'Keukenhof (via Centraal)',
    modes: [
      { type: 'Train+Bus', time: '~55 min total', detail: 'Tram to Centraal (8min) → Train to Schiphol (17min) → Bus 858 to Keukenhof (30min)', cost: '~€18 pp (≈R342) or included in Combi Ticket', mapsUrl: 'https://maps.google.com/?saddr=Sarphatistraat+104+Amsterdam&daddr=Keukenhof+Lisse&travelmode=transit' },
    ]
  },
  {
    from: 'Ruby Emma Hotel',
    to: 'Haarlem',
    modes: [
      { type: 'Train', time: '~35 min total', detail: 'Tram to Centraal (8min) → Direct train to Haarlem (20min). Trains every 15 min.', cost: '~€5 pp each way (≈R95)', mapsUrl: 'https://maps.google.com/?saddr=Sarphatistraat+104+Amsterdam&daddr=Haarlem+Station&travelmode=transit' },
    ]
  },
  {
    from: 'Ruby Emma Hotel',
    to: 'Utrecht',
    modes: [
      { type: 'Train', time: '~45 min total', detail: 'Tram to Centraal (8min) → Direct train to Utrecht Centraal (30min). Trains every 30 min.', cost: '~€9 pp each way (≈R171)', mapsUrl: 'https://maps.google.com/?saddr=Sarphatistraat+104+Amsterdam&daddr=Utrecht+Centraal+Station&travelmode=transit' },
    ]
  },
  {
    from: 'Ruby Emma Hotel',
    to: 'De Wallen (Red Light District)',
    modes: [
      { type: 'Walk', time: '25 min', detail: 'Along Kloveniersburgwal toward Oudezijds Voorburgwal', cost: 'Free', mapsUrl: 'https://maps.google.com/?saddr=Sarphatistraat+104+Amsterdam&daddr=De+Wallen+Amsterdam&travelmode=walking' },
      { type: 'Tram', time: '10 min', detail: 'Tram 14 to Waterlooplein, then short walk north', cost: '€2.40 (≈R46)', mapsUrl: 'https://maps.google.com/?saddr=Sarphatistraat+104+Amsterdam&daddr=Oudezijds+Voorburgwal+Amsterdam&travelmode=transit' },
    ]
  },
  {
    from: 'Ruby Emma Hotel',
    to: 'Albert Cuyp Market',
    modes: [
      { type: 'Walk', time: '12 min', detail: 'Straight down Sarphatipark — hotel is very close to De Pijp', cost: 'Free', mapsUrl: 'https://maps.google.com/?saddr=Sarphatistraat+104+Amsterdam&daddr=Albert+Cuypmarkt+Amsterdam&travelmode=walking' },
    ]
  },
  {
    from: 'Ruby Emma Hotel',
    to: 'NDSM Wharf (free ferry)',
    modes: [
      { type: 'Tram + Ferry', time: '~25 min total', detail: 'Tram 14 to Centraal (8min) → Free ferry from Centraal Noord pier (15min). Runs every 15 min.', cost: 'Free ferry — tram €2.40 (≈R46)', mapsUrl: 'https://maps.google.com/?saddr=Sarphatistraat+104+Amsterdam&daddr=NDSM+Wharf+Amsterdam&travelmode=transit' },
    ]
  },
  {
    from: 'Ruby Emma Hotel',
    to: 'Schiphol Airport (departure)',
    modes: [
      { type: 'Train', time: '~35 min total', detail: 'Tram 14 to Centraal (8min) → Direct Sprinter train to Schiphol (17min). Runs every 10 min.', cost: '€5.40 pp (≈R103) — buy at Centraal', mapsUrl: 'https://maps.google.com/?saddr=Sarphatistraat+104+Amsterdam&daddr=Amsterdam+Airport+Schiphol&travelmode=transit' },
    ]
  },
]

function Amsterdam() {
  const { votes, vote } = useVotes()
  const { pollVotes, votePoll } = usePolls()
  const liveWeather = useWeather()

  return (
    <div style={{ background: '#F8F3EC', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>

      {/* HERO */}
      <div style={{
        background: "url('https://c4.wallpaperflare.com/wallpaper/444/189/182/tulips-field-windmill-flowers-wallpaper-preview.jpg') center/cover no-repeat",
        color: '#F8F3EC', padding: '80px 24px 60px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'rgba(10, 20, 30, 0.65)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: 'uppercase', color: '#B8860B', marginBottom: 14 }}>
            Group Trip · April 2026
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(52px, 10vw, 96px)', fontWeight: 700, lineHeight: 0.95 }}>
            Amsterdam<br /><em style={{ fontStyle: 'italic', color: '#D94F3D' }}>in bloom</em>
          </h1>
          <div style={{ marginTop: 22, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, fontSize: 13, fontWeight: 300, color: 'rgba(248,243,236,0.6)', flexWrap: 'wrap' }}>
            <span>🏨 Ruby Emma Hotel</span>
            <span style={{ color: 'rgba(248,243,236,0.2)' }}>·</span>
            <span>3 – 10 April 2026</span>
            <span style={{ color: 'rgba(248,243,236,0.2)' }}>·</span>
            <span>6 travellers</span>
          </div>
          <div style={{
            background: 'rgba(184,134,11,0.15)', border: '1px solid rgba(184,134,11,0.3)',
            color: '#e6c060', fontSize: 11, padding: '6px 16px', borderRadius: 999,
            marginTop: 18, display: 'inline-block',
          }}>
            💱 All prices in EUR + ZAR · Live rate: €1 ≈ R19 (March 2026)
          </div>
        </div>
      </div>

      {/* NAV */}
      <div className="nav-scroll" style={{
        background: '#1C1C1C', borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '0 12px', display: 'flex', gap: 4, overflowX: 'auto',
        position: 'sticky', top: 0, zIndex: 100, minHeight: 56, alignItems: 'center',
      }}>
        {/* Tips pill */}
        <a href="#bobby" style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          textDecoration: 'none', fontSize: 13, fontWeight: 500,
          color: 'rgba(248,243,236,0.65)', padding: '8px 14px', borderRadius: 8,
          border: '1px solid rgba(255,255,255,0.12)', whiteSpace: 'nowrap', flexShrink: 0,
          transition: 'all 0.15s',
        }}>💡 Tips</a>
        {/* Polls pill */}
        <a href="#polls" style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          textDecoration: 'none', fontSize: 13, fontWeight: 500,
          color: 'rgba(248,243,236,0.65)', padding: '8px 14px', borderRadius: 8,
          border: '1px solid rgba(255,255,255,0.12)', whiteSpace: 'nowrap', flexShrink: 0,
          transition: 'all 0.15s',
        }}>🗳️ Polls</a>
        <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.1)', margin: '0 4px', flexShrink: 0 }} />
        {/* Day bubbles */}
        {DAYS.map(d => (
          <a key={d.id} href={`#${d.id}`} style={{
            display: 'inline-flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            textDecoration: 'none', minWidth: 52, padding: '6px 8px', borderRadius: 8, flexShrink: 0,
            color: 'rgba(248,243,236,0.55)', border: '1px solid rgba(255,255,255,0.08)',
            transition: 'all 0.15s', gap: 1,
          }}
            onMouseEnter={e => { e.currentTarget.style.color = '#F8F3EC'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(248,243,236,0.55)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = '' }}
          >
            <span style={{ fontSize: 14, fontWeight: 700, lineHeight: 1 }}>{d.date}</span>
            <span style={{ fontSize: 10, letterSpacing: '0.1em', opacity: 0.5 }}>
              {d.dow.split(' · ')[0].slice(0, 3).toUpperCase()}
            </span>
          </a>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="main-pad" style={{ maxWidth: 860, margin: '0 auto', padding: '40px 20px 80px', fontSize: 15 }}>

        {/* Booking key */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36, padding: '18px 20px', background: '#fff', border: '1px solid #E8E0D0', borderRadius: 12 }}>
          <div style={{ width: '100%', fontSize: 12, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: '#999', marginBottom: 4 }}>Booking urgency guide</div>
          {[
            { style: { color: '#C0392B', border: '#f0b0a8', bg: '#FFF5F5', dot: '#C0392B' }, label: 'Book TODAY — fills weeks out' },
            { style: { color: '#D4860A', border: '#f0d0a0', bg: '#FFFBF0', dot: '#D4860A' }, label: 'Book this week — filling fast' },
            { style: { color: '#2E7D52', border: '#a8d8b8', bg: '#F0FBF4', dot: '#2E7D52' }, label: 'Walk-in / book day before is fine' },
          ].map((b, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 500, padding: '5px 13px', borderRadius: 999, border: `1.5px solid ${b.style.border}`, background: b.style.bg, color: b.style.color }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: b.style.dot, display: 'inline-block' }} />
              {b.label}
            </div>
          ))}
        </div>

        {/* Getting Around */}
        <div style={{ background: '#1C1C1C', color: '#F8F3EC', borderRadius: 16, padding: 26, marginBottom: 40 }}>
          <div style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
            <span style={{ fontSize: 28, flexShrink: 0 }}>🚇</span>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, marginBottom: 4 }}>Getting Around</h3>
              <p style={{ fontSize: 13, color: 'rgba(248,243,236,0.5)', lineHeight: 1.65, margin: 0 }}>
                From Ruby Emma Hotel — every route you'll need, with Google Maps links.
              </p>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 12 }}>
            {ROUTES.map((route, ri) => (
              <div key={ri} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '14px 16px' }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: '#e6c060', marginBottom: 10, lineHeight: 1.4 }}>
                  {route.to}
                </div>
                {route.modes.map((mode, mi) => (
                  <div key={mi} style={{ marginBottom: mi < route.modes.length - 1 ? 12 : 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{
                        fontSize: 12, fontWeight: 700, padding: '3px 10px', borderRadius: 999, flexShrink: 0,
                        background: mode.type === 'Walk' ? 'rgba(46,125,82,0.3)' : 'rgba(30,95,180,0.3)',
                        color: mode.type === 'Walk' ? '#5DD99A' : '#7BC4FF',
                        border: `1px solid ${mode.type === 'Walk' ? 'rgba(93,217,154,0.35)' : 'rgba(123,196,255,0.35)'}`,
                      }}>
                        {mode.type}
                      </span>
                      <span style={{ fontSize: 13, fontWeight: 600, color: '#F8F3EC' }}>{mode.time}</span>
                      <span style={{ fontSize: 12, color: 'rgba(248,243,236,0.35)', marginLeft: 'auto' }}>{mode.cost}</span>
                    </div>
                    <div style={{ fontSize: 12, color: 'rgba(248,243,236,0.5)', lineHeight: 1.55, marginBottom: 6 }}>{mode.detail}</div>
                    <a
                      href={mode.mapsUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 600,
                        padding: '4px 12px', borderRadius: 999, textDecoration: 'none',
                        background: 'rgba(255,255,255,0.08)', color: 'rgba(248,243,236,0.65)',
                        border: '1px solid rgba(255,255,255,0.15)',
                      }}
                    >
                      📍 Open in Google Maps
                    </a>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Fancy dinner callout */}
        <div style={{ background: '#1C1C1C', color: '#F8F3EC', borderRadius: 16, padding: 26, marginBottom: 30, display: 'flex', gap: 20 }}>
          <span style={{ fontSize: 28, flexShrink: 0 }}>🍽️</span>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>The One Fancy Dinner</h3>
            <p style={{ fontSize: 14, color: 'rgba(248,243,236,0.65)', lineHeight: 1.65, marginBottom: 14 }}>One splurge for the trip. All three are exceptional — book today. April is peak season.</p>
            {[
              { id: 'de-kas', name: 'De Kas', desc: 'Farm-to-table in a 1926 greenhouse. Best fit: Day 3 evening.', price: '€65–85 pp (≈R1,235–1,615)', menu: 'https://www.restaurantdekas.nl/en/menu/', book: 'https://www.restaurantdekas.nl/en/' },
              { id: 'restaurant-breda', name: 'Restaurant Breda', desc: 'Contemporary Dutch, Jordaan. Great farewell dinner on Day 7.', price: '€55–75 pp (≈R1,045–1,425)', menu: 'https://www.restaurantbreda.nl/menu', book: 'https://www.restaurantbreda.nl' },
              { id: 'rijks-restaurant', name: 'Rijks Restaurant', desc: "Inside the Rijksmuseum. One of Amsterdam's most beautiful dining rooms.", price: '€55–70 pp (≈R1,045–1,330)', menu: 'https://www.rijks.nl/en/restaurant/menu', book: 'https://www.rijks.nl/en/restaurant' },
            ].map(r => {
              const vd = votes[r.id] || {}
              const upCount = vd.up || 0
              const downCount = vd.down || 0
              const userVote = vd.userVote || null
              return (
                <div key={r.id} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '13px 15px', marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 10 }}>
                    <div>
                      <div style={{ fontWeight: 600, color: '#F8F3EC' }}>{r.name}</div>
                      <div style={{ fontSize: 14, color: 'rgba(248,243,236,0.5)', marginTop: 3, lineHeight: 1.65 }}>{r.desc}</div>
                      <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                        <a href={r.menu} target="_blank" rel="noreferrer" style={{ fontSize: 12, padding: '2px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.08)', color: 'rgba(248,243,236,0.6)', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>📋 Menu</a>
                        <a href={r.book} target="_blank" rel="noreferrer" style={{ fontSize: 12, padding: '2px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.08)', color: 'rgba(248,243,236,0.6)', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none', minHeight: 44, display: 'inline-flex', alignItems: 'center' }}>🌐 Book</a>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div style={{ fontWeight: 600, color: '#e6c060', fontSize: 14 }}>{r.price}</div>
                      <div style={{ fontSize: 11, color: 'rgba(248,243,236,0.4)', marginTop: 3 }}>⚠️ Book NOW</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 10 }}>
                    <span style={{ fontSize: 13, color: 'rgba(248,243,236,0.4)', marginRight: 4 }}>Group vote:</span>
                    <button
                      onClick={() => vote(r.id, 'up')}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 5,
                        padding: '5px 12px', borderRadius: 999, cursor: 'pointer', minHeight: 44,
                        border: `1.5px solid ${userVote === 'up' ? '#2E7D52' : 'rgba(255,255,255,0.15)'}`,
                        background: userVote === 'up' ? 'rgba(46,125,82,0.2)' : 'rgba(255,255,255,0.05)',
                        color: userVote === 'up' ? '#4CAF82' : 'rgba(248,243,236,0.6)',
                        fontSize: 13, fontWeight: userVote === 'up' ? 600 : 400,
                        transition: 'all 0.15s', fontFamily: "'Outfit', sans-serif",
                      }}
                    >
                      👍 {upCount > 0 ? upCount : ''}
                    </button>
                    <button
                      onClick={() => vote(r.id, 'down')}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 5,
                        padding: '5px 12px', borderRadius: 999, cursor: 'pointer', minHeight: 44,
                        border: `1.5px solid ${userVote === 'down' ? '#C0392B' : 'rgba(255,255,255,0.15)'}`,
                        background: userVote === 'down' ? 'rgba(192,57,43,0.2)' : 'rgba(255,255,255,0.05)',
                        color: userVote === 'down' ? '#E05C4A' : 'rgba(248,243,236,0.6)',
                        fontSize: 13, fontWeight: userVote === 'down' ? 600 : 400,
                        transition: 'all 0.15s', fontFamily: "'Outfit', sans-serif",
                      }}
                    >
                      👎 {downCount > 0 ? downCount : ''}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bobby Tips */}
        <BobbyTips />

        {/* Group Polls */}
        <div id="polls" style={{ marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '32px 0 20px' }}>
            <div style={{ flex: 1, height: 1, background: '#E8E0D0' }} />
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#999', whiteSpace: 'nowrap' }}>Group Polls</span>
            <div style={{ flex: 1, height: 1, background: '#E8E0D0' }} />
          </div>
          {POLLS.map(poll => (
            <Poll
              key={poll.id}
              poll={poll}
              pollData={pollVotes[poll.id]}
              onVote={votePoll}
            />
          ))}
        </div>

        {/* Day Cards with section dividers every 2 days */}
        {DAYS.map((day, i) => (
          <div key={day.id}>
            <DayCard day={day} votes={votes} onVote={vote} liveWeather={liveWeather} />
            {i % 2 === 1 && i < DAYS.length - 1 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '4px 0 20px' }}>
                <div style={{ flex: 1, height: 1, background: '#E8E0D0' }} />
                <span style={{ fontSize: 12, color: '#bbb', letterSpacing: '0.1em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  Amsterdam · Days {i} – {i + 1}
                </span>
                <div style={{ flex: 1, height: 1, background: '#E8E0D0' }} />
              </div>
            )}
          </div>
        ))}

        {/* Practical tips */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '32px 0 20px' }}>
          <div style={{ flex: 1, height: 1, background: '#E8E0D0' }} />
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#999' }}>Practical Tips</span>
          <div style={{ flex: 1, height: 1, background: '#E8E0D0' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {[
            { icon: '🎟️', title: 'Book museums TODAY', body: 'Rijksmuseum and Van Gogh both sell out weeks ahead in April.' },
            { icon: '🌷', title: 'Keukenhof online only', body: 'No door sales — tickets only at keukenhof.nl. Buy before you travel.' },
            { icon: '🚲', title: 'Hire bikes', body: 'Amsterdam is made for cycling. €12–18/day. Lock to fixed racks only — not bridges.' },
            { icon: '🚢', title: 'Free ferries north', body: 'Free from Central Station to Noord (NDSM, EYE). Runs every 15 min.' },
            { icon: '💳', title: 'Card everywhere', body: 'Near-cashless country. Contactless works even at market stalls.' },
            { icon: '☔', title: 'Layers, always', body: 'April: 11–12°C days, 4–6°C nights. Packable rain jacket is non-negotiable.' },
            { icon: '🌷', title: 'Tulip Festival', body: 'Runs all April city-wide — free flower installations everywhere you walk.' },
            { icon: '💱', title: 'ZAR exchange rate', body: '€1 ≈ R19 (March 2026). Use Wise or Revolut — avoid airport exchange.' },
          ].map((t, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #E8E0D0', borderRadius: 12, padding: 16 }}>
              <div style={{ fontSize: 22, marginBottom: 8 }}>{t.icon}</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{t.title}</div>
              <div style={{ fontSize: 13, color: '#777', lineHeight: 1.65 }}>{t.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Brussels callout */}
      <div style={{ textAlign: 'center', padding: '56px 24px', background: '#0D2B1A', borderTop: '1px solid #1B4332' }}>
        <p style={{ color: 'rgba(248,243,236,0.4)', fontSize: 13, marginBottom: 8, letterSpacing: 2, textTransform: 'uppercase' }}>
          Divesh & Mom · April 10–14
        </p>
        <p style={{ color: 'rgba(248,243,236,0.5)', fontSize: 14, marginBottom: 24 }}>
          Everyone else flies home — the adventure continues 🇧🇪
        </p>
        <a href="/brussels" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)', color: '#F8F3EC', fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 700, fontStyle: 'italic', padding: '24px 64px', borderRadius: 18, textDecoration: 'none', letterSpacing: 1, border: '2px solid rgba(201,168,76,0.4)', boxShadow: '0 8px 40px rgba(0,0,0,0.5)', transition: 'transform 0.2s' }}>
          🇧🇪 Brussels
        </a>
        <p style={{ color: 'rgba(248,243,236,0.25)', fontSize: 12, marginTop: 16 }}>
          Brussels · Bruges · 4 more days →
        </p>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '32px 24px 40px', fontSize: 12, color: '#999', borderTop: '1px solid #E8E0D0' }}>
        <div style={{ color: '#D94F3D', fontSize: 22, marginBottom: 8 }}>🌷</div>
        Amsterdam · April 2026 · Curated by Bobby 🐱
        <div style={{ marginTop: 6, fontSize: 11, color: '#bbb' }}>Last updated: March 2026 · Built for the group 🌷</div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Amsterdam />} />
      <Route path="/brussels" element={<Brussels />} />
    </Routes>
  )
}
