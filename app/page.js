'use client'

import { useState, useEffect, useRef } from 'react'

const skills = [
  { name: 'Java', level: 88, color: '#f97316' },
  { name: 'Python', level: 82, color: '#3b82f6' },
  { name: 'SQL', level: 80, color: '#8b5cf6' },
  { name: 'Data Structures & Algorithms', level: 85, color: '#06b6d4' },
  { name: 'C / C++', level: 72, color: '#10b981' },
  { name: 'HTML / CSS / JS', level: 78, color: '#f59e0b' },
  { name: 'Git & GitHub', level: 82, color: '#ec4899' },
  { name: 'REST APIs', level: 75, color: '#6366f1' },
]

const projects = [
  {
    title: 'AI-Powered ATS Resume Analyzer',
    emoji: '🤖',
    desc: 'Analyzes resumes against job descriptions using Google Gemini AI. Generates ATS score (0–100%), identifies missing keywords, and gives personalized suggestions.',
    tags: ['Python', 'Streamlit', 'Gemini AI', 'PyMuPDF', 'NLP'],
    stats: '50+ resumes tested • 82% accuracy',
    link: 'https://github.com/gopalawasthi26/ATS-Resume-Analyser',
    highlight: true,
  },
  {
    title: 'Hotel Management System',
    emoji: '🏨',
    desc: 'A JavaScript-based hotel management solution with booking, room management, and guest tracking features.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    stats: 'Full CRUD operations',
    link: 'https://github.com/gopalawasthi26/ManageMyHotel',
    highlight: false,
  },
  {
    title: 'LeetCode Solutions',
    emoji: '⚡',
    desc: 'Logically solved competitive programming problems in Java. Covers arrays, trees, graphs, DP and more.',
    tags: ['Java', 'DSA', 'Algorithms'],
    stats: '75-day streak',
    link: 'https://github.com/gopalawasthi26/Leetcode',
    highlight: false,
  },
  {
    title: 'Mini Projects Collection',
    emoji: '🛠️',
    desc: 'A collection of creative JavaScript mini-projects showcasing frontend skills and creative problem solving.',
    tags: ['JavaScript', 'HTML', 'CSS', 'DOM'],
    stats: 'Multiple projects',
    link: 'https://github.com/gopalawasthi26/Miniprojects',
    highlight: false,
  },
]

