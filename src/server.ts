import "dotenv/config";
import express from "express";
import cors from "cors";
import { graph } from "./graph";
import { normalizeRecipeFromText } from "./agents/normalizeRecipe";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send(
    "Sabora API. Try GET /health, POST /api/plan/echo, POST /api/recipe/normalize"
  );
});

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/plan/echo", async (req, res) => {
  try {
    const input = String(req.body?.input ?? "");
    const result = await graph.invoke({ input, result: "" });
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err?.message ?? "Unknown error" });
  }
});

app.post("/api/recipe/normalize", async (req, res) => {
  try {
    const text = String(req.body?.text ?? "");
    const normalized = await normalizeRecipeFromText(text);
    res.json(normalized);
  } catch (err: any) {
    res.status(500).json({ error: err?.message ?? "Unknown error" });
  }
});

const port = Number(process.env.PORT ?? 3000);
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
