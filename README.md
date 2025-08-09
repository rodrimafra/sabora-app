# MealPlan Agents — Open Source Mobile App

AI-first meal planning app.

## Local Development

1) Install dependencies

```
npm install
```

2) Generate strict TypeScript types from JSON Schemas

```
npm run build:types
```

3) Run the API locally

```
npm run dev
```

4) Test the endpoint

```
curl -X POST http://localhost:3000/api/plan/echo \
  -H 'Content-Type: application/json' \
  -d '{"input":"Hello"}'
```
