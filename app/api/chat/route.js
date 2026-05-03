const GOPAL_CONTEXT = `You are an AI assistant representing Gopal Awasthi's portfolio. Answer questions about Gopal in first person as if you are speaking on his behalf.

About Gopal Awasthi:
- Aspiring Software Engineer currently working as Programmer Analyst at Cognizant (March 2026 - Present)
- B.Tech in Computer Science from GLA University (Sep 2022 - May 2026)
- Location: Uttar Pradesh, India
- Email: gopalawasthiji@gmail.com

Skills:
- Programming Languages: Java (primary), Python, C, C++, SQL
- Web Technologies: HTML, CSS, JavaScript, REST APIs, Streamlit
- Core CS: DSA, DBMS, Operating Systems, Computer Networks, OOPS
- Tools: Git, GitHub, Streamlit

Projects:
1. AI-powered ATS Resume Analyzer - Python, Streamlit, Google Gemini AI, 82% accuracy
2. Hotel Management System - JavaScript, HTML, CSS
3. LeetCode Solutions - Java, DSA (75-day streak)
4. Mini Projects Collection - JavaScript

Social: GitHub: gopalawasthi26, LinkedIn: gopal-awasthi-4b3936263, LeetCode: Gopalawasthi_

Be friendly, professional, enthusiastic. Keep answers 2-4 sentences. Open to exciting opportunities.`

export async function POST(request) {
  try {
    const { message, history } = await request.json()

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return Response.json({ reply: "AI chatbot coming soon! 🤖", success: false })
    }

    const contents = []
    if (history && history.length > 0) {
      for (const msg of history) {
        if (msg.role === 'user') {
          contents.push({ role: 'user', parts: [{ text: msg.content }] })
        } else if (msg.role === 'assistant') {
          contents.push({ role: 'model', parts: [{ text: msg.content }] })
        }
      }
    }
    contents.push({ role: 'user', parts: [{ text: message }] })

    const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: GOPAL_CONTEXT }] },
          contents,
          generationConfig: { maxOutputTokens: 300, temperature: 0.7 },
        }),
      }
    )

   const data = await response.json()
if (!response.ok) {
  console.error('Gemini error:', JSON.stringify(data))  // ← yeh add karo
  return Response.json({ reply: "I'm having a moment! Try again. 🤖", success: false }, { status: 500 })
}

    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Try again! 🤖"
    return Response.json({ reply, success: true })

  } catch (error) {
    console.error('Gemini API error:', error)
    return Response.json({ reply: "Something went wrong! Try again. 🤖", success: false }, { status: 500 })
  }
}
