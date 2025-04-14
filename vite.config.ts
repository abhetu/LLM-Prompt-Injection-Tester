import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // 🔍 Manually load .env.local variables
  const env = loadEnv(mode, process.cwd(), '');

  // 🔐 Debug: Confirm variable is being loaded
  console.log('✅ VITE_OPENAI_API_KEY from vite.config.ts:', env.VITE_OPENAI_API_KEY);

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_OPENAI_API_KEY': JSON.stringify(env.VITE_OPENAI_API_KEY),
      'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY),
      'import.meta.env.VITE_GROK_API_KEY': JSON.stringify(env.VITE_GROK_API_KEY),
    }
  };
});
