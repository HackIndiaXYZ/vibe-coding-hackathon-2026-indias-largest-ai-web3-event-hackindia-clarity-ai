// src/components/Footer.jsx
import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '3rem 2rem',
      textAlign: 'center',
      color: 'var(--muted)',
      fontSize: '0.875rem'
    }}>
      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text)', marginBottom: '0.5rem' }}>
        Clarity<span style={{ color: 'var(--accent)' }}>AI</span>
      </div>
      <p style={{ lineHeight: 1.7 }}>
        Built for HackIndia Vibe Coding Hackathon · Stop overthinking, start acting.
      </p>
      <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
        Powered by Claude AI · All analysis is private and not stored.
      </p>
    </footer>
  )
}
