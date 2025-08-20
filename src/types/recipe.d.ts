/** AUTO-GENERATED FILE. DO NOT EDIT MANUALLY. Generated from JSON Schema */

export interface Recipe {
  /**
   * Stable identifier
   */
  id: string;
  /**
   * e.g., en, pt-BR, es
   */
  locale?: string;
  name: string;
  /**
   * e.g., br, med, it, mx
   */
  cuisine?: string;
  tags?: string[];
  servings?: number;
  prep_time_min?: number;
  cook_time_min?: number;
  total_time_min: number;
  /**
   * @minItems 1
   */
  ingredients: [
    {
      name: string;
      quantity: number;
      /**
       * g, kg, ml, cup, tbsp, tsp, pcs, etc.
       */
      unit: string;
      /**
       * chopped, minced, etc.
       */
      preparation?: string;
      /**
       * Produce, Grains, Pantry, Meat, Dairy, etc.
       */
      category?: string;
      notes?: string;
    },
    ...{
      name: string;
      quantity: number;
      /**
       * g, kg, ml, cup, tbsp, tsp, pcs, etc.
       */
      unit: string;
      /**
       * chopped, minced, etc.
       */
      preparation?: string;
      /**
       * Produce, Grains, Pantry, Meat, Dairy, etc.
       */
      category?: string;
      notes?: string;
    }[]
  ];
  /**
   * @minItems 1
   */
  instructions: [
    {
      text: string;
      time_estimate_min?: number;
    },
    ...{
      text: string;
      time_estimate_min?: number;
    }[]
  ];
  allergens?: (
    | 'peanuts'
    | 'tree_nuts'
    | 'dairy'
    | 'egg'
    | 'soy'
    | 'wheat'
    | 'gluten'
    | 'fish'
    | 'shellfish'
    | 'sesame'
  )[];
  equipment?: string[];
  nutrition: {
    energy_kcal: number;
    protein_g: number;
    carbs_g: number;
    fat_g: number;
    fiber_g?: number;
    sugar_g?: number;
    sodium_mg: number;
  };
  image_url?: string;
  source_url?: string;
}
