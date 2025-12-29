import express from "express";
import cors from "cors";
import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Gemini setup
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// AI route
app.post("/", async (req, res) => {
  try {
    console.log("Body:", req.body);

    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        success: false,
        message: "Prompt is required",
      });
    }

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    // ✅ Correct way to get text
    console.log(result)
    const reply = result.candidates[0].content.parts[0].text;


    res.status(200).json({
      success: true,
      reply,
    });

  } catch (error) {
    console.error("AI Error:", error);
    res.status(500).json({
      success: false,
      message: "AI request failed",
    });
  }
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
