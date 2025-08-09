import { z } from 'zod';
import { createProviderFromEnv } from '../../packages/agents/src/providers';

export const NormalizedRecipe = z.object({
  title: z.string().min(1),
  ingredients: z.array(z.object({
    name: z.string(),
    quantity: z.string().optional(),
  })).min(1),
  steps: z.array(z.string()).min(1),
});

export type NormalizedRecipe = z.infer<typeof NormalizedRecipe>;

const SYSTEM_PROMPT = `You convert free-text recipes into a concise JSON format with fields: title, ingredients[{name, quantity?}], steps[].
- Only include facts provided by the user.
- Be conservative; if unsure, omit quantity.
- Return ONLY valid JSON.`;

export async function normalizeRecipeFromText(freeText: string): Promise<NormalizedRecipe> {
  const provider = createProviderFromEnv();
  const raw = await provider.generate(freeText, SYSTEM_PROMPT);
  // Deterministic validation & fallback
  try {
    const parsed = JSON.parse(raw);
    return NormalizedRecipe.parse(parsed);
  } catch {
    // Minimal robust fallback: trivial parse by lines without LLM
    const lines = freeText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
    const title = lines[0] ?? 'Untitled Recipe';
    return {
      title,
      ingredients: [],
      steps: lines.slice(1),
    };
  }
}
