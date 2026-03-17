import { DAYS, POLLS } from './data/tripData'
import { useVotes, usePolls, useWeather } from './hooks/useTrip'
import DayCard from './components/DayCard'
import Poll from './components/Poll'
import BobbyTips from './components/BobbyTips'

export default function App() {
  const { votes, vote } = useVotes()
  const { pollVotes, votePoll } = usePolls()
  const liveWeather = useWeather()

  return (
    <div style={{ background: '#F8F3EC', minHeight: '100vh', fontFamily: "'Outfit', sans-serif" }}>

      {/* HERO */}
      <div style={{
        background: '#1C1C1C', color: '#F8F3EC', padding: '56px 24px 44px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 70% 50% at 15% 90%, rgba(30,95,116,0.3) 0%, transparent 55%), radial-gradient(ellipse 50% 60% at 85% 10%, rgba(217,79,61,0.22) 0%, transparent 55%)',
        }} />
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: 'uppercase', color: '#B8860B', marginBottom: 14, position: 'relative' }}>
          Group Trip · April 2026
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(52px, 10vw, 96px)', fontWeight: 700, lineHeight: 0.95, position: 'relative' }}>
          Amsterdam<br /><em style={{ fontStyle: 'italic', color: '#D94F3D' }}>in bloom</em>
        </h1>
        <div style={{ marginTop: 22, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, fontSize: 13, fontWeight: 300, color: 'rgba(248,243,236,0.6)', position: 'relative', flexWrap: 'wrap' }}>
          <span>🏨 Ruby Emma Hotel</span>
          <span style={{ color: 'rgba(248,243,236,0.2)' }}>·</span>
          <span>3 – 10 April 2026</span>
          <span style={{ color: 'rgba(248,243,236,0.2)' }}>·</span>
          <span>6 travellers</span>
        </div>
        <div style={{
          background: 'rgba(184,134,11,0.15)', border: '1px solid rgba(184,134,11,0.3)',
          color: '#e6c060', fontSize: 11, padding: '6px 16px', borderRadius: 999,
          marginTop: 18, display: 'inline-block', position: 'relative',
        }}>
          💱 All prices in EUR + ZAR · Live rate: €1 ≈ R19 (March 2026)
        </div>
      </div>

      {/* NAV */}
      <div style={{
        background: '#1C1C1C', borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '12px 20px', display: 'flex', gap: 8, overflowX: 'auto',
        scrollbarWidth: 'none', justifyContent: 'center', flexWrap: 'wrap',
        position: 'sticky', top: 0, zIndex: 50,
      }}>
        {[{ href: '#bobby', label: "Bobby's Tips" }, ...DAYS.map(d => ({ href: `#${d.id}`, label: `${d.date} Apr` }))].map(item => (
          <a key={item.href} href={item.href} style={{
            textDecoration: 'none', fontSize: 11, fontWeight: 500, letterSpacing: 0.5,
            color: 'rgba(248,243,236,0.5)', padding: '5px 14px', borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.1)', whiteSpace: 'nowrap',
            transition: 'all 0.15s',
          }}
            onMouseEnter={e => { e.target.style.color = '#F8F3EC'; e.target.style.borderColor = 'rgba(255,255,255,0.3)' }}
            onMouseLeave={e => { e.target.style.color = 'rgba(248,243,236,0.5)'; e.target.style.borderColor = 'rgba(255,255,255,0.1)' }}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '40px 20px 80px' }}>

        {/* Booking key */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36, padding: '18px 20px', background: '#fff', border: '1px solid #E8E0D0', borderRadius: 12 }}>
          <div style={{ width: '100%', fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: '#999', marginBottom: 4 }}>Booking urgency guide</div>
          {[
            { style: { color: '#C0392B', border: '#f0b0a8', bg: '#FFF5F5', dot: '#C0392B' }, label: 'Book TODAY — fills weeks out' },
            { style: { color: '#D4860A', border: '#f0d0a0', bg: '#FFFBF0', dot: '#D4860A' }, label: 'Book this week — filling fast' },
            { style: { color: '#2E7D52', border: '#a8d8b8', bg: '#F0FBF4', dot: '#2E7D52' }, label: 'Walk-in / book day before is fine' },
          ].map((b, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, fontWeight: 500, padding: '5px 13px', borderRadius: 999, border: `1.5px solid ${b.style.border}`, background: b.style.bg, color: b.style.color }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: b.style.dot, display: 'inline-block' }} />
              {b.label}
            </div>
          ))}
        </div>

        {/* Fancy dinner callout */}
        <div style={{ background: '#1C1C1C', color: '#F8F3EC', borderRadius: 16, padding: 26, marginBottom: 30, display: 'flex', gap: 20 }}>
          <span style={{ fontSize: 28, flexShrink: 0 }}>🍽️</span>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>The One Fancy Dinner</h3>
            <p style={{ fontSize: 13, color: 'rgba(248,243,236,0.65)', lineHeight: 1.6, marginBottom: 14 }}>One splurge for the trip. All three are exceptional — book today. April is peak season.</p>
            {[
              { name: 'De Kas', desc: 'Farm-to-table in a 1926 greenhouse. Best fit: Day 3 evening.', price: '€65–85 pp (≈R1,235–1,615)', menu: 'https://www.restaurantdekas.nl/en/menu/', book: 'https://www.restaurantdekas.nl/en/' },
              { name: 'Restaurant Breda', desc: 'Contemporary Dutch, Jordaan. Great farewell dinner on Day 7.', price: '€55–75 pp (≈R1,045–1,425)', menu: 'https://www.restaurantbreda.nl/menu', book: 'https://www.restaurantbreda.nl' },
              { name: 'Rijks Restaurant', desc: 'Inside the Rijksmuseum. One of Amsterdam\'s most beautiful dining rooms.', price: '€55–70 pp (≈R1,045–1,330)', menu: 'https://www.rijks.nl/en/restaurant/menu', book: 'https://www.rijks.nl/en/restaurant' },
            ].map(r => (
              <div key={r.name} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '13px 15px', marginBottom: 10, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
                <div>
                  <div style={{ fontWeight: 600, color: '#F8F3EC' }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(248,243,236,0.5)', marginTop: 3 }}>{r.desc}</div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 6 }}>
                    <a href={r.menu} target="_blank" rel="noreferrer" style={{ fontSize: 11, padding: '2px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.08)', color: 'rgba(248,243,236,0.6)', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none' }}>📋 Menu</a>
                    <a href={r.book} target="_blank" rel="noreferrer" style={{ fontSize: 11, padding: '2px 10px', borderRadius: 999, background: 'rgba(255,255,255,0.08)', color: 'rgba(248,243,236,0.6)', border: '1px solid rgba(255,255,255,0.12)', textDecoration: 'none' }}>🌐 Book</a>
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontWeight: 600, color: '#e6c060', fontSize: 14 }}>{r.price}</div>
                  <div style={{ fontSize: 11, color: 'rgba(248,243,236,0.4)', marginTop: 3 }}>⚠️ Book NOW</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bobby Tips */}
        <BobbyTips />

        {/* Group Polls */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '32px 0 20px' }}>
            <div style={{ flex: 1, height: 1, background: '#E8E0D0' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#999', whiteSpace: 'nowrap' }}>Group Polls</span>
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

        {/* Day Cards */}
        {DAYS.map(day => (
          <DayCard
            key={day.id}
            day={day}
            votes={votes}
            onVote={vote}
            liveWeather={liveWeather}
          />
        ))}

        {/* Practical tips */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '32px 0 20px' }}>
          <div style={{ flex: 1, height: 1, background: '#E8E0D0' }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase', color: '#999' }}>Practical Tips</span>
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
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{t.title}</div>
              <div style={{ fontSize: 12, color: '#777', lineHeight: 1.5 }}>{t.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '32px 24px 40px', fontSize: 12, color: '#999', borderTop: '1px solid #E8E0D0' }}>
        <div style={{ color: '#D94F3D', fontSize: 22, marginBottom: 8 }}>🌷</div>
        Amsterdam · April 2026 · Curated by Bobby 🐱
      </footer>
    </div>
  )
}
