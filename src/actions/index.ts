// src/actions/index.ts
import { defineAction } from 'astro:actions';
import { z } from 'astro:schema'; // Uses the new Astro 5 schema
import OpenAI from 'openai';

// 1. Initialize OpenAI (Netlify AI Gateway handles the URL/Keys)
const openai = new OpenAI();

export const server = {
  // 2. Define your specific Chatbot Action
  askChatbot: defineAction({
    // Validate that the user actually sent a string
    input: z.object({
      question: z.string(),
    }),
    handler: async (input) => {
      // --- This is where the "RAG" magic happens ---
      
      // A. Create an embedding of the user's question
      // B. Search your vector database for matching text from your site
      // C. Send the matching text + question to the LLM
      
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: "You are a helpful assistant for this website." },
          { role: "user", content: input.question }
        ],
      });

      return response.choices[0].message.content;
    },
  }),
};