// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1rem 2rem',
      background: scrolled ? 'rgba(8,12,16,0.95)' : 'rgba(8,12,16,0.7)',
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${scrolled ? '#1e2d3d' : 'transparent'}`,
      transition: 'all 0.3s ease'
    }}>
      {/* Logo */}
      <div style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
        Clarity<span style={{ color: 'var(--accent)' }}>AI</span>
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        {['How it Works', 'Try it'].map((label, i) => (
          <a
            key={i}
            href={i === 0 ? '#how' : '#tool'}
            style={{
              color: 'var(--muted)', textDecoration: 'none',
              fontSize: '0.875rem', fontWeight: 500, transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            {label}
          </a>
        ))}
        <a
          href="#tool"
          style={{
            background: 'var(--accent)', color: '#000',
            padding: '0.5rem 1.25rem', borderRadius: '6px',
            fontWeight: 700, fontSize: '0.875rem',
            textDecoration: 'none', transition: 'opacity 0.2s'
          }}
          onMouseEnter={e => e.target.style.opacity = '0.85'}
          onMouseLeave={e => e.target.style.opacity = '1'}
        >
          Get Clarity →
        </a>
      </div>
    </nav>
  )
}
