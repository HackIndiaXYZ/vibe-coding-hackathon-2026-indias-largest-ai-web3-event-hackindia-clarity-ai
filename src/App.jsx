import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import InputPanel from './components/InputPanel'
import OutputPanel from './components/OutputPanel'
import Footer from './components/Footer'

function getMockResult(input) {
  const t = input.toLowerCase()
  const isStudy = t.includes('mark') || t.includes('exam') || t.includes('study') || t.includes('grade') || t.includes('fail') || t.includes('score') || t.includes('college')
  const isCareer = t.includes('job') || t.includes('quit') || t.includes('career') || t.includes('boss') || t.includes('work') || t.includes('salary')
  const isRelation = t.includes('partner') || t.includes('relation') || t.includes('breakup') || t.includes('love') || t.includes('girlfriend') || t.includes('boyfriend')
  const isBusiness = t.includes('business') || t.includes('startup') || t.includes('launch') || t.includes('idea') || t.includes('product') || t.includes('money')
  const isAnxiety = t.includes('anxious') || t.includes('anxiety') || t.includes('stress') || t.includes('panic') || t.includes('fear') || t.includes('scared') || t.includes('worry')
  const score = 22 + Math.floor(Math.random() * 22)

  if (isStudy) return {
    clarity_score: score,
    score_reasoning: 'Anxiety about marks is replacing the actual studying — the overthinking is the problem, not the marks.',
    core_problem: 'You are stuck in a worry loop about your marks without a concrete daily plan to improve them. The marks are not permanent — they are the direct output of your study hours and strategy. Overthinking about them changes nothing; studying does.',
    decision: 'Stop thinking about marks and start a fixed 3-hour daily study block today. One week of focused action will do more than months of worrying.',
    action_steps: [
      'List every subject with your current score right now. Circle the one where improvement will have the biggest impact.',
      'Block 3 focused hours daily — same time every day, phone in another room, for the next 14 days.',
      'Email or message one teacher this week. Ask: "What specific topics should I focus on to improve my grade?"',
      'Study in 45-minute sprints with 10-minute breaks. Use a timer. No multitasking.',
      'Track your hours studied daily on paper. Seeing the numbers grow kills overthinking.'
    ],
    overthinking_patterns: [
      { name: 'Analysis Paralysis', description: 'Thinking and worrying about marks instead of actually opening the books and studying.' },
      { name: 'Catastrophizing', description: 'Treating current marks as permanent when focused effort over 2-3 weeks can significantly change them.' },
      { name: 'Future-Tripping', description: 'Spending mental energy on future consequences instead of the present actions that would prevent them.' },
      { name: 'Rumination Loop', description: 'Replaying the same worry thoughts repeatedly without converting them into a concrete action plan.' }
    ]
  }

  if (isCareer) return {
    clarity_score: score,
    score_reasoning: 'Multiple competing priorities and fear-based reasoning are blocking a clear path forward.',
    core_problem: 'You are trapped in a stability-vs-growth loop. The real question is not whether to quit — it is whether your current role is actively preventing your growth. Savings is a runway, not a barrier.',
    decision: 'Set a firm 60-day deadline: either negotiate better conditions or commit to leaving. Stop letting the decision make itself.',
    action_steps: [
      'Calculate your exact runway: monthly expenses × months of savings. Write that number down.',
      'Spend 2 focused hours every evening on your next move. Track progress weekly, not effort.',
      'Have one direct conversation with your manager this week. Document their response.',
      'Define your exit number — what income or milestone triggers your departure.',
      'Set a Decision Day 60 days from today in your calendar. Decide then, not before.'
    ],
    overthinking_patterns: [
      { name: 'Analysis Paralysis', description: 'Months of thinking instead of small experiments that would give you real data.' },
      { name: 'False Dichotomy', description: 'Framing as stay forever vs quit today while ignoring negotiation or phased transitions.' },
      { name: 'Catastrophizing', description: 'Treating potential failure as permanent rather than a recoverable setback.' },
      { name: 'Future-Tripping', description: 'Spending energy on worst-case scenarios instead of present actions.' }
    ]
  }

  if (isRelation) return {
    clarity_score: score + 8,
    score_reasoning: 'Emotional reasoning is clouding the distinction between fear of change and a real incompatibility signal.',
    core_problem: 'You are conflating guilt about hurting someone with evidence that the relationship is right for you. Someone can be a good person and still not be your person. These are two completely separate things.',
    decision: 'Stop deciding and start observing. Give yourself 30 days of honest daily reflection to separate fear from genuine incompatibility.',
    action_steps: [
      'Write 3 specific ways you are growing as a person in this relationship. If you struggle, that is your answer.',
      'Have one honest conversation about your 5-year visions — career, location, lifestyle. Map the overlap.',
      'Spend one full weekend alone. Notice how you feel about your life without distraction.',
      'Talk to one friend who will be honest, not just supportive of whatever you want.',
      'Set a 30-day no-decision window. Collect honest data about how you feel each day.'
    ],
    overthinking_patterns: [
      { name: 'Emotional Reasoning', description: 'Using guilt as evidence you should stay rather than seeing it as a normal human response to change.' },
      { name: 'All-or-Nothing Thinking', description: 'Seeing only "stay forever" or "leave now" with no space for honest conversation in between.' },
      { name: 'Future-Tripping', description: 'Imagining future loneliness instead of honestly assessing present relationship quality.' }
    ]
  }

  if (isBusiness) return {
    clarity_score: score - 3,
    score_reasoning: 'You have validation but are using planning as a substitute for the action that would create certainty.',
    core_problem: 'You have enough information to charge money and find out if this works. Every extra month of planning is a month of real market feedback you are not getting. Fear of charging — not the product — is the real blocker.',
    decision: 'Launch a paid version to your validated users within 14 days. One paying customer tells you more than 6 months of planning.',
    action_steps: [
      'Set a price today: target monthly income divided by 10 customers. That is your number.',
      'Message your validated users this week with a simple paid early-access offer.',
      'Build only what is needed to charge and deliver. Cut everything else for 30 days.',
      'Announce a launch date 14 days from today and tell 3 people so you are accountable.',
      'Measure month 1 success in paying customers only — not features shipped.'
    ],
    overthinking_patterns: [
      { name: 'Perfectionism Spiral', description: 'Waiting until the product feels ready when users already said they want it now.' },
      { name: 'Analysis Paralysis', description: 'Planning is replacing the market feedback that only real customers can provide.' },
      { name: 'Catastrophizing', description: 'Treating possible rejection as failure rather than the useful data it actually is.' }
    ]
  }

  if (isAnxiety) return {
    clarity_score: score - 5,
    score_reasoning: 'Anxiety is being treated as information rather than a feeling to be processed and acted through.',
    core_problem: 'Your nervous system is stuck in threat-detection mode over a situation that requires action, not vigilance. The anxiety will not disappear by thinking more — it reduces when you act despite it.',
    decision: 'Pick the smallest possible action you can take in the next 2 hours toward the thing you are anxious about. Do it before analyzing further.',
    action_steps: [
      'Write down exactly what you are afraid will happen. Most fears become smaller when written in plain language.',
      'Rate the actual probability of that outcome from 0-10. Then rate how catastrophic it truly would be.',
      'Identify the smallest action you can take today — not the solution, just a first step.',
      'Set a 20-minute timer and do only that one thing. Action is the antidote to anxiety.',
      'Tell one person what you are going through. Isolation amplifies anxiety; connection reduces it.'
    ],
    overthinking_patterns: [
      { name: 'Catastrophizing', description: 'Treating an uncertain outcome as a definite disaster before it has happened.' },
      { name: 'Rumination Loop', description: 'Cycling through the same anxious thoughts repeatedly without converting them into action.' },
      { name: 'Future-Tripping', description: 'Living mentally in a negative future instead of the present moment where action is possible.' }
    ]
  }

  return {
    clarity_score: score,
    score_reasoning: 'Scattered thinking and unresolved fear are creating a loop with no clear exit.',
    core_problem: 'The core issue is decision avoidance disguised as preparation. You already have enough information to take the next step — you are waiting for certainty that will never come before acting.',
    decision: 'Identify the single most important next action and do it within 24 hours. Momentum is the only thing that breaks this loop.',
    action_steps: [
      'Write down the ONE thing you have been avoiding — not a list, literally one thing.',
      'Set a 48-hour hard deadline for that action and tell someone what you will do.',
      'Define what good enough looks like. You do not need perfect, you need progress.',
      'Remove one option from your list. More choices cause more paralysis.',
      'Do a 10-minute morning check: am I moving forward, or am I looping?'
    ],
    overthinking_patterns: [
      { name: 'Analysis Paralysis', description: 'Gathering more information instead of acting on what you already clearly know.' },
      { name: 'Perfectionism Spiral', description: 'Waiting for the perfect plan when a good first step would generate real feedback.' },
      { name: 'Catastrophizing', description: 'Overweighting worst-case outcomes well beyond their actual probability.' }
    ]
  }
}

export default function App() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleAnalyze = async (userInput) => {
    setLoading(true)
    setResult(null)
    setError(null)
    await new Promise(r => setTimeout(r, 2000))
    setResult(getMockResult(userInput))
    setLoading(false)
  }

  return (
    <>
      <Navbar /><Hero /><HowItWorks />
      <section id="tool" style={{ padding: '5rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
        <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>🧠 AI Tool</p>
        <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>What's on your mind?</h2>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '3rem', lineHeight: 1.6 }}>Describe your situation, decision, or problem below. Be as messy or detailed as you want.</p>
        <InputPanel onAnalyze={handleAnalyze} loading={loading} />
        <OutputPanel result={result} error={error} />
      </section>
      <Footer />
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
        @keyframes loading { 0% { width:0%; } 50% { width:80%; } 100% { width:100%; } }
        @keyframes pulse { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.5; transform:scale(1.3); } }
      `}</style>
    </>
  )
}
