export interface PlanningInput {
  goals: string[];
  allergies: string[];
  dislikes: string[];
  cuisines: string[];
  budgetTier: 'low' | 'mid' | 'high';
  dailyPrepMinutes: number;
  locale: string;
}

export interface MealPlan {
  days: Array<{
    date: string;
    meals: Array<{
      mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack';
      recipeId: string;
      servings: number;
      rationale?: string;
    }>;
  }>;
}

export const planWeek = async (input: PlanningInput): Promise<MealPlan> => {
  // TODO: Implement rules-based planner
  // - Filter allergens
  // - Fit time constraints
  // - Score cuisines
  // - Generate 7x3 plan with rationales
  
  throw new Error('planWeek not yet implemented - run Orchestrator_Upgrade prompt in Cursor');
};
