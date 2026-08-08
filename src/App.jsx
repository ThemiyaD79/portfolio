import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  FolderGit2,
  Terminal,
  MapPin,
  Clock,
  Palette,
  GraduationCap,
  Smile,
  ChevronDown,
  BarChart3,
  Database,
  Cpu,
  Globe,
  CheckCircle2,
  Workflow
} from 'lucide-react';

const MY_INFO = {
  name: "Themiya Abeyrathna",
  email: "dgthemiya@gmail.com",
  title: "Software & Data Analytics Developer",
  github: "https://github.com/ThemiyaD79",
  linkedin: "https://www.linkedin.com/in/themiya-abeyrathna/",
  upwork: "https://www.upwork.com/freelancers/~0128009e5efd42f084?mp_source=share"
};

const BACKGROUND_OPTIONS = [
  { id: 'obsidian', class: 'bg-slate-950', border: 'border-slate-400' },
  { id: 'midnight', class: 'bg-[#0a0f24]', border: 'border-blue-400' },
  { id: 'amethyst', class: 'bg-[#120a1f]', border: 'border-purple-400' },
  { id: 'forest', class: 'bg-[#051714]', border: 'border-emerald-400' },
  { id: 'frost', class: 'bg-frost', border: 'border-slate-800' }
];

const GithubIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
);
const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
);
const UpworkIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M17.48 6.06c-2.09 0-3.69 1.2-4.24 3.01v-3H10.4v7.7c0 1.93-1.57 3.51-3.51 3.51S3.39 15.7 3.39 13.78V6.07H.54v7.71c0 3.51 2.85 6.36 6.36 6.36s6.36-2.85 6.36-6.36v-1.85a4.84 4.84 0 003.1 1.05c2.97 0 5.39-2.42 5.39-5.39s-2.43-5.4-4.27-5.4zm0 8.08c-1.49 0-2.69-1.21-2.69-2.7s1.2-2.7 2.69-2.7 2.69 1.21 2.69 2.7-1.2 2.69-2.69 2.7z"/></svg>
);

const FrogGameVisual = () => {
  return (
    <div className="relative w-full h-40 bg-slate-900 rounded-xl overflow-hidden border border-white/10 mb-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
      <style>{`
        @keyframes scrollGround { 0% { background-position: 0px 0; } 100% { background-position: -40px 0; } }
        @keyframes hop { 0%, 100% { transform: translateY(0) scaleY(0.9); } 50% { transform: translateY(-40px) scaleY(1.05); } }
        @keyframes slideLeftFast { 0% { transform: translateX(300px); } 100% { transform: translateX(-100px); } }
      `}</style>
      <div className="absolute top-4 right-10 text-2xl animate-pulse drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">📦</div>
      <div className="absolute bottom-0 w-full h-10 bg-slate-950 border-t-2 border-cyan-500 shadow-[0_-5px_15px_rgba(6,182,212,0.3)]"
        style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(6,182,212,0.1) 20px, rgba(6,182,212,0.1) 21px)', animation: 'scrollGround 1.5s linear infinite' }}>
      </div>
      <div className="absolute bottom-10 w-6 h-10 bg-slate-800 border-2 border-pink-500 rounded-t-sm shadow-[0_0_10px_rgba(236,72,153,0.5)]" style={{ animation: 'slideLeftFast 3s linear infinite' }}></div>
      <div className="absolute bottom-10 left-1/4 z-10 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" style={{ animation: 'hop 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite' }}>
        <svg width="32" height="32" viewBox="0 0 16 16" style={{ imageRendering: 'pixelated' }}>
          <path fill="#22c55e" d="M4,4 h2 v-2 h-2 z M10,4 h2 v-2 h-2 z M2,6 h2 v-2 h-2 z M12,6 h2 v-2 h-2 z M4,8 h8 v-2 h-8 z M2,10 h12 v-2 h-12 z M2,12 h12 v-2 h-12 z M2,14 h3 v-2 h-3 z M11,14 h3 v-2 h-3 z" />
          <path fill="#020617" d="M3,5 h1 v1 h-1 z M12,5 h1 v1 h-1 z" />
          <path fill="#86efac" d="M5,12 h6 v-2 h-6 z" />
        </svg>
      </div>
    </div>
  );
};

