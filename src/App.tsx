import React, { useState } from 'react';
import { TestResult } from './types';
import { Shield } from 'lucide-react';
import TestRunner from './components/TestRunner';
import ResultsVisualization from './components/ResultsVisualization';
import MitigationGuide from './components/MitigationGuide';

function App() {
  const [testResults, setTestResults] = useState<TestResult[]>([]);

  const handleTestComplete = (result: TestResult) => {
    setTestResults(prev => [...prev, result]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">
              LLM Prompt Injection Tester
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TestRunner onTestComplete={handleTestComplete} />
          <ResultsVisualization results={testResults} />
        </div>
        <MitigationGuide />
      </main>

      <footer className="bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="space-y-2 text-center">
            <p className="text-sm text-gray-500">
              Built for CS 4371 Project by Group 9
            </p>
            <p className="text-sm text-gray-500">
              Anubhav Bhetuwal • Ananta Aryal • Balmiki R. Padhyaya • Sebika Khulal • Shishir Khanal
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Built for research purposes only. Use responsibly.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

