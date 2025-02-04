'use client';

import { useState } from 'react';

export function useAIAssistant() {
  const [loading, setLoading] = useState(false);

  const generateContent = async (prompt: string, type: string) => {
    try {
      setLoading(true);
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, type }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const data = await response.json();
      return data.content;
    } catch (error) {
      console.error('Error generating content:', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const improveSummary = async (summary: string) => {
    return generateContent(summary, 'improve');
  };

  const suggestSkills = async (experience: string) => {
    return generateContent(experience, 'suggest');
  };

  const optimizeContent = async (content: string) => {
    return generateContent(content, 'optimize');
  };

  return {
    improveSummary,
    suggestSkills,
    optimizeContent,
    loading,
  };
}