import { useState } from 'react'
import { useVotes } from './hooks/useTrip'
import { BRUSSELS_DAYS, BRUSSELS_TIPS } from './data/brusselsData'
import DayCard from './components/DayCard'
import FallingPetals from './components/FallingPetals'

export default function Brussels() {
  const { votes, vote } = useVotes()
  const [tipsOpen, setTipsOpen] = useState(true)

  return (
    <div style={{ background: '#F5F0E0', minHeight: '100vh', fontFamily: "'Outfit', sans-serif", position: 'relative' }}>
      <FallingPetals />

      {/* HERO */}
      <div style={{
        background: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Grand_place_bruxelles.jpg/1600px-Grand_place_bruxelles.jpg') center/cover no-repeat",
        color: '#F8F3EC', padding: '80px 24px 60px', textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'rgba(5, 20, 10, 0.70)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <a href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 12, fontWeight: 500, letterSpacing: 2, textTransform: 'uppercase',
            color: 'rgba(248,243,236,0.5)', textDecoration: 'none',
            padding: '6px 16px', borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.15)',
            marginBottom: 24, transition: 'all 0.15s',
          }}>← Back to Amsterdam</a>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: 4, textTransform: 'uppercase', color: '#C9A84C', marginBottom: 14 }}>
            Divesh & Mom · April 2026
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(52px, 10vw, 96px)', fontWeight: 700, lineHeight: 0.95 }}>
            Brussels<br /><em style={{ fontStyle: 'italic', color: '#C9A84C' }}>& beyond</em>
          </h1>
          <div style={{ marginTop: 22, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20, fontSize: 13, fontWeight: 300, color: 'rgba(248,243,236,0.6)', flexWrap: 'wrap' }}>
            <span>🇧🇪 Belgium</span>
            <span style={{ color: 'rgba(248,243,236,0.2)' }}>·</span>
            <span>10 – 14 April 2026</span>
            <span style={{ color: 'rgba(248,243,236,0.2)' }}>·</span>
            <span>2 travellers</span>
          </div>
          <div style={{
            background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)',
            color: '#e6c060', fontSize: 11, padding: '6px 16px', borderRadius: 999,
            marginTop: 18, display: 'inline-block',
          }}>
            💱 All prices in EUR + ZAR · Live rate: €1 ≈ R19 (March 2026)
          </div>
        </div>
      </div>

      {/* NAV */}
      <div style={{
        background: '#0D2B1A', borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '12px 20px', display: 'flex', gap: 8, overflowX: 'auto',
        scrollbarWidth: 'none', justifyContent: 'center', flexWrap: 'wrap',
        position: 'sticky', top: 0, zIndex: 50,
      }}>
        {[{ href: '#bru-tips', label: "Tips" }, ...BRUSSELS_DAYS.map(d => ({ href: `#${d.id}`, label: `${d.date} Apr` }))].map(item => (
          <a key={item.href} href={item.href} style={{
            textDecoration: 'none', fontSize: 12, fontWeight: 500, letterSpacing: 0.5,
            color: 'rgba(248,243,236,0.5)', padding: '6px 16px', borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.1)', whiteSpace: 'nowrap',
            transition: 'all 0.15s', minHeight: 44, display: 'inline-flex', alignItems: 'center',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = '#F8F3EC'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(248,243,236,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '40px 20px 80px', fontSize: 15 }}>

        {/* Train callout */}
        <div style={{ background: '#0D2B1A', color: '#F8F3EC', borderRadius: 16, padding: 26, marginBottom: 30, display: 'flex', gap: 20 }}>
          <span style={{ fontSize: 28, flexShrink: 0 }}>🚆</span>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, marginBottom: 6 }}>Amsterdam → Brussels by Train</h3>
            <p style={{ fontSize: 14, color: 'rgba(248,243,236,0.65)', lineHeight: 1.65, marginBottom: 14 }}>
              The Eurostar / Thalys high-speed train takes ~1h 50min and drops you right in the city centre. No airport security, no luggage faff. Book at least 4–8 weeks ahead for the best fares (€29–79 each way).
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="https://www.eurostar.com/uk-en/train/netherlands/amsterdam/belgium/brussels" target="_blank" rel="noreferrer" style={{
                fontSize: 13, fontWeight: 700, padding: '7px 18px', borderRadius: 999,
                background: '#C9A84C', color: '#0D2B1A', textDecoration: 'none',
                minHeight: 44, display: 'inline-flex', alignItems: 'center', gap: 6,
                fontFamily: "'Outfit', sans-serif",
              }}>
                🎟️ Book Eurostar
              </a>
              <a href="https://www.belgiantrain.be/en" target="_blank" rel="noreferrer" style={{
                fontSize: 13, fontWeight: 500, padding: '7px 18px', borderRadius: 999,
                background: 'rgba(255,255,255,0.08)', color: 'rgba(248,243,236,0.7)',
                border: '1px solid rgba(255,255,255,0.15)', textDecoration: 'none',
                minHeight: 44, display: 'inline-flex', alignItems: 'center', gap: 6,
                fontFamily: "'Outfit', sans-serif",
              }}>
                🚉 Belgian Rail (SNCB)
              </a>
            </div>
          </div>
        </div>

        {/* Bobby's Brussels Tips */}
        <div id="bru-tips" style={{ background: '#fff', border: '1px solid #D8D0C0', borderRadius: 16, marginBottom: 32, overflow: 'hidden', scrollMarginTop: 70 }}>
          <div style={{ background: '#1B4332', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 32 }}>🇧🇪</span>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 700, color: '#F5F0E0' }}>Brussels Essentials</div>
                <div style={{ fontSize: 12, color: 'rgba(245,240,224,0.5)', marginTop: 2 }}>What you need to know before you arrive</div>
              </div>
            </div>
            <button
              onClick={() => setTipsOpen(o => !o)}
              style={{
                fontSize: 11, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase',
                color: '#C9A84C', background: 'none', border: 'none', cursor: 'pointer',
                padding: 0, fontFamily: "'Outfit', sans-serif", minHeight: 44, flexShrink: 0,
              }}
            >
              {tipsOpen ? '▲ Hide' : '▼ Show'}
            </button>
          </div>
          {tipsOpen && (
            <div style={{ padding: '20px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
              {BRUSSELS_TIPS.map((tip, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{tip.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#1C1C1C', marginBottom: 3 }}>{tip.title}</div>
                    <div style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{tip.body}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Day Cards */}
        {BRUSSELS_DAYS.map(day => (
          <DayCard
            key={day.id}
            day={day}
            votes={votes}
            onVote={vote}
            liveWeather={null}
          />
        ))}

        {/* Back to Amsterdam */}
        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 14, fontWeight: 600, padding: '12px 28px', borderRadius: 999,
            background: '#1C1C1C', color: '#F8F3EC', textDecoration: 'none',
            minHeight: 44, fontFamily: "'Outfit', sans-serif",
          }}>
            🌷 Back to Amsterdam
          </a>
        </div>

      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '32px 24px 40px', fontSize: 12, color: '#999', borderTop: '1px solid #D8D0C0' }}>
        <div style={{ color: '#C9A84C', fontSize: 22, marginBottom: 8 }}>🇧🇪</div>
        Brussels & Bruges · April 2026 · Divesh & Mom
        <div style={{ marginTop: 6, fontSize: 11, color: '#bbb' }}>Last updated: March 2026</div>
      </footer>
    </div>
  )
}