export default function App() {
  const [time, setTime] = useState("");
  const [bgColor, setBgColor] = useState(BACKGROUND_OPTIONS[0].class);
  const [activeProject, setActiveProject] = useState(0); 
  const [introStage, setIntroStage] = useState('welcome');
  const [globalScroll, setGlobalScroll] = useState(0);

  const scrollContainerRef = useRef(null);
  const cursorRef = useRef(null);

  const services = [
    {
      title: "Business Intelligence & Analytics",
      icon: <BarChart3 className="text-pink-400" size={24} />,
      description: "Building interactive Power BI dashboards, DAX metrics, and automated data pipelines to transform raw business data into real-time decision centers.",
      capabilities: ["Power BI Dashboards", "DAX & Data Modeling", "ETL Processing", "Executive Reporting"]
    },
    {
      title: "Custom Desktop & POS Engineering",
      icon: <Cpu className="text-cyan-400" size={24} />,
      description: "Developing robust C# WPF desktop platforms that automate operational workflows, POS transactions, inventory tracking, and debtor management.",
      capabilities: ["C# & .NET Architecture", "WPF UI Engineering", "POS System Logic", "Workflow Automation"]
    },
    {
      title: "Relational Database Design",
      icon: <Database className="text-emerald-400" size={24} />,
      description: "Structuring high-performance relational database schemas, complex SQL queries, and secure data storage models from the ground up.",
      capabilities: ["SQL Server & MySQL", "Schema Design", "Query Optimization", "FIFO Aging Logic"]
    },
    {
      title: "Full-Stack Web & REST APIs",
      icon: <Globe className="text-amber-400" size={24} />,
      description: "Constructing scalable web platforms and ASP.NET Web APIs with role-based user access, dynamic search filtering, and secure backends.",
      capabilities: ["ASP.NET Web API", "PHP & MySQL Web Apps", "Role-Based Security", "React Integration"]
    }
  ];

  const projects = [
    {
      title: "Frog_Ex Interactive Game",
      category: "Educational Gaming",
      description: "A story-driven 2D platformer. Cursed by a wizard, the player must learn Java programming to break the spell. Players hunt for mystery boxes containing Java syntax lessons and logic puzzles to progress and regain human form.",
      tech: ["Java", "OOP", "UI Logic"],
      github: "https://github.com/ThemiyaD79/Frog_ex",
      hasVisual: true
    },
    {
      title: "Hardware Management System",
      category: "Desktop & BI",
      description: "Automated Point-of-Sale & inventory platform. Features a custom Power BI reporting module for debtor settlements and FIFO stock aging analytics.",
      tech: ["C#", "WPF", "SQL Server", "Power BI"],
      github: "https://github.com/ThemiyaD79/Amarasingahe-Hardwear-Management-system",
      hasVisual: false
    },
    {
      title: "Medicare Plus Hospital",
      category: "Full Stack Web",
      description: "Secure session management and role-based access architecture tailored for Admin, Doctor, and Patient interactions. Handles scheduling, records, and permissions.",
      tech: ["PHP", "MySQL", "JavaScript"],
      github: "https://github.com/ThemiyaD79/Hospital-Management-System",
      hasVisual: false
    },
    {
      title: "Online Book Shop",
      category: "E-Commerce",
      description: "Interactive online platform enabling digital book catalog browsing, dynamic search filtering, shopping cart management, and secure order placement workflows.",
      tech: ["PHP", "JavaScript", "MySQL"],
      github: "https://github.com/ThemiyaD79/Book_Shop",
      hasVisual: false
    },
    {
      title: "KMC Event Platform",
      category: "Web & RESTful API",
      description: "Service-oriented event management platform built for Kandy Municipal Council. Supports city event CRUD operations and registration workflows.",
      tech: ["ASP.NET", "C#", "SQL"],
      github: "https://github.com/ThemiyaD79/KMC-EventHub",
      hasVisual: false
    }
  ];

  useEffect(() => {
    const t1 = setTimeout(() => setIntroStage('hi'), 1500);
    const t2 = setTimeout(() => setIntroStage('done'), 3200);

    const updateClock = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit', second: '2-digit' }));
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);

    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setGlobalScroll(scrolled);

      if (window.innerWidth >= 1024 && scrollContainerRef.current) {
        const rect = scrollContainerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const stickyOffset = 96; 
        
        const scrollDistance = stickyOffset - rect.top; 
        const maxScroll = rect.height - windowHeight;
        
        if (scrollDistance >= 0 && scrollDistance <= maxScroll) {
          const progress = scrollDistance / maxScroll;
          const projectIndex = Math.min(Math.floor(progress * projects.length), projects.length - 1);
          setActiveProject(projectIndex);
        } else if (scrollDistance < 0) {
          setActiveProject(0);
        } else if (scrollDistance > maxScroll) {
          setActiveProject(projects.length - 1); 
        }
      }
    };

    const handleMouseMove = (e) => {
      if (cursorRef.current && window.innerWidth >= 1024) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [projects.length]);

  const skills = [
    { category: "Languages & Frameworks", items: ["C#", "ASP.NET", "React", "Python", "PHP", "JavaScript", "Java"], color: "#4285F4" }, 
    { category: "Data & Architecture", items: ["Power BI", "SQL Server", "MySQL", "ETL Pipelines", "OOP Design"], color: "#FBBC04" }, 
    { category: "Professional Competencies", items: ["Fluent English Speaking", "Fluent English Writing", "Agile/Scrum", "Jira"], color: "#34A853" } 
  ];

  return (
    <div className={`flex flex-col lg:flex-row min-h-screen text-slate-300 font-sans selection:bg-pink-500/30 selection:text-pink-200 relative transition-colors duration-700 ${bgColor}`}>
      
      {/* Intro Preloader */}
      <div className={`fixed inset-0 z-[99999] flex items-center justify-center bg-slate-950 transition-opacity duration-1000 ease-in-out ${introStage === 'done' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="relative flex items-center justify-center">
          <h1 className={`text-4xl md:text-7xl font-black text-white absolute transition-all duration-700 transform ${introStage === 'welcome' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-110 -translate-y-10'}`}>
            Welcome.
          </h1>
          <h1 className={`text-4xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent absolute transition-all duration-700 transform ${introStage === 'hi' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-10'}`}>
            Hi, I'm Themiya.
          </h1>
        </div>
      </div>

      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes morphBlob {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 70% 70% 30% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        .geo-shape {
          animation: morphBlob 10s ease-in-out infinite;
          transition: all 0.5s ease;
        }

        .neon-cursor {
          position: fixed;
          top: -20px; left: -20px;
          width: 20px; height: 20px;
          border-radius: 50%;
          background: rgba(236, 72, 153, 0.4);
          box-shadow: 0 0 20px rgba(236, 72, 153, 0.8), 0 0 40px rgba(6, 182, 212, 0.6);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 9999;
          mix-blend-mode: screen;
          transition: width 0.2s, height 0.2s;
        }

        .bg-frost { background-color: #f8fafc; }
        .bg-frost .text-white { color: #0f172a !important; }
        .bg-frost .text-slate-300 { color: #334155 !important; }
        .bg-frost .text-slate-400 { color: #475569 !important; }
        .bg-frost .bg-white\\/5 { background-color: rgba(0,0,0,0.03) !important; }
        .bg-frost .bg-white\\/10 { background-color: rgba(0,0,0,0.06) !important; }
        .bg-frost .border-white\\/10 { border-color: rgba(0,0,0,0.1) !important; }
        .bg-frost .border-white\\/5 { border-color: rgba(0,0,0,0.05) !important; }
        .bg-frost .bg-black\\/20 { background-color: rgba(255,255,255,0.7) !important; }
        .bg-frost .bg-black\\/40 { background-color: rgba(255,255,255,0.9) !important; }
        .bg-frost .bg-black\\/60 { background-color: rgba(255,255,255,1) !important; }
        .bg-frost .bg-slate-950\\/40 { background-color: rgba(255,255,255,0.6) !important; }
        .bg-frost .neon-cursor { mix-blend-mode: multiply; background: rgba(236, 72, 153, 0.2); box-shadow: 0 0 10px rgba(236, 72, 153, 0.4); }
      `}</style>

      {/* Robot & Laser Wire */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500/20 via-cyan-500/40 to-pink-500/20 z-[90]"></div>
      <div 
        className="fixed top-0 left-0 z-[100] mt-1 transition-transform duration-75 ease-out pointer-events-none"
        style={{ transform: `translateX(calc(${globalScroll}vw - ${globalScroll > 50 ? '30px' : '0px'}))` }}
      >
        <div className="relative animate-bounce drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] text-2xl md:text-3xl">
          🤖
        </div>
      </div>

      <div ref={cursorRef} className="neon-cursor hidden lg:block"></div>

      {/* Neon Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-pink-600/20 rounded-full blur-[120px] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
      </div>

      {/* Theme Switcher */}
      <div className="fixed top-6 right-4 md:right-6 z-50 flex items-center gap-2 md:gap-3 p-2 px-3 md:px-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-lg">
        <Palette size={16} className="text-slate-400 hidden md:block" />
        <div className="w-px h-4 bg-white/20 hidden md:block"></div>
        <div className="flex gap-2">
          {BACKGROUND_OPTIONS.map((bg) => (
            <button
              key={bg.id}
              onClick={() => setBgColor(bg.class)}
              className={`w-4 h-4 md:w-5 md:h-5 rounded-full ${bg.class === 'bg-frost' ? 'bg-slate-100' : bg.class} border-2 transition-all duration-300 hover:scale-125 ${bgColor === bg.class ? bg.border : 'border-transparent'}`}
              title={`Switch to ${bg.id} theme`}
            />
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-[420px] xl:w-[480px] min-h-screen lg:fixed lg:h-screen bg-black/20 backdrop-blur-3xl border-b lg:border-b-0 lg:border-r border-white/5 p-6 md:p-12 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.5)] flex flex-col justify-center lg:justify-start overflow-y-auto hide-scroll relative">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-400 mb-6 md:mb-8 mt-10 lg:mt-0">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,1)]"></span>
            System Online / Available
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2 leading-tight">
            {MY_INFO.name}
          </h1>
          <h2 className="text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-6">
            {MY_INFO.title}
          </h2>
          
          <div className="text-slate-300 text-sm md:text-base leading-relaxed mb-10 space-y-4">
            <p>
              I build software and data solutions that actually solve problems. Whether it's replacing clunky manual workflows with clean desktop apps, writing complex SQL databases, or building interactive Power BI dashboards, I focus on making things functional, unique, and genuinely easy for people to use.
            </p>
            <p className="flex items-start gap-2 text-slate-400 font-medium text-sm">
              <GraduationCap className="text-pink-500 shrink-0 mt-0.5" size={16} />
              Holding a Higher Diploma in Computing & Software Engineering from Cardiff Metropolitan University (ICBT Campus).
            </p>
          </div>

          <nav className="hidden lg:flex flex-col gap-4 font-bold text-sm text-slate-500 uppercase tracking-widest mb-16">
            <a href="#services" className="hover:text-pink-400 transition-colors flex items-center gap-3 group">
              <span className="w-8 h-[1px] bg-slate-700 group-hover:bg-pink-400 group-hover:w-12 transition-all"></span> 01. What I Do
            </a>
            <a href="#experience" className="hover:text-pink-400 transition-colors flex items-center gap-3 group">
              <span className="w-8 h-[1px] bg-slate-700 group-hover:bg-pink-400 group-hover:w-12 transition-all"></span> 02. Experience
            </a>
            <a href="#projects" className="hover:text-pink-400 transition-colors flex items-center gap-3 group">
              <span className="w-8 h-[1px] bg-slate-700 group-hover:bg-pink-400 group-hover:w-12 transition-all"></span> 03. Architecture
            </a>
            <a href="#skills" className="hover:text-pink-400 transition-colors flex items-center gap-3 group">
              <span className="w-8 h-[1px] bg-slate-700 group-hover:bg-pink-400 group-hover:w-12 transition-all"></span> 04. Tech Stack
            </a>
            <a href="#connect" className="hover:text-cyan-400 transition-colors flex items-center gap-3 group">
              <span className="w-8 h-[1px] bg-slate-700 group-hover:bg-cyan-400 group-hover:w-12 transition-all"></span> 05. Connect
            </a>
          </nav>
        </div>

        <div id="connect" className="mt-8 lg:mt-auto flex flex-col gap-3 relative z-30 pb-10 lg:pb-0">
          <a href={`mailto:${MY_INFO.email}`} className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-pink-500/20 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.2)] transition-all group font-medium text-sm md:text-base">
            <div className="p-2 bg-white/10 rounded-lg group-hover:text-pink-400 transition-colors"><Mail size={18} /></div>
            {MY_INFO.email}
          </a>
          <a href={MY_INFO.upwork} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#14A800]/20 hover:border-[#14A800]/50 hover:shadow-[0_0_20px_rgba(20,168,0,0.2)] transition-all group font-medium text-sm md:text-base">
            <div className="p-2 bg-white/10 rounded-lg group-hover:text-[#14A800] transition-colors"><UpworkIcon className="w-4 h-4" /></div>
            Hire on Upwork
          </a>
          <div className="grid grid-cols-2 gap-3 mt-1 mb-6">
            <a href={MY_INFO.linkedin} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/50 transition-all group text-sm font-medium">
              <LinkedinIcon className="w-4 h-4 group-hover:text-[#0A66C2]" /> LinkedIn
            </a>
            <a href={MY_INFO.github} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/20 hover:border-white/40 transition-all group text-sm font-medium">
              <GithubIcon className="w-4 h-4 group-hover:text-white" /> GitHub
            </a>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <p className="text-slate-400 font-medium text-xs leading-relaxed flex items-start gap-2">
              <Smile className="text-cyan-500 shrink-0" size={16} />
              I am currently open to freelance projects and full-time roles. Let's build something great together!
            </p>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 lg:hidden animate-bounce opacity-70">
          <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
          <ChevronDown size={16} />
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="flex-1 lg:ml-[420px] xl:ml-[480px] relative z-10 hide-scroll">
        <div className="max-w-5xl mx-auto p-6 md:p-12 lg:p-16 xl:p-24 pt-16 md:pt-24 lg:pt-16">

          {/* System Metrics */}
          <section id="dashboard" className="mb-16 md:mb-24">
            <div className="flex items-center gap-2 text-xs font-bold text-pink-500 uppercase tracking-widest mb-6">
              <Terminal size={14} /> System Overview
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:border-cyan-500/30 transition-colors">
                <div className="text-cyan-500 mb-4"><MapPin size={20} /></div>
                <div className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-wider">Current Node Server</div>
                <div className="text-lg md:text-xl font-black text-white mb-1">Negombo, Sri Lanka</div>
                <div className="text-pink-400 font-mono text-xs md:text-sm flex items-center gap-2"><Clock size={14} /> {time}</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:border-cyan-500/30 transition-colors">
                <div className="text-cyan-500 mb-4"><Code2 size={20} /></div>
                <div className="text-sm font-bold text-slate-500 mb-1 uppercase tracking-wider">Core Architecture</div>
                <div className="text-lg md:text-xl font-black text-white mb-1">.NET & Data BI</div>
                <div className="text-pink-400 font-mono text-xs md:text-sm">C# / SQL / Power BI</div>
              </div>
            </div>
          </section>

          {/* --- NEW: WHAT I DO / SERVICES SECTION --- */}
          <section id="services" className="mb-16 md:mb-24">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">
              <Workflow size={14} /> Professional Services
            </div>
            <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">What I Do & How I Deliver Value</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {services.map((srv, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:border-pink-500/40 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-black/40 border border-white/10 rounded-xl">{srv.icon}</div>
                    <h4 className="text-lg font-bold text-white leading-snug">{srv.title}</h4>
                  </div>
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">{srv.description}</p>
                  <div className="grid grid-cols-2 gap-2 border-t border-white/5 pt-4">
                    {srv.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] font-bold text-slate-400">
                        <CheckCircle2 size={12} className="text-cyan-400 shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Development Process Bar */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Engineering Workflow</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-black/30 border border-white/5 rounded-xl">
                  <span className="text-xs font-black text-pink-400 block mb-1">01. Discovery</span>
                  <span className="text-[11px] text-slate-300 font-medium">Workflow Analysis</span>
                </div>
                <div className="p-3 bg-black/30 border border-white/5 rounded-xl">
                  <span className="text-xs font-black text-cyan-400 block mb-1">02. Architecture</span>
                  <span className="text-[11px] text-slate-300 font-medium">Schema & UI Design</span>
                </div>
                <div className="p-3 bg-black/30 border border-white/5 rounded-xl">
                  <span className="text-xs font-black text-amber-400 block mb-1">03. Build</span>
                  <span className="text-[11px] text-slate-300 font-medium">C# / SQL / Web Code</span>
                </div>
                <div className="p-3 bg-black/30 border border-white/5 rounded-xl">
                  <span className="text-xs font-black text-emerald-400 block mb-1">04. Analytics</span>
                  <span className="text-[11px] text-slate-300 font-medium">Power BI Integration</span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mb-16 md:mb-24">
            <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">Professional History</h3>
            <div className="relative border-l border-white/10 pl-6 md:pl-8 pb-10 md:pb-12">
              <div className="absolute w-3 h-3 bg-pink-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(236,72,153,0.8)]"></div>
              <span className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-2 block">Present</span>
              <h4 className="text-lg md:text-xl font-bold text-white">IT Intern (Data Analytics)</h4>
              <p className="text-cyan-400 text-sm md:text-base font-medium mb-4">United Tobacco Processing SL</p>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">Building interactive enterprise dashboards using Microsoft Power BI. Managing data cleaning, ETL pipelines, and validation across relational sources to translate business reporting requirements into functional metrics.</p>
            </div>
            <div className="relative border-l border-white/10 pl-6 md:pl-8">
              <div className="absolute w-3 h-3 bg-slate-700 rounded-full -left-[6.5px] top-1.5"></div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 block">2026 (Project)</span>
              <h4 className="text-lg md:text-xl font-bold text-white">Full Stack Developer</h4>
              <p className="text-slate-300 text-sm md:text-base font-medium mb-4">StackNet (Pvt) Ltd</p>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed">Developed ASP.NET WebForms interfaces with C# backends. Structured relational database schemas from scratch and optimized SQL queries for inventory management reporting.</p>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" ref={scrollContainerRef} className="relative h-auto lg:h-[200vh] mb-16 md:mb-24">
            <div className="lg:sticky lg:top-24 z-10 lg:pt-4">
              <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">System Architecture</h3>
              
              <div className="flex flex-col lg:flex-row gap-4 lg:h-[500px] w-full">
                {projects.map((proj, idx) => {
                  const isActive = activeProject === idx;
                  return (
                    <div 
                      key={idx} 
                      onClick={() => setActiveProject(idx)}
                      className={`relative overflow-hidden rounded-3xl transition-all duration-700 ease-in-out cursor-pointer border border-white/10 backdrop-blur-sm
                        ${isActive ? 'w-full lg:w-[60%] flex-1 lg:h-full bg-white/10 shadow-[0_0_30px_rgba(6,182,212,0.15)] min-h-[400px] lg:min-h-0' : 'w-full lg:w-[10%] h-16 lg:h-full bg-white/5 hover:bg-white/10 opacity-80 lg:opacity-60'}
                      `}
                    >
                      <div className={`absolute inset-0 p-4 lg:p-6 flex flex-row lg:flex-col items-center justify-between lg:justify-end transition-opacity duration-300 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <span className="text-white font-bold lg:font-black whitespace-nowrap lg:-rotate-90 lg:mb-20 tracking-wider text-sm lg:text-lg">
                          {proj.title.split(' ')[0]}
                        </span>
                        <FolderGit2 className="text-slate-500 lg:mb-4 shrink-0" size={20} />
                      </div>

                      <div className={`absolute inset-0 p-5 md:p-6 lg:p-8 flex flex-col justify-between transition-opacity duration-700 delay-200 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                        <div>
                          {proj.hasVisual && <FrogGameVisual />}
                          <span className="text-[10px] md:text-xs font-bold text-cyan-400 uppercase tracking-widest block mb-2">{proj.category}</span>
                          <h4 className="text-lg md:text-xl lg:text-2xl font-black text-white mb-2 md:mb-4">{proj.title}</h4>
                          <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">{proj.description}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                            {proj.tech.map((t, i) => (
                              <span key={i} className="text-[10px] md:text-xs font-bold bg-black/40 border border-white/10 text-cyan-300 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a href={proj.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-pink-400 hover:text-pink-300 transition-colors w-max">
                          <GithubIcon className="w-4 h-4 md:w-5 md:h-5" /> View Source <ExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section id="skills" className="mb-16 md:mb-24 relative z-50">
            <h3 className="text-2xl font-black text-white mb-8 md:mb-12 border-b border-white/10 pb-4">Technical Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
              {skills.map((group, idx) => (
                <div key={idx} className="relative group">
                  <div 
                    className="geo-shape absolute inset-0 opacity-40 group-hover:opacity-70 group-hover:scale-105" 
                    style={{ backgroundColor: group.color }}
                  ></div>
                  <div className="relative z-10 h-full bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 lg:p-8 shadow-xl">
                    <h4 className="text-xs md:text-sm font-black text-white uppercase tracking-widest mb-4 md:mb-6 drop-shadow-md">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, i) => (
                        <span key={i} className="px-2 md:px-3 py-1 md:py-1.5 bg-black/60 border border-white/10 rounded-lg text-[10px] md:text-xs font-bold text-white shadow-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}