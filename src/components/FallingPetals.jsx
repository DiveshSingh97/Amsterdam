import { useMemo } from 'react'

const SHADES = [
  '#FFB7C5',
  '#FF99B4',
  '#F5A0BA',
  '#FFD2DC',
  '#FFAAC0',
  '#F07898',
  '#FFC8D5',
]

function rand(min, max) {
  return min + Math.random() * (max - min)
}

export default function FallingPetals() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640
  const count = isMobile ? 0 : typeof window !== 'undefined' && window.innerWidth < 1024 ? 14 : 28

  const petals = useMemo(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left:     rand(0, 100),
      duration: rand(9, 18),
      delay:    rand(0, 16),
      width:    rand(9, 16),
      height:   rand(15, 26),
      color:    SHADES[Math.floor(Math.random() * SHADES.length)],
      initRot:  rand(0, 360),
      drift:    rand(-60, 60),
    })),
  [count])

  if (count === 0) return null

  return (
    <div style={{
      position: 'fixed', inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      zIndex: 9999,
    }}>
      <style>{`
        @keyframes sakuraFall {
          0%   { transform: translateY(-40px) translateX(0px)      rotate(0deg)   scaleX(1.0); opacity: 0;   }
          6%   {                                                                                opacity: 0.9; }
          28%  { transform: translateY(28vh)  translateX(var(--d1)) rotate(110deg) scaleX(0.5); }
          55%  { transform: translateY(58vh)  translateX(var(--d2)) rotate(240deg) scaleX(0.9); }
          82%  {                                                                                opacity: 0.8; }
          100% { transform: translateY(112vh) translateX(var(--d3)) rotate(390deg) scaleX(0.6); opacity: 0;  }
        }
      `}</style>

      {petals.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.left}%`,
            top: 0,
            width:  p.width,
            height: p.height,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            background: p.color,
            boxShadow: `inset 0 -2px 4px rgba(200,70,110,0.15)`,
            transform: `rotate(${p.initRot}deg)`,
            animation: `sakuraFall ${p.duration}s ${p.delay}s infinite ease-in`,
            willChange: 'transform, opacity',
            opacity: 0,
            '--d1': `${p.drift}px`,
            '--d2': `${-p.drift * 0.6}px`,
            '--d3': `${p.drift * 0.3}px`,
          }}
        />
      ))}
    </div>
  )
}
