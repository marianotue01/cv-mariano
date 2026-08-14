# CLAUDE.md

Interactive web CV for Mariano Tuero: React SPA with an AI chatbot, a force-directed knowledge graph, and a product-analytics page. Deployed on Vercel at cv-mariano.vercel.app.

## Stack

- **Create React App** (`react-scripts` 5) — **not** Vite. `src/index.js` is the entry point.
- React 18, React Router 7, Tailwind CSS 3, `react-force-graph-2d`, `react-vertical-timeline-component`
- Vercel Analytics (`@vercel/analytics/react`, mounted in `src/App.jsx`) + an Amplitude script injected in `src/pages/Home.jsx`
- Backend: Express 5 locally (`src/backend/server.js`), Vercel serverless in production (`api/chat.js`)
- AI: OpenRouter, model `openrouter/auto`

## Running locally — two processes

The chatbot breaks if only the frontend runs. The backend has its **own** `package.json` and needs a separate install.

```bash
npm install                                  # frontend
cd src/backend && npm install                # backend (separate deps)
```

`src/backend/.env.local` must contain `OPENROUTER_API_KEY=...` (gitignored; never read or print it).

```bash
cd src/backend && node server.js             # API on :3001 (no npm script defined)
npm start                                    # CRA dev server on :3000
```

`package.json` sets `"proxy": "http://localhost:3001"`, which is what makes the frontend's `/api/chat` calls reach Express. Build with `npm run build`. There are no tests and no linter configured.

## Duplicated API — keep both in sync

[api/chat.js](api/chat.js) (Vercel, production) and [src/backend/server.js](src/backend/server.js) (local dev) implement the **same** `POST /api/chat` contract independently:

- Request: `{ question, systemPrompt }` → Response: `{ answer }`
- Errors: 400 missing fields, 405 wrong method, 500 missing key / empty AI response
- `server.js` additionally exposes `GET /health`

**Changing the contract or the model means editing both files.** They will silently diverge otherwise — prod and dev behave differently.

## Data flow

All CV content is static and lives in [src/data/data.js](src/data/data.js) (`about`, `coreCompetencies`, `experience`, `certifications`, `education`, `languages`). It feeds three consumers:

1. UI rendering in [src/pages/Home.jsx](src/pages/Home.jsx)
2. [src/data/chatprompt.js](src/data/chatprompt.js) → `generateSystemPrompt()`, which the chatbot and `CvSummary` send as `systemPrompt`
3. [src/data/knowledgeGraph.js](src/data/knowledgeGraph.js) is a **separate hand-maintained** copy of the same facts (nodes/links/`nodeColors`) — updating a job in `data.js` does not update the graph.

`src/components/CvSummary.jsx` calls `/api/chat` on mount to generate the "About" summary, so the page makes an AI request on every load.

## Routes

Defined in [src/App.jsx](src/App.jsx), which also renders a global floating Back button (hidden on `/`) and sets `document.title`.

| Path | Page |
|---|---|
| `/` | [Home.jsx](src/pages/Home.jsx) — full CV, chatbot, timeline, audio intro |
| `/Hats` | [Hats.jsx](src/pages/Hats.jsx) — "Three Hats" product-owner roles |
| `/Amplitude` | [Amplitude.jsx](src/pages/Amplitude.jsx) — embedded analytics dashboard |
| `/KnowledgeGraph` | [KnowledgeGraph.jsx](src/pages/KnowledgeGraph.jsx) — interactive graph |

Paths are capitalized and matched case-sensitively — link to `/KnowledgeGraph`, not `/knowledgegraph`.

## Conventions

- Every non-trivial file opens with a `File / Summary / Input / Process / Output` block comment. Match that style when adding files.
- Styling is Tailwind utility classes only — no CSS modules or styled-components. The look is a dark glassmorphism theme: `bg-slate-950`, `rounded-[32px]`, `border-white/10`, `bg-white/5`, `backdrop-blur-xl`, cyan/violet accents. Custom animations (`animate-float-slow`, `bg-grid`) live in [src/index.css](src/index.css).
- `TextWithKeywords` highlights terms from the `globalKeywords` array in `Home.jsx`; add new domain terms there rather than hardcoding spans.
- Images and audio are served from `public/` and referenced by absolute path (`/kg.png`, `/welcome.mp3`).
- `concurrently` and `gh-pages` are in `devDependencies` but unused — no script wires them up.

## Deployment

Vercel builds from `main`. `OPENROUTER_API_KEY` must be set as a Vercel env var so `api/chat.js` can reach OpenRouter; the key is never exposed to the browser.
