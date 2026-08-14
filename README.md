# 🌐 CV-MARIANO

Personal project that presents my **Curriculum Vitae** as an interactive web app: a dark, minimalist UI, an AI chatbot trained on my career data, an interactive knowledge graph, and a product-analytics view.

👉 Live: [cv-mariano.vercel.app](https://cv-mariano.vercel.app)

## 🚀 Tech stack

- **React 18 + React Router 7** – Frontend (bootstrapped with Create React App / `react-scripts`)
- **Tailwind CSS 3** – Styling
- **Node.js + Express 5** – Local backend API (`src/backend`)
- **Vercel Serverless Functions** – Production API (`api/chat.js`)
- **OpenRouter** – AI model integration (`openrouter/auto`)
- **react-force-graph-2d** – Knowledge graph visualization
- **Vercel Analytics + Amplitude** – Usage tracking
- **Vercel** – Hosting / deployment

## 📂 Project structure

```
cv-mariano/
│
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
│
├─ public/
│  ├─ index.html
│  ├─ company-logos/            # takeda, ey, jpmorgan, exxonmobil, ibm (SVG)
│  ├─ experience-bg-*.jpg       # Decorative backgrounds for the experience section
│  ├─ sombrero{negro,marron,azul}.jpg
│  ├─ three_hats.jpg / kg.png / analytics.png / 4x4.jpg
│  └─ welcome.mp3               # Short audio introduction
│
├─ src/
│  ├─ index.js                  # Entry point (ReactDOM)
│  ├─ index.css                 # Tailwind directives + global styles
│  ├─ App.jsx                   # Routing, floating Back button, Vercel Analytics
│  │
│  ├─ pages/
│  │  ├─ Home.jsx               # Main CV page
│  │  ├─ Hats.jsx               # "Three Hats" – the product owner roles
│  │  ├─ Amplitude.jsx          # Embedded Amplitude dashboard + KPI tiles
│  │  └─ KnowledgeGraph.jsx     # Interactive professional knowledge graph
│  │
│  ├─ components/
│  │  ├─ ChatBot.jsx            # Floating AI chat, POSTs to /api/chat
│  │  ├─ CvSummary.jsx          # AI-generated CV summary
│  │  ├─ AudioPresentation.jsx  # Plays welcome.mp3
│  │  ├─ ExperienceTimeline.jsx # Vertical career timeline
│  │  ├─ Section.jsx            # Reusable section wrapper
│  │  └─ TextWithKeywords.jsx   # Highlights domain keywords in text
│  │
│  ├─ data/
│  │  ├─ data.js                # CV data (about, competencies, experience, …)
│  │  ├─ chatprompt.js          # generateSystemPrompt() built from data.js
│  │  └─ knowledgeGraph.js      # Graph nodes, links and node colors
│  │
│  └─ backend/
│     ├─ server.js              # Express API for local development (port 3001)
│     ├─ package.json
│     └─ .env.local             # OPENROUTER_API_KEY (not committed)
│
└─ api/
   └─ chat.js                   # Vercel serverless function (production API)
```

## ⚡ Local setup

### 1. Clone and install the frontend

```bash
git clone https://github.com/marianotue01/cv-mariano.git
cd cv-mariano
npm install
```

### 2. Install and configure the backend

```bash
cd src/backend
npm install
```

Create `src/backend/.env.local` with your OpenRouter key:

```bash
OPENROUTER_API_KEY=your_key_here
```

### 3. Run the app and API

```bash
# Starts the app on http://localhost:3000 and the API on http://localhost:3001
npm start
```

To run them separately, use `npm run start:frontend` and `npm run start:backend` in two terminals.

`package.json` sets `"proxy": "http://localhost:3001"`, so calls to `/api/chat` from the dev server are forwarded to the Express backend automatically.

### Build for production

```bash
npm run build
```

## 🔌 API

Both `api/chat.js` (Vercel) and `src/backend/server.js` (local) expose the same contract:

**`POST /api/chat`**

```json
{ "question": "What is Mariano's experience with knowledge graphs?", "systemPrompt": "..." }
```

**Response**

```json
{ "answer": "Mariano leads Product Management for ..." }
```

Errors return `{ "error": "..." }` with status `400` (missing fields), `405` (wrong method) or `500` (missing API key / upstream failure). The local backend also exposes `GET /health`.

## 🎨 Features

- **Home** – Professional profile with AI-generated summary, core competencies, experience, certifications, education and languages, with keyword highlighting.
- **AI ChatBot** – Floating, minimizable chat that answers questions about my career; the system prompt is generated from the CV data itself.
- **Experience timeline** – Vertical timeline with company logos.
- **Knowledge Graph** – Interactive force-directed graph of companies, roles, projects, technologies, skills, domains and languages, filterable by node type with click-to-focus.
- **Three Hats** – Breakdown of the product owner role: roadmap, customer facing, day to day, deliverables, application & product owner, agile coach.
- **Amplitude dashboard** – Embedded product-analytics view with KPI tiles.
- **Audio introduction** – Short spoken presentation.

## 🌍 Deployment

Deployed on **Vercel**. Set `OPENROUTER_API_KEY` as an environment variable in the Vercel project so `api/chat.js` can reach OpenRouter — the key is never exposed to the browser.

👉 [cv-mariano.vercel.app](https://cv-mariano.vercel.app)
