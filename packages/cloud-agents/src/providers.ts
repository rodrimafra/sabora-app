import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';

export type ModelProvider = 'openai' | 'anthropic';

export interface LLMProviderConfig {
  provider: ModelProvider;
  model: string;
  apiKey?: string;
}

export interface LLMProvider {
  generate(input: string, system?: string): Promise<string>;
}

class OpenAIProvider implements LLMProvider {
  private client: OpenAI;
  private model: string;
  constructor(model: string, apiKey?: string) {
    this.model = model;
    this.client = new OpenAI({
      apiKey: apiKey ?? process.env.OPENAI_API_KEY,
    });
  }
  async generate(input: string, system?: string): Promise<string> {
    const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
      ...(system ? [{ role: 'system' as const, content: system }] : []),
      { role: 'user', content: input },
    ];
    const res = await this.client.chat.completions.create({
      model: this.model,
      messages,
      temperature: 0,
    });
    const content = res.choices?.[0]?.message?.content ?? '';
    return typeof content === 'string' ? content : JSON.stringify(content);
  }
}

class AnthropicProvider implements LLMProvider {
  private client: Anthropic;
  private model: string;
  constructor(model: string, apiKey?: string) {
    this.model = model;
    this.client = new Anthropic({ apiKey: apiKey ?? process.env.ANTHROPIC_API_KEY });
  }
  async generate(input: string, system?: string): Promise<string> {
    const res = await this.client.messages.create({
      model: this.model,
      max_tokens: 1024,
      temperature: 0,
      system,
      messages: [{ role: 'user', content: input }],
    });
    const text = res.content?.[0]?.type === 'text' ? res.content[0].text : '';
    return text ?? '';
  }
}

export function createProviderFromEnv(): LLMProvider {
  const provider = (process.env.LLM_PROVIDER ?? 'openai') as ModelProvider;
  if (provider === 'anthropic') {
    return new AnthropicProvider(process.env.LLM_MODEL ?? 'claude-3-5-sonnet-latest');
  }
  return new OpenAIProvider(process.env.LLM_MODEL ?? 'gpt-4o-mini');
}

