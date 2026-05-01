// src/api/clarity.js
// Calls the backend proxy at /api/analyze

export async function analyzeThought(userInput) {
  const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input: userInput })
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.error || `Server error ${response.status}`)
  }

  const data = await response.json()
  return data
}
