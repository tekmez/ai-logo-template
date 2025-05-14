import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as aiService from "../services/aiService";

interface GenerateLogoRequest {
  prompt: string;
}

// Generate Logo with Fal AI
export const generateLogo = onCall(
  {
    cors: true,
    maxInstances: 10,
    secrets: ["AI_LOGO_API_KEY"],
  },
  async (request) => {
    try {
      const { prompt }: GenerateLogoRequest = request.data;
      const apiKey = process.env.AI_LOGO_API_KEY;

      if (!prompt) {
        throw new HttpsError("invalid-argument", "Prompt is required");
      }

      if (!apiKey) {
        throw new HttpsError(
          "failed-precondition",
          "API key is not configured"
        );
      }

      const logoUrl = await aiService.generateLogo(prompt, apiKey);

      return { success: true, logoUrl };
    } catch (error) {
      throw new HttpsError("internal", "Error generating logo", error);
    }
  }
);
