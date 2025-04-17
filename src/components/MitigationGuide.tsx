import React from 'react';
import { BookOpen, Shield, Link } from 'lucide-react';

export default function MitigationGuide() {
  const mitigationStrategies = [
    {
      title: "Input Validation and Sanitization",
      description: "Implement strict input validation to detect and filter potentially malicious prompts. Use pattern matching and keyword detection to identify common attack patterns.",
      example: "Filter out system commands, special characters, and known attack patterns before processing the prompt."
    },
    {
      title: "Context Boundaries",
      description: "Establish clear context boundaries and maintain them throughout the conversation. Prevent context switching attempts.",
      example: "Use role-based prompting and maintain conversation history with clear delineation."
    },
    {
      title: "Prompt Engineering",
      description: "Design robust system prompts that explicitly define boundaries and expected behavior. Include specific instructions about handling potentially malicious inputs.",
      example: "Always maintain original safety constraints regardless of user input."
    },
    {
      title: "Output Filtering",
      description: "Implement post-processing filters to detect and block potentially harmful or unauthorized responses.",
      example: "Check responses against a predefined set of rules and patterns before returning them to users."
    }
  ];

  const researchPapers = [
    {
      title: "Enhancing Adversarial Attacks through Chain of Thought",
      authors: "Andy Zou, Zifan Wang, et al.",
      url: "https://arxiv.org/abs/2410.21791",
      year: 2023
    },
    {
      title: "Prompt Injection Attacks and Defenses in LLM-Integrated Applications",
      authors: "Yi Liu, Gelei Deng, et al.",
      url: "https://arxiv.org/abs/2306.05499",
      year: 2023
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Shield className="mr-2" />
        Mitigation Strategies
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {mitigationStrategies.map((strategy, index) => (
          <div key={index} className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold text-lg mb-2">{strategy.title}</h3>
            <p className="text-gray-600 mb-2">{strategy.description}</p>
            <div className="bg-white p-3 rounded border border-gray-200">
              <p className="text-sm text-gray-500">Example: {strategy.example}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <BookOpen className="mr-2" />
        Research Papers
      </h2>

      <div className="space-y-4">
        {researchPapers.map((paper, index) => (
          <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
            <a 
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start"
            >
              <Link className="w-5 h-5 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-600">{paper.title}</h3>
                <p className="text-gray-600">{paper.authors}</p>
                <p className="text-gray-500 text-sm">{paper.year}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-lg mb-2">Best Practices</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Regularly update and test security measures</li>
          <li>Implement multiple layers of defense</li>
          <li>Monitor and log suspicious activities</li>
          <li>Keep system prompts confidential</li>
          <li>Use rate limiting and access controls</li>
        </ul>
      </div>
    </div>
  );
}