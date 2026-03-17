export default function Poll({ poll, pollData, onVote }) {
  const userVote = pollData?.userVote || null
  const total = poll.options.reduce((sum, opt) => sum + (pollData?.[opt.id] || 0), 0)

  return (
    <div style={{
      background: '#1C1C1C', borderRadius: 14, padding: '18px 20px', marginBottom: 16,
    }}>
      <div style={{ fontSize: 14, fontWeight: 600, color: '#F8F3EC', marginBottom: 12, lineHeight: 1.65 }}>
        🗳️ {poll.question}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {poll.options.map(opt => {
          const count = pollData?.[opt.id] || 0
          const pct = total > 0 ? Math.round((count / total) * 100) : 0
          const isVoted = userVote === opt.id

          return (
            <button
              key={opt.id}
              onClick={() => onVote(poll.id, opt.id)}
              style={{
                position: 'relative', overflow: 'hidden',
                background: isVoted ? 'rgba(184,134,11,0.15)' : 'rgba(255,255,255,0.06)',
                border: `1.5px solid ${isVoted ? 'rgba(184,134,11,0.5)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: 10, padding: '10px 14px',
                cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.15s', fontFamily: "'Outfit', sans-serif",
              }}
            >
              {/* Progress bar */}
              {total > 0 && (
                <div style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  width: `${pct}%`,
                  background: isVoted ? 'rgba(184,134,11,0.12)' : 'rgba(255,255,255,0.04)',
                  transition: 'width 0.4s ease',
                }} />
              )}
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: isVoted ? 600 : 400, color: isVoted ? '#e6c060' : '#F8F3EC' }}>
                    {isVoted && '✓ '}{opt.label}
                  </div>
                  {opt.desc && <div style={{ fontSize: 11, color: 'rgba(248,243,236,0.45)', marginTop: 2 }}>{opt.desc}</div>}
                </div>
                {total > 0 && (
                  <div style={{ fontSize: 12, color: isVoted ? '#e6c060' : 'rgba(248,243,236,0.5)', fontWeight: 500, flexShrink: 0, marginLeft: 12 }}>
                    {pct}% ({count})
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>
      {total > 0 && (
        <div style={{ fontSize: 11, color: 'rgba(248,243,236,0.3)', marginTop: 8, textAlign: 'right' }}>
          {total} {total === 1 ? 'vote' : 'votes'} total
        </div>
      )}
    </div>
  )
}
