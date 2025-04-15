# 🛡️ LLM Prompt Injection Tester

This application provides a framework to test and analyze vulnerabilities of LLM-integrated applications against various types of prompt injection attacks. It supports predefined and custom attacks across multiple LLMs, including GPT-4, Gemini Pro, and Grok-1.

---

## 📋 Features

### ✅ Implemented

- **Predefined Attacks**  
  - Framework Component Attack  
  - Separator–Disruptor Attack  
  - Recursive Prompt Attack  

- **Custom Prompt Injection**  
  - Manually input test prompts

- **LLM Selector**  
  - Run tests against GPT-4, Gemini Pro, and Grok-1

- **Results Dashboard**  
  - Graphical analysis of success rates across models

---

### 🚧 Not Yet Implemented

- Model-specific mitigation suggestions  
- Batch testing of multiple injections  
- Historical result export (CSV/JSON)


---

## 🚀 How to Clone & Deploy

### Step 1: Clone the repository
```bash
git clone https://github.com/yourusername/llm-prompt-injection-tester.git
cd llm-prompt-injection-tester
```

### Step 2: Set up environment
```bash
npm install             # for frontend (React/Next.js)
```

### Step 3: Add your environment keys
Create a `.env` file in `/backend` and add:
```
OPENAI_API_KEY=your-openai-key
GEMINI_API_KEY=your-gemini-key
GROK_API_KEY=your-grok-key
```

### Step 4: Run the app
```bash
npm run dev
```

Then go to `http://localhost:3000` in your browser.

---

## 📚 Scholarly References

### Foundational Paper (Prior Work)
**Zhou et al. (2023)**. _HOUYI: Prompt Injection Attacks Against LLM-integrated Applications_.  
🔗 https://arxiv.org/abs/2309.00688

### Contemporary Related Work
**Choi et al. (2024)**. _DEFLECT: Dynamic Prompt Sanitization for Robust LLM Applications_.  
🔗 https://arxiv.org/abs/2401.01234  
This paper builds on the prompt injection threat model and introduces runtime defenses to mitigate injection-based exploits.

---

## 🧠 Team Members
- Anubhav Bhetuwal  
- Ananta Aryal  
- Balmiki R. Padhyaya  
- Sebika Khulal  
- Shishir Khanal

---

## 🎓 Course
**CS 4371 - Computer System Security**  
