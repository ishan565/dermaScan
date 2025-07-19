import { GoogleGenerativeAI } from "@google/generative-ai";
import { ENV } from "@tensorflow/tfjs";

const genAI = new GoogleGenerativeAI(ENV.API);

export async function getAdvice(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
