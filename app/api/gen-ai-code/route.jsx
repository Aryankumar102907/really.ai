import { GenAiCode } from "@/configs/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt } = await req.json();
  try {
    const result = await GenAiCode.sendMessage(prompt);
    const resp = result.response.text();
    const parsedResp = JSON.parse(resp);
    
    // Ensure the response has the expected structure
    const response = {
      projectTitle: parsedResp.projectTitle || "Generated Project",
      explanation: parsedResp.explanation || "AI generated code project",
      files: parsedResp.files || {},
      generatedFiles: parsedResp.generatedFiles || []
    };
    
    return NextResponse.json(response);
  } catch (e) {
    console.error('Error in gen-ai-code API:', e);
    // Return a fallback response with empty files if parsing fails
    return NextResponse.json({ 
      error: e.message || e.toString(),
      projectTitle: "Error",
      explanation: "Failed to generate code",
      files: {},
      generatedFiles: []
    });
  }
}
