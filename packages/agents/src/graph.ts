import { StateGraph, END } from '@langchain/langgraph';
import { BaseMessage } from '@langchain/core/messages';

export interface AgentState {
  messages: BaseMessage[];
  plan?: any;
  shoppingList?: any;
  [key: string]: any;
}

export const createGraph = () => {
  const workflow = new StateGraph<AgentState>({
    channels: {
      messages: {
        reducer: (x: BaseMessage[], y: BaseMessage[]) => x.concat(y),
        default: () => [],
      },
    },
  });

  // TODO: Add nodes for planWeek, nutritionCheck, costCheck, listify
  // This will be expanded by Cursor based on the Orchestrator_Upgrade prompt

  workflow.addEdge(END);

  return workflow.compile();
};
