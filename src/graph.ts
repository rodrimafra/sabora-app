import { Annotation, StateGraph } from "@langchain/langgraph";

// Define simple state: input text and a derived result
export const State = Annotation.Root({
  input: Annotation<string>(),
  result: Annotation<string>(),
});

// Node A: normalize input
async function normalizeNode(state: typeof State.State) {
  const normalized = state.input.trim();
  return { input: normalized };
}

// Node B: compute a trivial result
async function computeNode(state: typeof State.State) {
  const result = `Echo: ${state.input}`;
  return { result };
}

export const graph = new StateGraph(State)
  .addNode("normalize", normalizeNode)
  .addNode("compute", computeNode)
  .addEdge("__start__", "normalize")
  .addEdge("normalize", "compute")
  .addEdge("compute", "__end__")
  .compile();
