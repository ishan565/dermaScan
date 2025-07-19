import { GoogleGenerativeAI } from "@google/generative-ai";

<<<<<<< HEAD
const genAI = new GoogleGenerativeAI("your open ai key");
=======
const genAI = new GoogleGenerativeAI("AIzaSyDfaJHL3cgeFY_GeY5rvflEqjpiZR2oBjg");
>>>>>>> da3f1d4 (okay)

export async function getAdvice(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}
