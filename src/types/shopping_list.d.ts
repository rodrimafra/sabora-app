/** AUTO-GENERATED FILE. DO NOT EDIT MANUALLY. Generated from JSON Schema */

export interface ShoppingList {
  plan_id: string;
  currency: string;
  /**
   * @minItems 1
   */
  items: [
    {
      name: string;
      quantity: number;
      unit: string;
      /**
       * Produce, Grains, Pantry, Meat, etc.
       */
      category?: string;
      substitutions?: string[];
      source_recipes?: string[];
      /**
       * price in cents
       */
      estimated_cost_minor?: number;
      [k: string]: any | undefined;
    },
    ...{
      name: string;
      quantity: number;
      unit: string;
      /**
       * Produce, Grains, Pantry, Meat, etc.
       */
      category?: string;
      substitutions?: string[];
      source_recipes?: string[];
      /**
       * price in cents
       */
      estimated_cost_minor?: number;
      [k: string]: any | undefined;
    }[]
  ];
  total_estimated_cost_minor?: number;
}
