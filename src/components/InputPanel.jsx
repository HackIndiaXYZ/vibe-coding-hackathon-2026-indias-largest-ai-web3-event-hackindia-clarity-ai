// src/components/InputPanel.jsx
import React, { useState } from 'react'

const SAMPLES = [
  {
    label: 'Career decision',
    text: "I've been overthinking whether to quit my job for 3 months. My boss is toxic but the pay is good and I have stability. I have a side project getting traction but I don't know if it'll work. I have 6 months savings. I'm scared of failure but also scared of wasting my life."
  },
  {
    label: 'Relationship dilemma',
    text: "My partner and I have been together 4 years. I love them but I'm not sure we're growing in the same direction anymore. I think about breaking up but then I feel guilty and scared of being alone. They're a good person and haven't done anything wrong. I don't know if this is just fear or a real sign."
  },
  {
    label: 'Business idea',
    text: "I have a business idea for an AI tool for doctors to reduce paperwork. I've validated it with 5 doctors and they want it. But I'm scared to charge money and I keep second-guessing if it's too niche. I've been 'planning' for 6 months and haven't launched."
  },
  {
    label: 'Life change fear',
    text: "I want to move from my home city to a new country. I have savings and a job offer. But my parents are getting older and I feel guilty. My friends are here. But I know this opportunity could change my life. I keep going back and forth every day and I can't sleep."
  }
]

export default function InputPanel({ onAnalyze, loading }) {
  const [text, setText] = useState('')

  const handleSample = (sample) => setText(sample.text)
  const handleClear = () => setText('')
  const handleSubmit = () => {
    if (text.trim().length < 30) return
    onAnalyze(text.trim())
  }

  return (
    <div style={{
      background: 'var(--bg2)', border: '1px solid var(--border)',
      borderRadius: 12, padding: '2rem',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, var(--accent), var(--purple), var(--green))'
      }} />

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={e => { if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') handleSubmit() }}
        placeholder="e.g. I've been overthinking whether to quit my job for 3 months. I have savings but I'm scared. My boss is toxic but the pay is good. I have a side project that's getting traction but I don't know if it'll work out..."
        rows={6}
        maxLength={2000}
        style={{
          width: '100%', minHeight: 160,
          background: 'var(--bg3)', border: '1px solid var(--border)',
          borderRadius: 8, color: 'var(--text)',
          fontFamily: "'Syne', sans-serif", fontSize: '1rem', lineHeight: 1.7,
          padding: '1rem 1.25rem', resize: 'vertical', outline: 'none',
          transition: 'border-color 0.2s'
        }}
        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
        onBlur={e => e.target.style.borderColor = 'var(--border)'}
      />

      {/* Sample prompts */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.75rem' }}>
        {SAMPLES.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSample(s)}
            style={{
              background: 'var(--bg3)', border: '1px solid var(--border)',
              color: 'var(--muted)', padding: '0.4rem 0.875rem', borderRadius: 100,
              fontFamily: "'Syne', sans-serif", fontSize: '0.8rem',
              cursor: 'pointer', transition: 'all 0.2s'
            }}
            onMouseEnter={e => {
              e.target.style.borderColor = 'var(--accent)'
              e.target.style.color = 'var(--accent)'
            }}
            onMouseLeave={e => {
              e.target.style.borderColor = 'var(--border)'
              e.target.style.color = 'var(--muted)'
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Footer row */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginTop: '1rem', flexWrap: 'wrap', gap: '1rem'
      }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: "'DM Mono', monospace" }}>
          {text.length} / 2000 chars &nbsp;·&nbsp; Ctrl+Enter to submit
        </span>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button
            onClick={handleClear}
            style={{
              background: 'transparent', color: 'var(--muted)',
              border: '1px solid var(--border)', padding: '0.75rem 1.25rem', borderRadius: 8,
              fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: '0.875rem',
              cursor: 'pointer', transition: 'all 0.2s'
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            Clear
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading || text.trim().length < 30}
            style={{
              background: 'var(--accent)', color: '#000',
              border: 'none', padding: '0.75rem 2rem', borderRadius: 8,
              fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '0.95rem',
              cursor: loading || text.trim().length < 30 ? 'not-allowed' : 'pointer',
              opacity: loading || text.trim().length < 30 ? 0.5 : 1,
              transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: 8
            }}
            onMouseEnter={e => {
              if (!loading && text.trim().length >= 30) {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.3)'
              }
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <span style={{ display: 'inline-block', animation: loading ? 'spin 0.8s linear infinite' : 'none' }}>
              {loading ? '↻' : '✦'}
            </span>
            {loading ? 'Analyzing...' : 'Get Clarity'}
          </button>
        </div>
      </div>

      {/* Loading bar */}
      {loading && (
        <div style={{ marginTop: '1.5rem' }}>
          <div style={{ height: 3, background: 'var(--bg3)', borderRadius: 100, overflow: 'hidden' }}>
            <div style={{
              height: '100%',
              background: 'linear-gradient(90deg, var(--accent), var(--purple))',
              borderRadius: 100,
              animation: 'loading 2.5s ease-in-out infinite'
            }} />
          </div>
          <p style={{
            color: 'var(--muted)', fontSize: '0.875rem',
            fontFamily: "'DM Mono', monospace", textAlign: 'center', marginTop: '0.75rem'
          }}>
            Analyzing your thought patterns…
          </p>
        </div>
      )}
    </div>
  )
}
