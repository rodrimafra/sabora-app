import { z } from 'zod';
import { createProviderFromEnv } from '../../packages/agents/src/providers';

export const NormalizedRecipe = z.object({
  title: z.string().min(1),
  ingredients: z.array(z.object({
    name: z.string(),
    quantity: z.string().optional(),
  })).optional().default([]),
  steps: z.array(z.string()).min(1),
});

export type NormalizedRecipe = z.infer<typeof NormalizedRecipe>;

const SYSTEM_PROMPT = `You convert free-text recipes into a concise JSON format with fields: title, ingredients[{name, quantity?}], steps[].
- Only include facts provided by the user.
- Be conservative; if unsure, omit quantity.
- Return ONLY valid JSON.`;

export async function normalizeRecipeFromText(freeText: string): Promise<NormalizedRecipe> {
  let raw = '';
  const hasKey = Boolean(process.env.OPENAI_API_KEY || process.env.ANTHROPIC_API_KEY);
  if (hasKey) {
    try {
      const provider = createProviderFromEnv();
      raw = await provider.generate(freeText, SYSTEM_PROMPT);
    } catch {
      // Ignore model errors and fall back to deterministic logic below
    }
  }
  // Deterministic validation & fallback
  try {
    if (raw) {
      const parsed = JSON.parse(raw);
      return NormalizedRecipe.parse(parsed);
    }
  } catch {
    // continue to fallback
  }
  // Minimal robust fallback: derive a reasonable structure from text
  const byLine = freeText.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  const title = byLine[0] || 'Untitled Recipe';
  let steps: string[] = byLine.slice(1);
  if (steps.length === 0) {
    // Split by punctuation to extract at least one step
    const sentences = freeText.split(/[.!?]/).map((s) => s.trim()).filter(Boolean);
    steps = sentences.length > 0 ? sentences : [title];
  }
  return NormalizedRecipe.parse({ title, ingredients: [], steps });
}
