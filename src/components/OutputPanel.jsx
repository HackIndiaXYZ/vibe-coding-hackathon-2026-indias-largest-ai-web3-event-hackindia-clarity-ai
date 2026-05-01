// src/components/OutputPanel.jsx
import React, { useEffect, useRef } from 'react'

function getScoreColor(score) {
  if (score < 35) return '#ff6b6b'
  if (score < 55) return '#ffb347'
  if (score < 75) return '#00d4ff'
  return '#00e5a0'
}

function getScoreLabel(score) {
  if (score < 35) return 'Deep overthinking — clarity needed urgently'
  if (score < 55) return 'Moderate overthinking — some clarity emerging'
  if (score < 75) return 'Mild overthinking — mostly clear with some fog'
  return 'High clarity — well-structured thinking'
}

function Card({ children, style = {}, delay = 0 }) {
  return (
    <div style={{
      background: 'var(--bg2)', border: '1px solid var(--border)',
      borderRadius: 12, padding: '1.5rem',
      animation: `fadeUp 0.4s ease ${delay}s both`,
      ...style
    }}>
      {children}
    </div>
  )
}

function CardHeader({ icon, iconBg, iconColor, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1rem' }}>
      <div style={{
        width: 32, height: 32, borderRadius: 8,
        background: iconBg, color: iconColor,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1rem', flexShrink: 0
      }}>
        {icon}
      </div>
      <div style={{
        fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
        textTransform: 'uppercase', color: 'var(--muted)'
      }}>
        {title}
      </div>
    </div>
  )
}

export default function OutputPanel({ result, error }) {
  const ref = useRef(null)

  useEffect(() => {
    if (result && ref.current) {
      setTimeout(() => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' }), 200)
    }
  }, [result])

  if (error) {
    return (
      <div style={{
        background: 'rgba(255,107,107,0.08)', border: '1px solid rgba(255,107,107,0.3)',
        borderRadius: 8, padding: '1rem 1.25rem',
        color: 'var(--red)', fontSize: '0.9rem', marginTop: '1rem'
      }}>
        ⚠ {error}
      </div>
    )
  }

  if (!result) return null

  const score = result.clarity_score ?? 50
  const scoreColor = getScoreColor(score)
  const patterns = result.overthinking_patterns || []
  const steps = result.action_steps || []
  const dotColors = ['#ff6b6b', '#ffb347', '#a78bfa', '#00d4ff', '#00e5a0']

  return (
    <div ref={ref} style={{ marginTop: '2rem' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {/* Score Card */}
        <Card delay={0.05}>
          <CardHeader
            icon="⚡" title="Clarity Score"
            iconBg="rgba(255,179,71,0.15)" iconColor="var(--amber)"
          />
          <div style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1, color: scoreColor, marginBottom: '0.5rem' }}>
            {score}
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '0.75rem' }}>
            {getScoreLabel(score)}
          </div>
          <div style={{ height: 8, background: 'var(--bg3)', borderRadius: 100, overflow: 'hidden' }}>
            <div style={{
              height: '100%', borderRadius: 100,
              background: scoreColor,
              width: score + '%',
              transition: 'width 1s cubic-bezier(0.4,0,0.2,1)'
            }} />
          </div>
          {result.score_reasoning && (
            <div style={{
              fontSize: '0.8rem', color: 'var(--muted)', marginTop: '0.5rem',
              fontFamily: "'DM Mono', monospace"
            }}>
              {result.score_reasoning}
            </div>
          )}
        </Card>

        {/* Core Problem */}
        <Card delay={0.1}>
          <CardHeader
            icon="◉" title="Core Problem"
            iconBg="rgba(0,212,255,0.15)" iconColor="var(--accent)"
          />
          <div style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text)' }}>
            {result.core_problem}
          </div>
        </Card>

        {/* Decision — full width */}
        <Card delay={0.15} style={{ gridColumn: '1 / -1' }}>
          <CardHeader
            icon="✓" title="Clear Decision"
            iconBg="rgba(0,229,160,0.15)" iconColor="var(--green)"
          />
          <div style={{
            fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.7,
            color: 'var(--green)'
          }}>
            {result.decision}
          </div>
        </Card>

        {/* Action Steps — full width */}
        <Card delay={0.2} style={{ gridColumn: '1 / -1' }}>
          <CardHeader
            icon="→" title="Action Steps"
            iconBg="rgba(167,139,250,0.15)" iconColor="var(--purple)"
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                display: 'flex', gap: '1rem', alignItems: 'flex-start',
                padding: '0.875rem 1rem',
                background: 'var(--bg3)', borderRadius: 8, border: '1px solid var(--border)',
                animation: `fadeUp 0.3s ease ${i * 0.08}s both`
              }}>
                <div style={{
                  width: 24, height: 24, borderRadius: '50%',
                  background: 'var(--accent)', color: '#000',
                  fontSize: '0.75rem', fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, marginTop: 1
                }}>
                  {i + 1}
                </div>
                <div style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text)' }}>
                  {step}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Overthinking Patterns — full width */}
        {patterns.length > 0 && (
          <Card delay={0.25} style={{ gridColumn: '1 / -1' }}>
            <CardHeader
              icon="⚠" title="Overthinking Patterns Detected"
              iconBg="rgba(255,179,71,0.15)" iconColor="var(--amber)"
            />
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              {patterns.map((p, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 10,
                  padding: '0.875rem 1.25rem',
                  background: 'var(--bg3)', border: '1px solid var(--border)',
                  borderRadius: 8
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: dotColors[i % dotColors.length],
                    flexShrink: 0, marginTop: 6
                  }} />
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: 2 }}>{p.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.5 }}>{p.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}
