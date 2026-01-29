import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export async function generateCommunityDescription(input: string): Promise<string> {
  try {
    const { response } = await model.generateContent(
      `
          =============================
             You are an expert copywriter and marketer.
             Your task is to craft short, attention-grabbing, and creative descriptions for communities.
             The description should spark interest, convey the purpose, and be no longer than 50 words.
          =============================
          
          Community Name: "${input}"
          
          Generate an appealing description for this community name:
          =============================
          `
    );

    if (response.candidates) {
      return response.candidates[0].content.parts[0].text || '';
    } else {
      return "Sorry, I couldn't generate a description for this community.";
    }
  } catch (error) {
    return "Sorry, I couldn't generate a description for this community.";
  }
}

export async function filterCommunityContent(content: string) {
  try {
    const { response } = await model.generateContent(
      `
          =============================
             You are a content moderator for a community platform.
             Your task is to filter out inappropriate content and generate a response to the user.
          =============================
          
          Content:
          ${content}
          
          Filter out inappropriate content and generate a response:
          =============================
          `
    );

    if (response.candidates) {
      return response.candidates[0].content.parts[0].text || '';
    } else {
      return "Sorry, I couldn't filter this content.";
    }
  } catch (error) {
    return "Sorry, I couldn't filter this content.";
  }
}
