# ✦ Clarity AI — Stop Overthinking, Start Acting

> AI-powered decision engine built for HackIndia Vibe Coding Hackathon

---

## 🚀 What is Clarity AI?

Clarity AI helps users overcome overthinking by analyzing their thoughts and delivering:

- **Clarity Score** (0–100) — how clear/tangled is your thinking?
- **Core Problem** — stripped of emotional noise
- **Clear Decision** — one direct, action-verb recommendation
- **Action Steps** — 3–5 concrete next steps
- **Overthinking Patterns** — what mental traps you're stuck in

---

## 🗂 Project Structure

```
clarity-ai/
├── index.html                  # App entry point
├── package.json                # Frontend deps (React, Vite, Tailwind)
├── vite.config.js              # Vite + proxy config
├── tailwind.config.js
├── postcss.config.js
├── vercel.json                 # Deployment config
├── .env.example                # Copy to .env with your API key
│
├── src/
│   ├── main.jsx                # React root
│   ├── App.jsx                 # Main app + AI call logic
│   ├── index.css               # Global styles + CSS vars
│   ├── api/
│   │   └── clarity.js          # API helper (for backend mode)
│   └── components/
│       ├── Navbar.jsx           # Fixed top nav
│       ├── Hero.jsx             # Landing hero section
│       ├── HowItWorks.jsx       # 3-step explainer
│       ├── InputPanel.jsx       # Text input + sample prompts
│       ├── OutputPanel.jsx      # Results dashboard
│       └── Footer.jsx
│
└── server/
    ├── index.js                # Express API proxy (keeps key safe)
    └── package.json
```

---

## ⚙️ Setup & Run

### Option A — Frontend only (demo/hackathon mode)
The `App.jsx` calls Anthropic directly. Works in Claude.ai sandbox.

```bash
npm install
npm run dev
```

Open http://localhost:5173

### Option B — With secure backend (recommended for production)

1. Copy env file and add your key:
```bash
cp .env.example .env
# Edit .env and set ANTHROPIC_API_KEY=sk-ant-...
```

2. Install backend deps:
```bash
cd server && npm install && cd ..
```

3. Run both:
```bash
# Terminal 1 — backend
cd server && npm run dev

# Terminal 2 — frontend
npm run dev
```

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# From project root
vercel

# Set your API key as environment variable
vercel env add ANTHROPIC_API_KEY
```

Done! Your app is live.

---

## 🎨 Tech Stack

| Layer      | Tech                        |
|------------|-----------------------------|
| Frontend   | React 18, Vite              |
| Styling    | Tailwind CSS + CSS Variables |
| Fonts      | Syne, DM Mono (Google Fonts)|
| Backend    | Node.js + Express           |
| AI         | Anthropic Claude API        |
| Deploy     | Vercel                      |

---

## 🧠 AI Prompt Design

The system prompt instructs Claude to:
1. Identify the core problem (strip emotional noise)
2. Score clarity (0–100)
3. Give one clear, decisive recommendation
4. List 3–5 concrete action steps
5. Name specific overthinking patterns detected

Response is structured JSON for clean rendering.

---

## 🎤 Demo Script (2–3 min)

1. Open the site → show hero + "How it Works"
2. Click a sample prompt button (e.g. "Career decision")
3. Hit **Get Clarity**
4. Walk through the 5 output cards:
   - Clarity Score with animated bar
   - Core Problem
   - Clear Decision (in green)
   - Numbered action steps
   - Overthinking patterns

---

Built with ❤️ for HackIndia · Powered by Claude AI