const timeline = [
  {
    year: 'Mar 2026',
    title: 'Programmer Analyst',
    company: 'Cognizant',
    icon: '💼',
    desc: 'Working with Java & Python on real-world projects. Demonstrated leadership in Hackathon.',
    current: true,
  },
  {
    year: 'Sep 2022',
    title: 'B.Tech Computer Science',
    company: 'GLA University',
    icon: '🎓',
    desc: 'Pursuing B.Tech in CSE. Strong focus on DSA, DBMS, OS, and System Design.',
    current: false,
  },
  {
    year: 'May 2022',
    title: 'Senior Secondary',
    company: 'Maharaja Agresen Public School',
    icon: '🏫',
    desc: 'Completed 12th with CBSE board. Strong foundation in Science and Mathematics.',
    current: false,
  },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-mono text-cyan-400 text-xl font-bold tracking-widest">
          GA<span className="text-white">.</span>
        </div>
        <div className="hidden md:flex gap-8">
          {['about', 'skills', 'projects', 'experience', 'contact'].map(item => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-gray-400 hover:text-cyan-400 transition-colors capitalize text-sm tracking-wider"
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:block neon-btn border border-cyan-400 text-cyan-400 px-4 py-2 text-sm rounded hover:bg-cyan-400 hover:text-gray-900 transition-all"
        >
          Hire Me
        </button>
        <button className="md:hidden text-cyan-400" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="space-y-1">
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="glass md:hidden px-6 py-4 space-y-3">
          {['about', 'skills', 'projects', 'experience', 'contact'].map(item => (
            <button key={item} onClick={() => scrollTo(item)} className="block text-gray-400 hover:text-cyan-400 capitalize w-full text-left py-2 border-b border-gray-800">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

function Hero() {
  const [text, setText] = useState('')
  const [phase, setPhase] = useState(0)
  const [activePhoto, setActivePhoto] = useState(0)
  const phrases = ['Software Engineer', 'Java Developer', 'Problem Solver', 'AI Enthusiast']

  useEffect(() => {
    let timeout
    const current = phrases[phase % phrases.length]
    let i = 0
    const type = () => {
      if (i <= current.length) {
        setText(current.slice(0, i))
        i++
        timeout = setTimeout(type, 80)
      } else {
        timeout = setTimeout(() => setPhase(p => p + 1), 1800)
      }
    }
    setText('')
    const start = setTimeout(type, 300)
    return () => { clearTimeout(timeout); clearTimeout(start) }
  }, [phase])

  const photos = ['/photo1.jpeg', '/photo2.jpeg', '/photo3.jpeg', '/photo4.jpeg', '/photo5.jpeg']

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-bg pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay:'1s'}}></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 py-12">

        {/* LEFT: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-block">
            <span className="font-mono text-cyan-400 text-sm tracking-widest border border-cyan-400/30 px-4 py-2 rounded-full">
              &gt; Hello, World! 👋
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 glow-text">
              Gopal Awasthi
            </span>
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 mb-6 h-9 font-mono">
            <span className="text-cyan-400">&lt;</span>
            <span>{text}</span>
            <span className="cursor-blink text-cyan-400">|</span>
            <span className="text-cyan-400">/&gt;</span>
          </div>

          <p className="text-gray-400 text-base max-w-xl mb-8 leading-relaxed">
            Aspiring Software Engineer passionate about building intelligent solutions.
            Currently working as <span className="text-cyan-400">Programmer Analyst @ Cognizant</span>.
            B.Tech CSE from GLA University.
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
            <a href="https://github.com/gopalawasthi26" target="_blank" rel="noopener noreferrer"
              className="neon-btn flex items-center gap-2 bg-cyan-400 text-gray-900 font-semibold px-5 py-2.5 rounded hover:bg-cyan-300 transition-all text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="http://linkedin.com/in/gopal-awasthi-4b3936263" target="_blank" rel="noopener noreferrer"
              className="neon-btn flex items-center gap-2 border border-blue-500 text-blue-400 px-5 py-2.5 rounded hover:bg-blue-500 hover:text-white transition-all text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="https://leetcode.com/u/Gopalawasthi_/" target="_blank" rel="noopener noreferrer"
              className="neon-btn flex items-center gap-2 border border-yellow-500 text-yellow-400 px-5 py-2.5 rounded hover:bg-yellow-500 hover:text-gray-900 transition-all text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
              LeetCode
            </a>
            <a href="https://instagram.com/rudra.awasthi26_" target="_blank" rel="noopener noreferrer"
              className="neon-btn flex items-center gap-2 border border-pink-500 text-pink-400 px-5 py-2.5 rounded hover:bg-pink-500 hover:text-white transition-all text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Instagram
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-8 text-center">
            {[
              { value: '75+', label: 'Days Streak' },
              { value: '4+', label: 'Projects' },
              { value: '3+', label: 'Languages' },
              { value: '1+', label: 'Year Exp' },
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-cyan-400 glow-text">{stat.value}</div>
                <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Photo Gallery */}
        <div className="flex-shrink-0 flex flex-col items-center gap-4">
          {/* Main photo */}
          <div className="relative w-64 h-72 md:w-72 md:h-80">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-purple-600 p-0.5">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                <img
                  src={photos[activePhoto]}
                  alt="Gopal Awasthi"
                  className="w-full h-full object-cover object-top transition-all duration-500"
                />
              </div>
            </div>
            {/* Glow ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-600/20 blur-lg -z-10"></div>
            {/* Badge */}
            <div className="absolute -bottom-3 -right-3 bg-cyan-400 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full">
              @ Cognizant 💼
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-2 mt-4">
            {photos.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePhoto(i)}
                className={`w-10 h-10 rounded-lg overflow-hidden border-2 transition-all hover:scale-110 ${
                  activePhoto === i ? 'border-cyan-400 scale-110' : 'border-gray-700 opacity-60'
                }`}
              >
                <img src={p} alt={`photo ${i+1}`} className="w-full h-full object-cover object-top" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full"></div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const techIcons = [
    { name: 'Java', bg: '#f97316' },
    { name: 'Python', bg: '#3b82f6' },
    { name: 'C++', bg: '#10b981' },
    { name: 'SQL', bg: '#8b5cf6' },
    { name: 'HTML', bg: '#f59e0b' },
    { name: 'CSS', bg: '#06b6d4' },
    { name: 'JS', bg: '#eab308' },
    { name: 'Git', bg: '#f43f5e' },
    { name: 'DSA', bg: '#6366f1' },
    { name: 'DBMS', bg: '#14b8a6' },
    { name: 'OS', bg: '#a855f7' },
    { name: 'OOP', bg: '#ec4899' },
  ]

  return (
    <section id="skills" ref={ref} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white section-heading inline-block">Skills & Tech Stack</h2>
        <p className="text-gray-400 mt-4">Technologies I work with</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {skills.map((skill, i) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between mb-2">
              <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
              <span className="text-gray-500 text-sm font-mono">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: visible ? `${skill.level}%` : '0%',
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                  transitionDelay: `${i * 100}ms`,
                  boxShadow: `0 0 10px ${skill.color}66`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mb-8">
        <h3 className="text-gray-400 text-sm tracking-widest uppercase">Technologies</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {techIcons.map(tech => (
          <div
            key={tech.name}
            className="px-4 py-2 rounded-full text-sm font-mono font-bold transition-all hover:scale-110 cursor-default"
            style={{ background: `${tech.bg}22`, border: `1px solid ${tech.bg}44`, color: tech.bg }}
          >
            {tech.name}
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white section-heading inline-block">Projects</h2>
        <p className="text-gray-400 mt-4">Things I've built</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`gradient-border rounded-xl p-6 hover:scale-[1.02] transition-all group block ${
              p.highlight ? 'md:col-span-2' : ''
            }`}
          >
            <div className="flex items-start gap-4 mb-4">
              <span className="text-3xl">{p.emoji}</span>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">
                  {p.title}
                  {p.highlight && <span className="ml-2 text-xs bg-cyan-400/20 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-400/30">Featured</span>}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{p.desc}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {p.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700 font-mono">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-xs">{p.stats}</span>
              <span className="text-cyan-400 text-xs group-hover:translate-x-1 transition-transform">View on GitHub →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white section-heading inline-block">Experience & Education</h2>
        <p className="text-gray-400 mt-4">My journey so far</p>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent"></div>

        {timeline.map((item, i) => (
          <div key={i} className="relative pl-20 mb-12 group">
            <div className="absolute left-6 top-1 w-5 h-5 rounded-full flex items-center justify-center text-xs -translate-x-1/2"
              style={{ background: item.current ? '#06b6d4' : '#1e293b', border: '2px solid #06b6d4' }}>
              {item.current && <div className="w-2 h-2 rounded-full bg-gray-900"></div>}
            </div>

            <div className="gradient-border rounded-xl p-6 hover:scale-[1.01] transition-all">
              <div className="flex flex-wrap justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-white font-bold">{item.title}</h3>
                    <p className="text-cyan-400 text-sm">{item.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-gray-500 bg-gray-800 px-3 py-1 rounded-full">{item.year}</span>
                  {item.current && <span className="text-xs bg-cyan-400/20 text-cyan-400 px-2 py-1 rounded-full border border-cyan-400/30 animate-pulse">● Live</span>}
                </div>
              </div>
              <p className="text-gray-400 text-sm mt-3 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function AIChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hey! 👋 I'm Gopal's AI. Ask me anything about him — skills, projects, experience!" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = async () => {
    if (!input.trim() || loading) return
    const userMsg = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMsg }])
    setLoading(true)

    try {
      const history = messages.filter(m => m.role !== 'assistant' || messages.indexOf(m) !== 0)
        .map(m => ({ role: m.role, content: m.content }))

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, history }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: "Oops! Try again. 🤖" }])
    } finally {
      setLoading(false)
    }
  }

  const suggestions = ["What projects has Gopal built?", "What are his skills?", "Is he available for work?"]

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center shadow-lg hover:scale-110 transition-all glow-cyan"
      >
        {open ? (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
        ) : (
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 glass rounded-2xl shadow-2xl overflow-hidden border border-cyan-400/20">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 p-4 border-b border-gray-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center text-xs font-bold text-white">AI</div>
              <div>
                <p className="text-white font-semibold text-sm">Ask about Gopal</p>
                <p className="text-cyan-400 text-xs">● Powered by Claude AI</p>
              </div>
            </div>
          </div>

          <div className="h-72 overflow-y-auto p-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`chat-bubble flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user'
                    ? 'bg-cyan-500 text-gray-900 rounded-br-sm'
                    : 'bg-gray-800 text-gray-200 rounded-bl-sm'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay:'0ms'}}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay:'150ms'}}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{animationDelay:'300ms'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {messages.length === 1 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1">
              {suggestions.map(s => (
                <button key={s} onClick={() => { setInput(s); setTimeout(send, 100) }}
                  className="text-xs text-cyan-400 border border-cyan-400/30 rounded-full px-2 py-1 hover:bg-cyan-400/10 transition-all">
                  {s}
                </button>
              ))}
            </div>
          )}

          <div className="p-3 border-t border-gray-700 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask anything..."
              className="flex-1 bg-gray-800 text-white text-sm px-4 py-2 rounded-full outline-none border border-gray-700 focus:border-cyan-400 transition-colors placeholder-gray-500"
            />
            <button onClick={send} disabled={loading || !input.trim()}
              className="w-9 h-9 bg-cyan-400 rounded-full flex items-center justify-center text-gray-900 hover:bg-cyan-300 disabled:opacity-50 transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white section-heading inline-block">Get In Touch</h2>
        <p className="text-gray-400 mt-4">Let's build something together</p>
      </div>

      <div className="gradient-border rounded-2xl p-8 md:p-12 text-center">
        <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl mx-auto">
          I'm open to exciting opportunities, collaborations, and interesting projects.
          Feel free to reach out!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { icon: '📧', label: 'Email', value: 'gopalawasthiji@gmail.com', href: 'mailto:gopalawasthiji@gmail.com' },
            { icon: '💼', label: 'LinkedIn', value: 'gopal-awasthi', href: 'http://linkedin.com/in/gopal-awasthi-4b3936263' },
            { icon: '🐙', label: 'GitHub', value: 'gopalawasthi26', href: 'https://github.com/gopalawasthi26' },
            { icon: '📸', label: 'Instagram', value: 'rudra.awasthi26_', href: 'https://instagram.com/rudra.awasthi26_' },
          ].map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer"
              className="gradient-border rounded-xl p-4 text-center hover:scale-105 transition-all group">
              <div className="text-2xl mb-2">{c.icon}</div>
              <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">{c.label}</div>
              <div className="text-cyan-400 text-xs font-mono group-hover:text-cyan-300 truncate">{c.value}</div>
            </a>
          ))}
        </div>

        <a href="mailto:gopalawasthiji@gmail.com"
          className="neon-btn inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-gray-900 font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all text-lg glow-cyan">
          Say Hello 👋
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 text-center border-t border-gray-800">
      <p className="text-gray-500 text-sm font-mono">
        Built with <span className="text-red-500">❤</span> by{' '}
        <span className="text-cyan-400">Gopal Awasthi</span> •{' '}
        <span className="text-gray-600">2026</span>
      </p>
      <p className="text-gray-700 text-xs mt-1 font-mono">
        "Consistency beats talent when talent doesn't work hard." 🔥
      </p>
    </footer>
  )
}

export default function Home() {
  useEffect(() => {
    const cursor = document.createElement('div')
    const trail = document.createElement('div')
    cursor.className = 'cursor'
    trail.className = 'cursor-trail'
    document.body.appendChild(cursor)
    document.body.appendChild(trail)

    let mx = 0, my = 0, tx = 0, ty = 0

    const move = (e) => {
      mx = e.clientX; my = e.clientY
      cursor.style.left = mx - 6 + 'px'
      cursor.style.top = my - 6 + 'px'
    }

    const animate = () => {
      tx += (mx - tx) * 0.15
      ty += (my - ty) * 0.15
      trail.style.left = tx - 16 + 'px'
      trail.style.top = ty - 16 + 'px'
      requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', move)
    animate()

    return () => {
      document.removeEventListener('mousemove', move)
      cursor.remove()
      trail.remove()
    }
  }, [])

  return (
    <main>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <AIChat />
    </main>
  )
}
