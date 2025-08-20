/** AUTO-GENERATED FILE. DO NOT EDIT MANUALLY. Generated from JSON Schema */

export interface SaboraPlan {
  id: string;
  user_id: string;
  starts_on: string;
  ends_on: string;
  /**
   * e.g., balance, low-sodium, budget
   */
  goal?: string;
  /**
   * @minItems 1
   */
  days: [
    {
      date: string;
      /**
       * @minItems 1
       */
      meals: [
        {
          meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
          recipe_id: string;
          servings: number;
          notes?: string;
          /**
           * why this recipe (cheaper/faster/no dairy)
           */
          rationale?: string;
          [k: string]: any | undefined;
        },
        ...{
          meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
          recipe_id: string;
          servings: number;
          notes?: string;
          /**
           * why this recipe (cheaper/faster/no dairy)
           */
          rationale?: string;
          [k: string]: any | undefined;
        }[]
      ];
    },
    ...{
      date: string;
      /**
       * @minItems 1
       */
      meals: [
        {
          meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
          recipe_id: string;
          servings: number;
          notes?: string;
          /**
           * why this recipe (cheaper/faster/no dairy)
           */
          rationale?: string;
          [k: string]: any | undefined;
        },
        ...{
          meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
          recipe_id: string;
          servings: number;
          notes?: string;
          /**
           * why this recipe (cheaper/faster/no dairy)
           */
          rationale?: string;
          [k: string]: any | undefined;
        }[]
      ];
    }[]
  ];
  weekly_nutrition?: {
    energy_kcal?: number;
    protein_g?: number;
    carbs_g?: number;
    fat_g?: number;
    fiber_g?: number;
    sodium_mg?: number;
  };
  constraints?: {
    allergies?: string[];
    cuisines?: string[];
    dailyPrepMinutes?: number;
    budgetTier?: 'low' | 'mid' | 'high';
  };
}
