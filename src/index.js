import 'dotenv/config'
import express from 'express';
import { sequelize } from './db'
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const schema = (keyword) => ({
  title: `Only 5 words which are synonym of '${keyword}'`,
  description:
    `Return only 5 words which are synonym of '${keyword}'`,
  type: "array",
  items: {
    type: "object",
    properties: {
      word: { description: "word" },
      context: {description: "context of using this word"},
      example: { description: "example of using this word"},
      ipa: {description: "IPA"},
    },
  }
});


async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig: {
    responseMimeType: "application/json"
  }});

  const prompt = `Follow JSON schema.<JSONSchema>${JSON.stringify(
    schema("play")
  )}</JSONSchema>`

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  
  console.log("result", text);
  console.log("token Count", response.usageMetadata.totalTokenCount)
}

run();

sequelize.sync().then(() => {
    console.log("Connect DB success")
})
const app = express()
const port = 3001


app.get('/', (req, res) => {
  res.send('Hello World1!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})