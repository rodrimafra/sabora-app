import { Annotation, StateGraph, END } from '@langchain/langgraph';
import { BaseMessage } from '@langchain/core/messages';

export const AgentState = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    reducer: (x: BaseMessage[], y: BaseMessage[]) => x.concat(y),
    default: () => [],
  }),
  plan: Annotation<any>(),
  shoppingList: Annotation<any>(),
});

export const createGraph = () => {
  const workflow = new StateGraph(AgentState);

  // TODO: Add nodes for planWeek, nutritionCheck, costCheck, listify
  // This will be expanded by Cursor based on the Orchestrator_Upgrade prompt

  workflow.addEdge("__start__", "__end__");

  return workflow.compile();
};

