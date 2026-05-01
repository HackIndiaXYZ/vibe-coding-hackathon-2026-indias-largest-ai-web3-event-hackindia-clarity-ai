// src/components/HowItWorks.jsx
import React from 'react'

const steps = [
  {
    num: '01',
    title: 'Dump your thoughts',
    desc: 'Write anything. A decision you can\'t make. A situation stressing you out. A loop you can\'t escape. No filtering needed.'
  },
  {
    num: '02',
    title: 'AI detects the pattern',
    desc: 'Our model identifies overthinking patterns, extracts the real core problem, and scores how tangled your thinking is.'
  },
  {
    num: '03',
    title: 'Get your action plan',
    desc: 'Receive a clear recommendation and 3–5 concrete next steps. No fluff. No motivational posters. Just what to do.'
  }
]

export default function HowItWorks() {
  return (
    <section id="how" style={{ padding: '5rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
      <p style={{
        fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em',
        color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem'
      }}>⚡ How it works</p>

      <h2 style={{
        fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800,
        letterSpacing: '-0.03em', marginBottom: '1rem'
      }}>Three steps to clarity</h2>

      <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '3rem', lineHeight: 1.6 }}>
        No therapy sessions. No endless journaling. Just you, your thoughts, and a brutally logical AI.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem'
      }}>
        {steps.map((step, i) => (
          <div key={i} style={{
            background: 'var(--bg2)', border: '1px solid var(--border)',
            borderRadius: 12, padding: '1.75rem'
          }}>
            <div style={{
              fontSize: '3rem', fontWeight: 800, color: 'var(--border2)',
              fontFamily: "'DM Mono', monospace", marginBottom: '1rem', lineHeight: 1
            }}>{step.num}</div>
            <div style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{step.title}</div>
            <div style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
