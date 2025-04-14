import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TestResult, TestSummary } from '../types';
import { availableModels } from '../data/sampleData';

interface ResultsVisualizationProps {
  results: TestResult[];
}

export default function ResultsVisualization({ results }: ResultsVisualizationProps) {
  const summaryData: TestSummary[] = availableModels.map(model => {
    const modelResults = results.filter(r => r.modelId === model.id);
    const successCount = modelResults.filter(r => r.success).length;
    return {
      modelId: model.id,
      successRate: modelResults.length ? (successCount / modelResults.length) * 100 : 0,
      totalTests: modelResults.length
    };
  });

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Results Analysis</h2>
      
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={summaryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="modelId" 
              tickFormatter={(value) => availableModels.find(m => m.id === value)?.name || value}
            />
            <YAxis label={{ value: 'Success Rate (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              formatter={(value: number, name: string) => [`${value.toFixed(1)}%`, 'Success Rate']}
              labelFormatter={(label) => availableModels.find(m => m.id === label)?.name || label}
            />
            <Legend />
            <Bar dataKey="successRate" fill="#3B82F6" name="Success Rate" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Recent Test Results</h3>
        <div className="space-y-4">
          {results.slice(-5).reverse().map((result, idx) => (
            <div key={idx} className="border rounded-md p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">
                  {availableModels.find(m => m.id === result.modelId)?.name}
                </span>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  result.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {result.success ? 'Success' : 'Failed'}
                </span>
              </div>
              <p className="text-sm text-gray-600">{result.response}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}