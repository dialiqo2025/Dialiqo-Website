import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function POST(req: Request) {
  const { prompt, industry, technologyNeeds } = await req.json();
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      recommendation: `Based on your request for ${industry || "Enterprise"} solutions with focus on ${technologyNeeds || "Scalable Architecture"}: We recommend a hybrid Voice AI & Microservices architecture built on Dialiqo's FreeSWITCH/Kamailio VoIP cluster paired with Claude/OpenAI real-time audio models, deployed across Multi-Region Kubernetes.`,
      suggestedServices: [
        "Voice AI Solutions",
        "VoIP Development",
        "Cloud Engineering",
        "DevOps",
      ],
      techStack: [
        "FreeSWITCH",
        "Kamailio",
        "React / Next.js",
        "Python FastApi",
        "Kubernetes",
        "AWS",
      ],
      estimatedTimeline: "8-12 Weeks to MVP Enterprise Deployment",
      estimatedUptime: "99.999% SLA",
    });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const systemInstruction = `You are Dialiqo's Senior Chief Architect. You analyze enterprise software requirements (VoIP, Voice AI, Web, Mobile, Cloud, CRM, Call Centers) and provide concise, executive architectural recommendations highlighting Dialiqo's capabilities.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Industry: ${industry || "General Enterprise"}\nNeeds: ${technologyNeeds || "Custom Software Development"}\nPrompt: ${prompt}`,
      config: {
        systemInstruction,
        temperature: 0.2,
      },
    });

    return NextResponse.json({
      recommendation:
        response.text ||
        "Dialiqo recommends an integrated AI Agent and Carrier-grade VoIP architecture.",
      suggestedServices: [
        "Voice AI Solutions",
        "VoIP Development",
        "Cloud Engineering",
      ],
      techStack: ["FreeSWITCH", "OpenAI / Claude", "Next.js", "Kubernetes"],
      estimatedTimeline: "6-10 Weeks to Production",
      estimatedUptime: "99.999% SLA",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Gemini API Error:", message);
    return NextResponse.json({
      recommendation:
        "Dialiqo recommends a custom multi-region microservices architecture with carrier-grade SIP trunking and automated AI voice agents.",
      suggestedServices: [
        "VoIP Development",
        "AI Agent Development",
        "Cloud Engineering",
      ],
      techStack: ["FreeSWITCH", "Asterisk", "Next.js", "Docker / K8s"],
      estimatedTimeline: "8 Weeks",
      estimatedUptime: "99.999% SLA",
    });
  }
}
