# Sabora — Service Blueprint (MVP)

## Lanes
- **User:** Onboards → Reviews plan → Swaps meals → Views nutrition → Generates list → Shops → Cooks.
- **Frontstage (App):** Onboarding, Plan, Meal Detail, Shopping List, Settings.
- **Backstage (Agents):** Planning, Nutrition, Cost, Shopping, Localization, QA/Eval.
- **Systems:** Recipe DB, Price/Nutrition tables, Auth, Telemetry (opt‑in), Localization maps.
- **Policies:** Allergies, sodium budget, budget tiers, cuisine diversity.

## Key Moments
- **TTFP:** ≤ 90s from install to first plan.  
- **Swap:** ≤ 3 taps with rationale (cheaper / faster / no dairy).  
- **List:** Deduped, categorized, with substitutions and estimates.

## Fail‑safes
- Allergen found → regenerate plan.  
- Budget exceeded → cheaper substitutions suggested.  
- Locale missing unit map → default to metric and label clearly.
