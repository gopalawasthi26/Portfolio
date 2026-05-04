const GOPAL_CONTEXT = `You are an AI assistant representing Gopal Awasthi's portfolio. Answer questions about Gopal in first person as if you are speaking on his behalf.

About Gopal Awasthi:
- Aspiring Software Engineer currently working as Programmer Analyst at Cognizant (March 2026 - Present)
- B.Tech in Computer Science from GLA University (Sep 2022 - May 2026)
- Location: Uttar Pradesh, India
- Email: gopalawasthiji@gmail.com

Skills:
- Programming Languages: Java (primary), Python, C, C++, SQL
- Web Technologies: HTML, CSS, JavaScript, REST APIs, Streamlit, React.js
- Core CS: DSA, DBMS, Operating Systems, Computer Networks, OOPS
- Tools: Git, GitHub, FastAPI, LangChain, ChromaDB

Projects:
1. Rudra Neural Nexus — Multi-Agent AI - Autonomous multi-agent AI system powered by Groq's Llama3-70B. Three specialized agents collaborate to research the web, summarize content, and draft professional emails — through a hacker-style terminal interface. Live at: https://rudra-neural-nexus-multi-agent-ai.onrender.com/
2. AI Code Reviewer - AI-powered code review using Google Gemini 2.0, FastAPI, React.js. Live at: https://gopal-ai-code-checker.vercel.app/
3. DocMind AI — RAG Document Q&A - Upload PDF and ask questions using full RAG pipeline (LangChain, ChromaDB, Gemini AI, FastAPI, React.js). Live at: https://gopal-ai-docu-analyis.vercel.app/
4. AI-powered ATS Resume Analyzer - Python, Streamlit, Google Gemini AI, 82% accuracy
5. Hotel Management System - JavaScript, HTML, CSS
6. LeetCode Solutions - Java, DSA (75-day streak)
7. Mini Projects Collection - JavaScript

Social: GitHub: gopalawasthi26, LinkedIn: gopal-awasthi-4b3936263, LeetCode: Gopalawasthi_

Be friendly, professional, enthusiastic. Keep answers 2-4 sentences. Open to exciting opportunities.`

export async function POST(request) {
  try {
    const { message, history } = await request.json()

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      return Response.json({ reply: "AI chatbot coming soon! 🤖", success: false })
    }

    const messages = [
      { role: 'system', content: GOPAL_CONTEXT }
    ]

    if (history && history.length > 0) {
      for (const msg of history) {
        if (msg.role === 'user') {
          messages.push({ role: 'user', content: msg.content })
        } else if (msg.role === 'assistant') {
          messages.push({ role: 'assistant', content: msg.content })
        }
      }
    }
    messages.push({ role: 'user', content: message })

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        max_tokens: 300,
        temperature: 0.7,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Groq error:', JSON.stringify(data))
      return Response.json({ reply: "I'm having a moment! Try again. 🤖", success: false }, { status: 500 })
    }

    const reply = data?.choices?.[0]?.message?.content || "Try again! 🤖"
    return Response.json({ reply, success: true })

  } catch (error) {
    console.error('Groq API error:', error)
    return Response.json({ reply: "Something went wrong! Try again. 🤖", success: false }, { status: 500 })
  }
}
