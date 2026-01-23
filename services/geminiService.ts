
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getCarRecommendation(userPrompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Tu es un expert automobile chez EuroOccazMotors. Un client te demande : "${userPrompt}". 
      Conseille-le de manière professionnelle et passionnée. Mentionne des types de véhicules comme SUV, Sportive ou Berline. 
      Réponds en français, court et impactant (max 3-4 phrases).`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Désolé, je rencontre une petite difficulté technique. Veuillez nous contacter directement !";
  }
}
