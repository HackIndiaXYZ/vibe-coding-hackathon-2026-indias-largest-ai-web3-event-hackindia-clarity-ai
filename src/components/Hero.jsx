// src/components/Hero.jsx
import React from 'react'

export default function Hero() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '6rem 2rem 4rem',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)'
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 400,
        background: 'radial-gradient(ellipse, rgba(0,212,255,0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', maxWidth: 800 }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
          padding: '0.4rem 1rem', borderRadius: 100,
          fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em',
          marginBottom: '2rem'
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--accent)', display: 'inline-block',
            animation: 'pulse 2s infinite'
          }} />
          ✦ AI-Powered Decision Engine
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 800, lineHeight: 1.05,
          letterSpacing: '-0.03em', marginBottom: '1.25rem'
        }}>
          Stop <span style={{ color: 'var(--muted)' }}>Overthinking.</span><br />
          Start <span style={{ color: 'var(--accent)' }}>Acting.</span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'var(--muted)', maxWidth: 540, margin: '0 auto 2.5rem',
          lineHeight: 1.6, fontWeight: 400
        }}>
          Paste your tangled thoughts. Get a clear decision, structured analysis,
          and actionable steps — in seconds.
        </p>

        {/* CTA */}
        <a
          href="#tool"
          style={{
            display: 'inline-block',
            background: 'var(--accent)', color: '#000',
            padding: '0.875rem 2.5rem', borderRadius: 8,
            fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.01em',
            textDecoration: 'none', transition: 'all 0.2s',
            boxShadow: '0 0 40px rgba(0,212,255,0.3)'
          }}
          onMouseEnter={e => {
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 0 60px rgba(0,212,255,0.4)'
          }}
          onMouseLeave={e => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 0 40px rgba(0,212,255,0.3)'
          }}
        >
          ✦ Try Clarity AI Free
        </a>

        {/* Stats */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: '3rem',
          marginTop: '4rem', paddingTop: '2rem',
          borderTop: '1px solid var(--border)'
        }}>
          {[
            { num: '∞', label: 'Decisions clarified' },
            { num: '3s', label: 'Average response' },
            { num: '100%', label: 'Overthinking eliminated' }
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--accent)' }}>{s.num}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
