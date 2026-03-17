import { useState } from 'react'
import { ZAR_RATE } from '../data/tripData'

const TIER_STYLES = {
  budget:  { label: 'Budget',     bg: '#EDF7F1', color: '#2E7D52' },
  mid:     { label: 'Mid',        bg: '#EBF4F8', color: '#1E5F74' },
  fancy:   { label: 'Fancy',      bg: '#FDF5E6', color: '#8B5E00' },
  splurge: { label: '⭐ Top Pick', bg: '#F9F0FC', color: '#7B2D8B' },
}

const BOOK_STYLES = {
  now:  { dot: '#C0392B', bg: '#FFF5F5', border: '#f0b0a8', color: '#C0392B' },
  soon: { dot: '#D4860A', bg: '#FFFBF0', border: '#f0d0a0', color: '#D4860A' },
  easy: { dot: '#2E7D52', bg: '#F0FBF4', border: '#a8d8b8', color: '#2E7D52' },
}

export default function RestaurantCard({ resto, voteData, onVote }) {
  const tier = TIER_STYLES[resto.tier] || TIER_STYLES.mid
  const book = BOOK_STYLES[resto.booking] || BOOK_STYLES.easy
  const upCount = voteData?.up || 0
  const downCount = voteData?.down || 0
  const userVote = voteData?.userVote || null

  const zarMin = Math.round(resto.eurMin * ZAR_RATE)
  const zarMax = Math.round(resto.eurMax * ZAR_RATE)

  if (resto.eurMin === 0) return null // skip placeholder entries

  return (
    <div style={{
      border: '1px solid #E8E0D0',
      borderRadius: 12,
      padding: '14px 16px',
      background: '#fff',
      position: 'relative',
      transition: 'box-shadow 0.15s',
    }}>
      {/* Tier badge */}
      <div style={{
        position: 'absolute', top: 14, right: 14,
        fontSize: 10, fontWeight: 700, letterSpacing: 1,
        textTransform: 'uppercase', padding: '3px 9px',
        borderRadius: 999, background: tier.bg, color: tier.color,
      }}>{tier.label}</div>

      {/* Name */}
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, paddingRight: 90, lineHeight: 1.2 }}>
        {resto.name}
      </div>
      <div style={{ fontSize: 12, color: '#999', marginTop: 2, marginBottom: 8 }}>{resto.type}</div>
      <div style={{ fontSize: 13, color: '#555', lineHeight: 1.5, marginBottom: 10 }}>{resto.desc}</div>

      {/* Price + distance */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>
          €{resto.eurMin}–{resto.eurMax} pp
          <span style={{ fontWeight: 400, color: '#666', fontSize: 12, marginLeft: 4 }}>≈ R{zarMin}–{zarMax}</span>
        </span>
        <span style={{ fontSize: 12, color: '#777', background: '#F2EAD8', padding: '3px 9px', borderRadius: 999 }}>
          📍 {resto.dist}
        </span>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center', marginBottom: 10 }}>
        {resto.menuUrl && (
          <a href={resto.menuUrl} target="_blank" rel="noreferrer" style={{
            fontSize: 11, padding: '3px 11px', borderRadius: 999,
            border: '1px solid #1C1C1C', color: '#fff', background: '#1C1C1C',
            textDecoration: 'none', fontFamily: "'Outfit', sans-serif",
          }}>📋 Menu / View</a>
        )}
        {resto.bookUrl && (
          <a href={resto.bookUrl} target="_blank" rel="noreferrer" style={{
            fontSize: 11, padding: '3px 11px', borderRadius: 999,
            border: '1px solid #E8E0D0', color: '#555', background: '#F8F3EC',
            textDecoration: 'none', fontFamily: "'Outfit', sans-serif",
          }}>🌐 Book</a>
        )}
        {/* Booking badge */}
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          fontSize: 11, fontWeight: 600, padding: '3px 10px',
          borderRadius: 999, border: `1.5px solid ${book.border}`,
          background: book.bg, color: book.color,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: book.dot, display: 'inline-block' }} />
          {resto.bookingText}
        </span>
      </div>

      {/* Vote buttons */}
      {onVote && (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', borderTop: '1px solid #F2EAD8', paddingTop: 10, marginTop: 4 }}>
          <span style={{ fontSize: 11, color: '#aaa', marginRight: 4 }}>Group vote:</span>
          <button
            onClick={() => onVote(resto.id, 'up')}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '5px 12px', borderRadius: 999, cursor: 'pointer',
              border: `1.5px solid ${userVote === 'up' ? '#2E7D52' : '#E8E0D0'}`,
              background: userVote === 'up' ? '#EDF7F1' : '#fff',
              color: userVote === 'up' ? '#2E7D52' : '#555',
              fontSize: 13, fontWeight: userVote === 'up' ? 600 : 400,
              transition: 'all 0.15s', fontFamily: "'Outfit', sans-serif",
            }}
          >
            👍 {upCount > 0 ? upCount : ''}
          </button>
          <button
            onClick={() => onVote(resto.id, 'down')}
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              padding: '5px 12px', borderRadius: 999, cursor: 'pointer',
              border: `1.5px solid ${userVote === 'down' ? '#C0392B' : '#E8E0D0'}`,
              background: userVote === 'down' ? '#FFF5F5' : '#fff',
              color: userVote === 'down' ? '#C0392B' : '#555',
              fontSize: 13, fontWeight: userVote === 'down' ? 600 : 400,
              transition: 'all 0.15s', fontFamily: "'Outfit', sans-serif",
            }}
          >
            👎 {downCount > 0 ? downCount : ''}
          </button>
        </div>
      )}
    </div>
  )
}
