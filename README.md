# 🛡️ LLM Prompt Injection Tester

A web-based evaluation tool to test the **robustness of LLM-integrated applications** (GPT-4, Gemini Pro, Grok-1) against common prompt injection attacks.

---

## 📁 Project Structure

```
src/
├── attacks/
│   └── intentions.ts               # Injection logic and class-based validators
├── components/
│   ├── TestRunner.tsx             # UI to select test + run against model
│   ├── ResultsVisualization.tsx   # Graphs, CSV export, recent results
│   └── MitigationGuide.tsx        # Optional: defense tips
├── data/
│   └── sampleData.ts              # 3 sample attack definitions
├── harness/
│   ├── OpenAIHarness.ts           # GPT-4 interface via OpenAI API
│   ├── GeminiHarness.ts           # Gemini Pro (Google) interface
│   └── GrokHarness.ts             # xAI Grok API adapter
├── App.tsx                        # Combines UI & visualization
├── main.tsx                       # React entry point
├── types.ts                       # Global type definitions
└── index.css                      # Styling
```

---

## 🚀 Features

- Run 3 core prompt injection attacks:
  - Framework Component Attack
  - Separator Disruption Attack
  - Recursive Prompt Attack

- Evaluate responses from:
  - GPT-4 (OpenAI)
  - Gemini Pro (Google)
  - Grok-1 (xAI)

- Automatically log and calculate success/failure
- Visualize model vulnerabilities (bar graph)
- Export test results as CSV (for reproducibility)

---

## 🧪 Setup & Deployment

### 🖥️ Local Dev

```bash
git clone https://github.com/YOUR_USERNAME/LLM-Prompt-Injection-Tester.git
cd LLM-Prompt-Injection-Tester
npm install
```
Create a `.env` file and include your API keys:

```
VITE_OPENAI_API_KEY=your-openai-key
VITE_GEMINI_API_KEY=your-gemini-key
VITE_GROK_API_KEY=your-grok-key
```

Then run locally:

```bash
npm run dev
```

### ☁️ Vercel Deployment

- Connect GitHub repo to Vercel
- Add the same environment variables in Vercel dashboard under project settings
- Vercel will auto-deploy on every push

---

## 🧠 Research Foundations

- **Prior Research:** [Prompt Injection Attacks Against LLM-integrated Applications](https://arxiv.org/abs/2310.02631) — introduces HOUYI framework and threat taxonomy.
- **Recent Work:** [Adversarial Prompting via Chain-of-Thought Disruption (2024)](https://arxiv.org/abs/2401.03947) — builds on prior attacks and introduces deeper LLM-aware evasions.

---

## ⚠️ Disclaimer

This tool is intended for academic/research purposes **only**. Do not misuse against real-world production models without authorization.

---

## 👥 Authors

Built for CS4371 — Group 9:
- Anubhav Bhetuwal
- Ananta Aryal
- Balmiki R. Padhyaya
- Sebika Khulal
- Shishir Khanal
