
# 🔐 LLM Prompt Injection Attack Tester & Visualizer

This project implements a reproducible tool for testing **prompt injection attacks** against multiple LLM-integrated applications (e.g., ChatGPT, Gemini, Grok). Inspired by the HOUYI black-box attack framework, our tool evaluates model vulnerability and visualizes attack success across different systems.

---

## 📜 Project Summary

This tool is built upon the core findings of the research paper:

> **"HOUYI: Prompt Injection Attacks Against LLM-integrated Applications"**  
> The study demonstrates that 86.1% of 36 real-world apps were vulnerable to prompt injection using a black-box method, exposing critical flaws in LLM-integrated services.

We created a tool that:
- Automates known prompt injection scenarios (inspired by HOUYI)
- Targets multiple LLMs through a unified web interface
- Logs and visualizes which LLMs are most vulnerable
- Helps developers and researchers evaluate the robustness of their AI integrations

---

## 🧪 Functionality

### ✅ What Works
- Send crafted prompt injection payloads to OpenAI (ChatGPT), Gemini, and Grok
- Choose from multiple attack types: Instruction Override, Separator Bypass, Context Resetter
- Visualize attack success rates using interactive graphs (bar/pie charts)
- Export vulnerability reports (CSV/JSON)

### ⚠️ What Doesn't (Yet)
- Defense suggestion engine (in progress)
- Live model fine-tuning or auto-mitigation
- Real-time model switching on hosted platforms

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
cd backend
npm install             # for backend (Express.js + TypeScript)
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
# Start backend
cd backend
npm run dev

# In new terminal, start frontend
cd ../frontend
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
**CS XXXX - Advanced Topics in Security**  
Texas State University – Spring 2025

---

## 📈 Future Work
- Integrate prompt defense testing and live alerting
- Evaluate jailbreak prompts and adversarial chaining attacks
- Support for Anthropic Claude and Mistral

---

## 📄 License
MIT License – feel free to fork and contribute!
