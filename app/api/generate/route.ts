import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
  try {
    const { prompt, type } = await req.json();
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    let systemPrompt = '';
    switch (type) {
      case 'improve':
        systemPrompt = 'Improve this resume content professionally: ';
        break;
      case 'suggest':
        systemPrompt = 'Suggest skills based on this job experience: ';
        break;
      case 'optimize':
        systemPrompt = 'Optimize this content for ATS systems: ';
        break;
      default:
        systemPrompt = 'Enhance this resume content: ';
    }

    const result = await model.generateContent(systemPrompt + prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ content: text });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}