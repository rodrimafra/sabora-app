import { describe, it, expect } from 'vitest';
import { normalizeRecipeFromText, NormalizedRecipe } from '@sabora/cloud-agents';

describe('Evaluators (merge blockers)', () => {
  it('normalizes free-text recipe into strict schema', async () => {
    const text = 'Grandma pancakes: 2 cups flour, 1 egg, mix and fry.';
    const recipe = await normalizeRecipeFromText(text);
    // Schema check
    expect(() => NormalizedRecipe.parse(recipe)).not.toThrow();
    // Deterministic expectations
    expect(recipe.title.length).toBeGreaterThan(0);
    expect(Array.isArray(recipe.steps)).toBe(true);
    expect(recipe.steps.length).toBeGreaterThan(0);
  });

  it('offline-friendly: works without API keys', async () => {
    const originalOpenAI = process.env.OPENAI_API_KEY;
    const originalAnthropic = process.env.ANTHROPIC_API_KEY;
    delete process.env.OPENAI_API_KEY;
    delete process.env.ANTHROPIC_API_KEY;
    try {
      const text = 'Tomato pasta with basil.';
      const recipe = await normalizeRecipeFromText(text);
      expect(recipe.title.length).toBeGreaterThan(0);
      expect(recipe.steps.length).toBeGreaterThan(0);
    } finally {
      process.env.OPENAI_API_KEY = originalOpenAI;
      process.env.ANTHROPIC_API_KEY = originalAnthropic;
    }
  });
});


