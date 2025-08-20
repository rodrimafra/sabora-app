# MindStudio — Add Knowledge (Sabora)

1) In your Orchestrator agent → **Data Sources** → **+** → name: **Sabora Docs**.  
2) Drag in:
   - `Playbook_Design_Thinking_AI.md`
   - `Service_Blueprint.md`
   - `JSON_Schemas/recipe.schema.json`
   - `JSON_Schemas/plan.schema.json`
   - `JSON_Schemas/shopping_list.schema.json`
3) In your flow, add a **Query Data Source** block (select “Sabora Docs”) and pass the current task/question.  
4) Feed the returned chunks as context to your next generation/tool block.  
5) For outputs, set **Structured Output** to mirror our JSON Schemas (fields/keys).
