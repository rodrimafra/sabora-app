import express from 'express';
import cors from 'cors';
import { planWeek } from '@sabora/cloud-agents';
import { createShoppingList } from '@sabora/cloud-agents';

const app = express();
const PORT = process.env.PORT || 8787;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'Sabora API', timestamp: new Date().toISOString() });
});

// Create meal plan endpoint
app.post('/createPlan', async (req, res) => {
  try {
    const input = req.body;
    
    // Validate input
    if (!input.goals || !input.allergies || !input.cuisines || !input.budgetTier) {
      return res.status(400).json({ 
        error: 'Missing required fields: goals, allergies, cuisines, budgetTier' 
      });
    }

    // Generate meal plan
    const mealPlan = await planWeek(input);
    
    // Generate shopping list
    const shoppingList = await createShoppingList(mealPlan);
    
    res.json({
      success: true,
      mealPlan,
      shoppingList,
      metadata: {
        generatedAt: new Date().toISOString(),
        input
      }
    });
    
  } catch (error: any) {
    console.error('Error creating plan:', error);
    res.status(500).json({ 
      error: error.message || 'Internal server error',
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Sabora API server running on http://localhost:${PORT}`);
  console.log(`📋 Try: POST /createPlan`);
  console.log(`❤️  Health: GET /health`);
});
