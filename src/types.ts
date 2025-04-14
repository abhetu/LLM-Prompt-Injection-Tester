export interface PromptTest {
  id: string;
  name: string;
  description: string;
  prompt: string;
  expectedBehavior: string;
}

export interface LLMModel {
  id: string;
  name: string;
  description: string;
  apiEndpoint?: string;
}

export interface TestResult {
  promptId: string;
  modelId: string;
  success: boolean;
  response: string;
  timestamp: number;
}

export interface TestSummary {
  modelId: string;
  successRate: number;
  totalTests: number;
}

export interface Harness {
  name: string;
  siteUrl: string;
  applicationDocument: string;
  runHarness: (promptInjection: PromptInjection) => Promise<string>;
}

export interface PromptInjection {
  name: string;
  description: string;
  getAttackPrompt: () => string;
  validateResponse?: (response: string) => boolean;
}

export interface AttackIntention {
  name: string;
  questionPrompt: string;
  expectedOutput?: string;
}