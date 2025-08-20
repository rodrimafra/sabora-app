# Sabora — AI-Powered Meal Planning App

AI-first meal planning app with intelligent recipe management and personalized meal planning.

## 🚀 **Quick Start (3 Steps)**

1. **Unzip the cursor kit** into your repo root (✅ Already done)
2. **Open Cursor at the repo root** — it will auto-read `.cursorrules` and follow the guardrails
3. **Open `prompts/Orchestrator_Upgrade.md` in a Composer chat and run it**. Then run:

```bash
pnpm install
pnpm test
pnpm -w tsx apps/api/src/server.ts
```

You'll have `/createPlan` live and tests ready to extend.

## 🏗️ **What's Inside**

- **`.cursorrules`** — Project rules Cursor must obey: don't break schemas, keep planning deterministic, pass allergy/budget/diversity tests
- **`prompts/`** — Ready briefs for Orchestrator, Planning, Shopping, Content/Nutrition, Localization, QA/Eval, Backend, Docs/Community
- **`packages/agents/`** — Scaffolds for `graph.ts`, `planning.ts`, `shopping.ts`, `localize.ts` (Cursor will flesh these out from the prompts)
- **`apps/api/`** — Express server with `/createPlan` and `/health`
- **`.github/workflows/ci.yml`** — CI stub to expand (we'll add vitest steps when you're ready)

## 🎯 **Recommended Flow in Cursor (Fast Path)**

1. **Run Orchestrator_Upgrade prompt** → Cursor implements `planWeek`, checks, `listify`, wiring
2. **Run Planning_Agent and Shopping_Agent prompts** → Cursor completes the builders
3. **Run QA_Eval_Agent** → Cursor adds/expands the Vitest guardrails (allergy, budget, cuisine diversity)

## 🧪 **Testing the API**

Start the server and hit:

```bash
curl -X POST http://localhost:8787/createPlan \
  -H 'content-type: application/json' \
  -d '{"goals":["balance"],"allergies":["peanuts"],"dislikes":[],"cuisines":["br","med"],"budgetTier":"mid","dailyPrepMinutes":40,"locale":"pt-BR"}'
```

## 🔧 **Local Development**

1) Install dependencies

```bash
npm install
```

2) Generate strict TypeScript types from JSON Schemas

```bash
npm run build:types
```

3) Run the API locally

```bash
npm run dev          # Original server on port 3000
npm run dev:api      # New orchestration API on port 8787
```

4) Test the endpoints

```bash
# Health check
curl http://localhost:8787/health

# Create plan (after implementing agents)
curl -X POST http://localhost:8787/createPlan \
  -H 'Content-Type: application/json' \
  -d '{"goals":["balance"],"allergies":["peanuts"],"cuisines":["br"],"budgetTier":"mid","dailyPrepMinutes":40,"locale":"pt-BR"}'
```

### LLM Provider Setup

Create a `.env` with provider selection and keys:

```bash
PORT=8787
LLM_PROVIDER=openai # or anthropic
LLM_MODEL=gpt-4o-mini
OPENAI_API_KEY=your-openai-key
ANTHROPIC_API_KEY=your-anthropic-key
```

## 📱 **Mobile App (Expo)**

The Sabora mobile client lives in `mobile/` and calls the backend endpoint.

Setup:

```bash
cd mobile
npm install
npm run start
```

In the Sabora app, set Backend URL to your machine's IP (e.g., `http://192.168.1.10:8787`) if running on a device/simulator.

## 🧪 **Running Tests**

```bash
npm test              # Run tests once
npm run test:watch    # Run tests in watch mode
```

## 🚀 **Next Steps**

1. **Open Cursor** and let it read the `.cursorrules`
2. **Run the Orchestrator_Upgrade prompt** to implement the core agents
3. **Extend with Planning_Agent and Shopping_Agent prompts**
4. **Add QA_Eval_Agent tests** for comprehensive validation
5. **Deploy and scale** your Sabora meal planning service!

---

*Built with AI-first architecture and agent orchestration* 🧠✨
