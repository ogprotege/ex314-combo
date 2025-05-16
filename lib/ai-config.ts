import { createTogetherAI } from "@ai-sdk/togetherai"

// Create the Together.ai provider instance
export const togetherai = createTogetherAI({
  apiKey: process.env.TOGETHER_API_KEY || "",
})

// Create a standard model for general chat
export const chatModel = togetherai("meta-llama/Meta-Llama-3.3-70B-Instruct-Turbo")

// Create a theological model for religious questions
export const theologicalModel = togetherai("Qwen/Qwen3-235B-A22B-fp8-tput")

// Helper function to select the appropriate model based on content
export function selectModel(content: string) {
  // Check if the content is related to theology or religion
  const theologicalKeywords = [
    "god",
    "jesus",
    "christ",
    "bible",
    "scripture",
    "faith",
    "prayer",
    "church",
    "catholic",
    "christianity",
    "religion",
    "spiritual",
    "holy",
    "saint",
    "liturgy",
    "mass",
    "sacrament",
    "priest",
    "bishop",
    "pope",
    "vatican",
    "theology",
    "doctrine",
    "dogma",
    "catechism",
  ]

  const lowerContent = content.toLowerCase()

  // Check if content contains theological keywords
  const isTheological = theologicalKeywords.some((keyword) => lowerContent.includes(keyword.toLowerCase()))

  if (isTheological) {
    return theologicalModel
  } else {
    return chatModel
  }
}
