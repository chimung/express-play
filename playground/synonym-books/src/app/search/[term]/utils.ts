import { GoogleGenerativeAI } from "@google/generative-ai";
import { cache } from "react";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY as string);

const schema = (keyword: string) => ({
  title: `Only 5 words which are synonym of '${keyword}'`,
  description: `Return only 5 words which are synonym of '${keyword}'`,
  type: "array",
  items: {
    type: "object",
    properties: {
      word: { description: "word" },
      context: { description: "context of using this word" },
      example: { description: "example of using this word" },
      ipa: { description: "IPA" },
    },
  },
});

async function run(keyword: string) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
    },
  });

  const prompt = `Follow JSON schema.<JSONSchema>${JSON.stringify(
    schema(keyword)
  )}</JSONSchema>`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

export const cachedRun = cache(async (keyword: string) => await run(keyword));
