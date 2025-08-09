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

## Mobile App (Expo)

The mobile client lives in `mobile/` and calls the backend endpoint.

Setup:

```
cd mobile
npm install
npm run start
```

In the app, set Backend URL to your machine's IP (e.g., `http://192.168.1.10:3000`) if running on a device/simulator.
