import { useState } from 'react'

const TIPS = [
  {
    icon: '📱',
    title: 'eSIM — Buy Before You Fly',
    highlight: true,
    content: (
      <>
        If your phone supports eSIM, buy a European data plan through{' '}
        <a href="https://www.airalo.com" target="_blank" rel="noreferrer" style={{ color: '#e6c060', borderBottom: '1px solid rgba(230,192,96,0.3)' }}>
          Airalo
        </a>{' '}
        before you leave. Significantly cheaper than SA roaming charges. The Netherlands/Europe pack covers all day trips too. Set it up at home — don't leave it for the airport.
      </>
    )
  },
  {
    icon: '🚆',
    title: 'Transport & Getting Around',
    content: (
      <ul>
        <li>Download <strong>NS app</strong> (trains) and <strong>GVB app</strong> (Amsterdam trams/metro)</li>
        <li>Get an <strong>OV-chipkaart</strong> at Schiphol — tap in/out on all public transport. Card costs €7.50</li>
        <li>Contactless bank cards now work on GVB trams/buses directly — tap to pay</li>
        <li>Schiphol → Amsterdam Centraal by train: 17 min, every 10 min</li>
        <li>Use <strong>Uber</strong> or official Schiphol taxis only — avoid unmarked cabs</li>
      </ul>
    )
  },
  {
    icon: '💳',
    title: 'Money & Cards',
    content: (
      <ul>
        <li>Netherlands is near-cashless — cards accepted almost everywhere</li>
        <li>Use <strong>Wise</strong> or <strong>Revolut</strong> for best EUR rate — much better than FNB or airport exchange</li>
        <li>Current rate: <strong>€1 ≈ R19</strong> — check closer to departure</li>
        <li>Budget roughly <strong>€60–100 pp per day</strong> (≈R1,140–1,900) covering food + entries + transport</li>
      </ul>
    )
  },
  {
    icon: '🎟️',
    title: 'Getting Discounts',
    content: (
      <ul>
        <li><strong>Amsterdam City Card</strong> — covers Rijksmuseum, Van Gogh, canal cruise + unlimited GVB. 3-day from €85 (≈R1,615). Worth it if doing 4+ paid attractions</li>
        <li>Book museum tickets online in advance — same price, but avoid sold-out slots</li>
        <li>Keukenhof is cheaper online — buy at keukenhof.nl</li>
        <li>EYE Film Museum and NDSM Wharf ferry: completely free</li>
      </ul>
    )
  },
  {
    icon: '🗺️',
    title: 'Apps to Download',
    content: (
      <ul>
        <li><strong>Google Maps</strong> — works perfectly for Amsterdam tram routing</li>
        <li><strong>NS</strong> — Dutch national rail for Utrecht/Haarlem trains</li>
        <li><strong>GVB</strong> — Amsterdam city trams, metro, buses</li>
        <li><strong>Airalo</strong> — manage your eSIM data plan</li>
        <li><strong>Uber</strong> — works well for late nights in Amsterdam</li>
      </ul>
    )
  },
  {
    icon: '🧳',
    title: "Packing — Don't Forget",
    content: (
      <ul>
        <li>☂️ <strong>Packable rain jacket</strong> — not optional in April Amsterdam</li>
        <li>👟 <strong>Comfortable walking shoes</strong> — cobblestones everywhere, 15,000+ steps/day</li>
        <li>🧥 <strong>Mid-layer fleece</strong> — evenings drop to 4–7°C</li>
        <li>🧣 <strong>Scarf</strong> — wind off the canals is real</li>
        <li>🔌 <strong>EU plug adapter (Type C/F)</strong> — SA plugs don't fit</li>
        <li>💊 <strong>Antihistamine</strong> — tulip season, pollen is real</li>
        <li>📋 <strong>Printed Schengen visa + passport</strong> — carry both at all times</li>
      </ul>
    )
  },
  {
    icon: '🚫',
    title: "What NOT To Do",
    content: (
      <ul>
        <li>✗ Don't walk in bike lanes — cyclists will not slow down</li>
        <li>✗ Don't rent a bike on Day 1 — learn the city on foot first</li>
        <li>✗ Don't photograph sex workers in De Wallen — ever</li>
        <li>✗ Don't lock your bike to bridges — it will be removed</li>
        <li>✗ Don't buy tours from people near Central Station</li>
        <li>✗ Don't assume restaurants accept walk-ins in April</li>
        <li>✗ Don't carry large amounts of cash — pickpockets in tourist areas</li>
      </ul>
    )
  },
  {
    icon: '🧭',
    title: 'Finding Good Guided Tours',
    content: (
      <ul>
        <li>Use <strong>GetYourGuide</strong> or <strong>Viator</strong> — vetted, with reviews and cancellation policies</li>
        <li>Red Light District: <a href="https://www.amsterdamredlighttours.com" target="_blank" rel="noreferrer" style={{ color: '#e6c060', borderBottom: '1px solid rgba(230,192,96,0.3)' }}>Amsterdam Red Light District Tours</a> is reputable</li>
        <li><strong>Sandeman's</strong> free walking tour — tip-based, great Day 1 orientation</li>
        <li>Avoid tours from hotel lobbies or street kiosks — usually overpriced</li>
      </ul>
    )
  },
  {
    icon: '🌍',
    title: 'SA → Netherlands Notes',
    content: (
      <ul>
        <li>Flight: ~10–11 hrs direct (KLM flies JNB–AMS)</li>
        <li>Time difference: <strong>Same timezone</strong> in April — both SAST and CEST = UTC+2</li>
        <li>Schengen visa: carry original + printed copy at all times</li>
        <li>Emergency number in Netherlands: <strong>112</strong></li>
        <li>SA Embassy Amsterdam: +31 20 392 4501</li>
      </ul>
    )
  },
]

