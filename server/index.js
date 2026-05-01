// server/index.js
// Express backend — proxies Anthropic API to keep your key secret
// Usage: node server/index.js  (set ANTHROPIC_API_KEY in .env)

import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

const SYSTEM_PROMPT = `You are a brutally logical decision-making assistant for Clarity AI. Your job is to cut through overthinking and provide clear, actionable clarity.

Analyze the user's input and respond ONLY with a valid JSON object in this exact format (no markdown, no backticks, just raw JSON):
{
  "clarity_score": <integer 0-100, where 0=extreme overthinking/no clarity, 100=perfect clarity>,
  "score_reasoning": "<one sentence explaining the score>",
  "core_problem": "<2-3 sentences identifying the REAL core issue, stripped of all emotional noise>",
  "decision": "<One clear, direct recommendation. Start with an action verb. Be decisive.>",
  "action_steps": ["<step 1>", "<step 2>", "<step 3>", "<step 4>", "<optional step 5>"],
  "overthinking_patterns": [
    {"name": "<pattern name>", "description": "<how this pattern shows in their text>"}
  ]
}

Rules:
- Be direct. No fluff.
- Action steps must be concrete and specific.
- Detect 2-4 real overthinking patterns.
- Think like a clear-headed mentor, not a life coach.`

app.post('/api/analyze', async (req, res) => {
  const { input } = req.body

  if (!input || input.trim().length < 10) {
    return res.status(400).json({ error: 'Input too short.' })
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'ANTHROPIC_API_KEY not set in environment.' })
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: input.trim() }]
      })
    })

    if (!response.ok) {
      const err = await response.json().catch(() => ({}))
      return res.status(response.status).json({ error: err.error?.message || 'Anthropic API error' })
    }

    const data = await response.json()
    const raw = (data.content || []).map(b => b.text || '').join('')
    const clean = raw.replace(/```json|```/g, '').trim()

    let parsed
    try {
      parsed = JSON.parse(clean)
    } catch {
      return res.status(500).json({ error: 'Failed to parse AI response. Please retry.' })
    }

    res.json(parsed)
  } catch (err) {
    console.error('Server error:', err)
    res.status(500).json({ error: err.message || 'Internal server error' })
  }
})

app.get('/health', (_, res) => res.json({ status: 'ok' }))

app.listen(PORT, () => console.log(`✦ Clarity AI server running on http://localhost:${PORT}`))
