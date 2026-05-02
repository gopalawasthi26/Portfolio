# 🚀 Gopal Awasthi - Portfolio

A stunning, AI-powered personal portfolio built with **Next.js 14**, featuring a Claude AI chatbot, animated UI, and responsive design.

---

## ✨ Features

- 🤖 **AI Chatbot** — Powered by Claude (Anthropic), answers questions about Gopal
- ⚡ **Animated Hero** — Typewriter effect with floating particles
- 📊 **Skill Bars** — Animated progress bars with scroll trigger
- 🎯 **Projects Showcase** — Featured and regular project cards
- 📅 **Timeline** — Experience & education with animated timeline
- 🌐 **Social Links** — GitHub, LinkedIn, LeetCode, Instagram, Email
- 🖱️ **Custom Cursor** — Neon cyan cursor with trail effect
- 📱 **Fully Responsive** — Mobile-first design
- 🌑 **Dark Theme** — Cyberpunk/neon aesthetic

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **AI**: Anthropic Claude API (claude-sonnet)
- **Fonts**: Space Grotesk + Space Mono

---

## 🚀 Getting Started (VS Code)

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your Anthropic API key:
```
ANTHROPIC_API_KEY=your_api_key_here
```

Get your key from: https://console.anthropic.com

### 3. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

---

## 📦 Deploy to GitHub + Render

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Portfolio"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Deploy on Render

1. Go to [render.com](https://render.com) and sign in
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure:
   - **Name**: `gopal-portfolio`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Add Environment Variable:
   - Key: `ANTHROPIC_API_KEY`
   - Value: your API key
6. Click **"Create Web Service"**

Done! Your portfolio will be live at `https://gopal-portfolio.onrender.com` 🎉

---

## 🌟 Customization

To update content, edit `/app/page.js`:
- **skills[]** — Add/edit your skills
- **projects[]** — Add your projects  
- **timeline[]** — Update experience/education

---

## 📄 License

MIT — Free to use and modify.

---

Built with ❤️ by **Gopal Awasthi** | 2026