export default function BobbyTips() {
  const [open, setOpen] = useState(true)

  return (
    <div id="bobby" style={{ background: '#1C1C1C', borderRadius: 20, overflow: 'hidden', marginBottom: 36, scrollMarginTop: 70 }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'stretch', cursor: 'pointer' }} onClick={() => setOpen(o => !o)}>
        <div style={{ width: 140, flexShrink: 0, background: '#3d2b1f' }}>
          <img src="/bobby.png" alt="Bobby — Official Trip Advisor" style={{ width: 140, height: 140, objectFit: 'cover', display: 'block' }} />
        </div>
        <div style={{ flex: 1, padding: '22px 26px', borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 700, color: '#F8F3EC', lineHeight: 1.1 }}>
            Bobby's Tips
            <span style={{ fontStyle: 'italic', color: '#D94F3D' }}> — Official Trip Advisor</span>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(248,243,236,0.45)', marginTop: 6 }}>
            Essential intel before you leave. {open ? '▲ Collapse' : '▼ Expand'}
          </div>
        </div>
      </div>

      {/* Body */}
      {open && (
        <div style={{ padding: '0 26px 26px' }}>

          {/* eSIM highlight */}
          <div style={{
            marginTop: 18, background: 'rgba(184,134,11,0.12)', border: '1px solid rgba(184,134,11,0.25)',
            borderRadius: 12, padding: '16px 18px', display: 'flex', gap: 14,
          }}>
            <span style={{ fontSize: 24, flexShrink: 0 }}>📱</span>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#e6c060', marginBottom: 4 }}>
                Buy your eSIM before you fly — don't roam
              </div>
              <div style={{ fontSize: 14, color: 'rgba(248,243,236,0.6)', lineHeight: 1.7 }}>
                If your phone supports eSIM, buy a European data plan through{' '}
                <a href="https://www.airalo.com" target="_blank" rel="noreferrer"
                  style={{ color: '#e6c060', fontWeight: 600, borderBottom: '1px solid rgba(230,192,96,0.4)', textDecoration: 'none' }}>
                  Airalo
                </a>{' '}
                before you leave. Significantly cheaper than roaming from a SA carrier. Set it up at home — not at the airport.
              </div>
            </div>
          </div>

          {/* Tips grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12, marginTop: 14 }}>
            {TIPS.filter(t => t.title !== "eSIM — Buy Before You Fly").map((tip, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12, padding: '16px 18px',
              }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{tip.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#F8F3EC', marginBottom: 6 }}>{tip.title}</div>
                <div style={{
                  fontSize: 14, color: 'rgba(248,243,236,0.6)', lineHeight: 1.7,
                  listStyleType: 'none',
                }}>
                  <style>{`
                    .bobby-tip-content ul { list-style: none; padding: 0; margin: 0; }
                    .bobby-tip-content ul li { padding-left: 14px; position: relative; margin-bottom: 4px; }
                    .bobby-tip-content ul li::before { content: '·'; position: absolute; left: 0; color: #D94F3D; }
                    .bobby-tip-content strong { color: #F8F3EC; }
                    .bobby-tip-content a { color: #e6c060; text-decoration: none; border-bottom: 1px solid rgba(230,192,96,0.3); }
                  `}</style>
                  <div className="bobby-tip-content">{tip.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
