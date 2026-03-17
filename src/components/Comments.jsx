import { useState } from 'react'

export default function Comments({ dayId, comments, onAdd }) {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!message.trim()) return
    setSubmitting(true)
    await onAdd(name, message)
    setMessage('')
    setName('')
    setSubmitting(false)
    setOpen(false)
  }

  return (
    <div style={{ marginTop: 4 }}>
      {/* Existing comments */}
      {comments.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 14 }}>
          {comments.map(c => (
            <div key={c.id} style={{
              background: '#F8F3EC', borderRadius: 10, padding: '12px 16px',
              borderLeft: '3px solid #E8E0D0',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#1C1C1C' }}>{c.name}</span>
                <span style={{ fontSize: 12, color: '#aaa' }}>
                  {new Date(c.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}
                </span>
              </div>
              <div style={{ fontSize: 15, color: '#555', lineHeight: 1.7 }}>{c.message}</div>
            </div>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          fontSize: 13, fontWeight: 500, padding: '8px 16px', borderRadius: 999,
          border: '1px solid #E8E0D0', background: open ? '#1C1C1C' : '#fff',
          color: open ? '#F8F3EC' : '#666', cursor: 'pointer', minHeight: 44,
          fontFamily: "'Outfit', sans-serif", transition: 'all 0.15s',
        }}
      >
        💬 {open ? 'Cancel' : `Add a comment${comments.length > 0 ? ` (${comments.length})` : ''}`}
      </button>

      {/* Comment form */}
      {open && (
        <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <input
            placeholder="Your name (optional)"
            value={name}
            onChange={e => setName(e.target.value)}
            style={{
              padding: '10px 14px', borderRadius: 8, border: '1px solid #E8E0D0',
              fontSize: 15, fontFamily: "'Outfit', sans-serif", outline: 'none',
              background: '#FAFAF8',
            }}
          />
          <textarea
            placeholder="Leave a note, suggestion, or feedback for this day..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={3}
            style={{
              padding: '10px 14px', borderRadius: 8, border: '1px solid #E8E0D0',
              fontSize: 15, fontFamily: "'Outfit', sans-serif", outline: 'none',
              background: '#FAFAF8', resize: 'vertical',
            }}
          />
          <button
            onClick={handleSubmit}
            disabled={submitting || !message.trim()}
            style={{
              alignSelf: 'flex-start', padding: '10px 22px', borderRadius: 999,
              background: '#1C1C1C', color: '#F8F3EC', border: 'none', minHeight: 44,
              fontSize: 14, fontWeight: 500, cursor: submitting ? 'not-allowed' : 'pointer',
              opacity: (!message.trim() || submitting) ? 0.5 : 1,
              fontFamily: "'Outfit', sans-serif", transition: 'opacity 0.15s',
            }}
          >
            {submitting ? 'Posting...' : 'Post comment'}
          </button>
        </div>
      )}
    </div>
  )
}
