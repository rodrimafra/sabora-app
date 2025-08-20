export interface ShoppingList {
  ingredients: Array<{
    name: string;
    amount: string;
    category: string;
    estimatedCost?: number;
    substitutions?: string[];
  }>;
  totalEstimatedCost?: number;
}

export const createShoppingList = async (mealPlan: any): Promise<ShoppingList> => {
  // TODO: Implement shopping list generation
  // - Deduplicate ingredients
  // - Categorize by store section
  // - Suggest substitutions
  // - Estimate cost when prices available
  
  throw new Error('createShoppingList not yet implemented - run Shopping_Agent prompt in Cursor');
};
