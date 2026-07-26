import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  FolderGit2, 
  User, 
  Menu, 
  X
} from 'lucide-react';

// ==========================================
// ⚙️ EASY CONFIGURATION: CHANGE NAMES & LINKS HERE
// ==========================================
const MY_INFO = {
  name: "Themiya Abeyrathna",
  email: "dgthemiya@gmail.com",
  typingText: "Data Analytics Developer",
  github: "https://github.com/ThemiyaD79",
  linkedin: "https://www.linkedin.com/in/themiya-abeyrathna/",
  upwork: "https://www.upwork.com/freelancers/~0128009e5efd42f084?mp_source=share"
};

// --- CUSTOM SVG ICONS ---
const GithubIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const UpworkIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.48 6.06c-2.09 0-3.69 1.2-4.24 3.01v-3H10.4v7.7c0 1.93-1.57 3.51-3.51 3.51S3.39 15.7 3.39 13.78V6.07H.54v7.71c0 3.51 2.85 6.36 6.36 6.36s6.36-2.85 6.36-6.36v-1.85a4.84 4.84 0 003.1 1.05c2.97 0 5.39-2.42 5.39-5.39s-2.43-5.4-4.27-5.4zm0 8.08c-1.49 0-2.69-1.21-2.69-2.7s1.2-2.7 2.69-2.7 2.69 1.21 2.69 2.7-1.2 2.69-2.69 2.7z"/>
  </svg>
);

// --- MOBILE-OPTIMIZED INTERACTIVE CARD ---
const InteractiveCard = ({ children }) => {
  return (
    <div className="group relative rounded-[2rem] bg-white/50 backdrop-blur-xl border border-white/80 p-6 md:p-8 transition-all duration-500 ease-out hover:bg-white/70 hover:scale-[1.02] hover:shadow-[0_20px_40px_-15px_rgba(236,72,153,0.3)] hover:border-pink-300 shadow-sm cursor-pointer overflow-hidden z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 to-sky-200/20 opacity-30 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < MY_INFO.typingText.length) {
        setTypedText(MY_INFO.typingText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  const projects = [
    {
      title: "Amarasinghe Hardware Management System",
      category: "Desktop & Business Intelligence",
      description: "Automated Point-of-Sale & inventory platform designed from operational workflows. Features a custom Power BI reporting module for debtor settlements and FIFO stock aging analytics.",
      tech: ["C#", "WPF", "SQL Server", "Power BI", "Jira"],
      github: "https://github.com/ThemiyaD79/Amarasingahe-Hardwear-Management-system"
    },
    {
      title: "KMC Event Management Platform",
      category: "Web & RESTful API",
      description: "Service-oriented event management platform built for Kandy Municipal Council. Supports city event CRUD operations, public search, and registration workflows.",
      tech: ["ASP.NET Web API", "ASP.NET WebForms", "C#", "SQL"],
      github: "https://github.com/ThemiyaD79/KMC-EventHub"
    },
    {
      title: "Medicare Plus Hospital System",
      category: "Full Stack Web Application",
      description: "Web application featuring secure session management and role-based access architecture tailored for Admin, Doctor, and Patient interactions.",
      tech: ["PHP", "MySQL", "Apache", "JavaScript"],
      github: "https://github.com/ThemiyaD79/Hospital-Management-System"
    },
    {
      title: "Online Book Shop",
      category: "E-Commerce Web Application",
      description: "Interactive online platform enabling digital book catalog browsing, dynamic search, cart management, and order placement workflows.",
      tech: ["PHP", "JavaScript", "MySQL", "HTML5/CSS3"],
      github: "https://github.com/ThemiyaD79/Book_Shop"
    },
    {
      title: "Frog_Ex Interactive Game",
      category: "Game Development",
      description: "Interactive logic application focusing on object-oriented programming concepts, game physics, and user input handling.",
      tech: ["Java", "OOP Design", "UI Logic"],
      github: "https://github.com/ThemiyaD79/Frog_ex"
    }
  ];

  const skills = [
    { category: "Languages & Frameworks", items: ["React", "Flask", "C#", "ASP.NET Web API", "Python", "Java", "PHP", "JavaScript"] },
    { category: "Data & Databases", items: ["Power BI", "SQL Server", "MySQL", "ETL Pipelines", "Data Analytics"] },
    { category: "Tools & Methodologies", items: ["Git", "GitHub", "Jira", "ClickUp", "Figma", "Agile/Scrum"] }
  ];

  return (
    <div className="relative min-h-screen font-sans selection:bg-pink-200 selection:text-pink-900 bg-slate-50 overflow-x-hidden">
      
      {/* --- FIXED MOBILE BACKGROUND ORBS --- */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-pink-300/40 rounded-full mix-blend-multiply blur-[80px] md:blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-sky-300/50 rounded-full mix-blend-multiply blur-[80px] md:blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-indigo-200/40 rounded-full mix-blend-multiply blur-[80px] md:blur-[120px] animate-[pulse_12s_ease-in-out_infinite]"></div>
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-2xl border-b border-white/50 px-6 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center relative z-10">
          <a href="#hero" className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-sky-600 via-indigo-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
            {MY_INFO.name}
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-700">
            <a href="#about" className="hover:text-pink-500 hover:-translate-y-0.5 transition-all">About</a>
            <a href="#experience" className="hover:text-pink-500 hover:-translate-y-0.5 transition-all">Experience</a>
            <a href="#projects" className="hover:text-pink-500 hover:-translate-y-0.5 transition-all">Projects</a>
            <a href="#skills" className="hover:text-pink-500 hover:-translate-y-0.5 transition-all">Skills</a>
            <a href="#contact" className="px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:-translate-y-1 transition-all duration-300">
              Get in Touch
            </a>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/70 backdrop-blur-md text-slate-700 hover:bg-white transition-all shadow-sm"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/40 flex flex-col gap-4 text-center font-bold bg-white/60 backdrop-blur-xl rounded-b-2xl pb-6 shadow-xl">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-pink-500">About</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-pink-500">Experience</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-pink-500">Projects</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-pink-500">Skills</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 text-pink-500">Contact</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 max-w-6xl mx-auto flex flex-col items-start justify-center min-h-[85vh] relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md text-xs font-bold text-slate-700 mb-6 md:mb-8 border border-white/80 shadow-sm cursor-default">
          <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse"></span>
          Available for Freelance & Collaborative Projects
        </div>
        
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
          Software Engineer & <br />
          <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
            {typedText}<span className="animate-ping">|</span>
          </span>
        </h1>
        
        <p className="text-base md:text-xl text-slate-600 max-w-2xl mb-8 md:mb-10 leading-relaxed font-medium">
          Building end-to-end digital solutions, relational database ecosystems, and interactive Power BI dashboards. Transforming operational workflows into clean, high-impact software.
        </p>

        <div className="flex flex-wrap gap-4 items-center w-full md:w-auto">
          <a 
            href="#projects" 
            className="w-full md:w-auto text-center px-8 py-4 rounded-2xl bg-slate-900 hover:bg-pink-500 text-white font-bold shadow-xl hover:shadow-pink-500/30 transition-all duration-300 md:hover:-translate-y-1"
          >
            Explore Projects
          </a>
          
          <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start md:ml-4 mt-4 md:mt-0">
            <a 
              href={MY_INFO.github} 
              target="_blank" 
              rel="noreferrer"
              className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 text-slate-700 hover:bg-slate-900 hover:text-white md:hover:scale-110 md:hover:-translate-y-1 transition-all shadow-sm"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a 
              href={MY_INFO.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 text-slate-700 hover:bg-[#0A66C2] hover:text-white md:hover:scale-110 md:hover:-translate-y-1 transition-all shadow-sm"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            {/* NEW UPWORK HEADER BUTTON */}
            <a 
              href={MY_INFO.upwork} 
              target="_blank" 
              rel="noreferrer"
              className="p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/80 text-slate-700 hover:bg-[#14A800] hover:text-white md:hover:scale-110 md:hover:-translate-y-1 transition-all shadow-sm"
            >
              <UpworkIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 md:py-24 px-6 max-w-6xl mx-auto relative z-10">
        <InteractiveCard>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm uppercase tracking-wider mb-4">
              <User size={18} /> About Me
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-snug">
              Engineering functional solutions with data-driven precision.
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-4">
              I hold a Higher Diploma in Computing & Software Engineering from Cardiff Metropolitan University (ICBT Campus). My work spans software development, database administration, and business analytics.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Whether analyzing manual operational workflows, constructing C# and ASP.NET backends, or crafting interactive visual dashboards in Power BI and React, my focus is delivering secure, clear, and scalable applications.
            </p>
          </div>
        </InteractiveCard>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-16 md:py-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm uppercase tracking-wider mb-4">
          <Briefcase size={18} /> Work History
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 md:mb-12">Professional Experience</h2>

        <div className="grid gap-6 md:gap-8">
          <InteractiveCard>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">Information Technology Intern (Data Analytics)</h3>
                <p className="text-sky-600 font-bold text-base md:text-lg mt-1">United Tobacco Processing SL (UTP SL)</p>
              </div>
              <span className="px-4 py-2 rounded-full text-xs md:text-sm font-bold bg-pink-100 text-pink-700 border border-pink-200 self-start md:self-auto shadow-sm">
                Present / Ongoing
              </span>
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-2 md:space-y-3 text-base md:text-lg">
              <li>Building interactive enterprise dashboards using Microsoft Power BI to deliver operational insights.</li>
              <li>Managing data cleaning, ETL pipelines, and data validation across relational sources.</li>
              <li>Translating business reporting requirements into functional data metrics and process flows.</li>
            </ul>
          </InteractiveCard>

          <InteractiveCard>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900">Freelance Full Stack Developer & Database Engineer</h3>
                <p className="text-sky-600 font-bold text-base md:text-lg mt-1">StackNet (Pvt) Ltd</p>
              </div>
              <span className="text-xs md:text-sm font-bold text-slate-500 bg-white/60 px-4 py-2 rounded-full border border-white/80 self-start md:self-auto shadow-sm">
                Project-Based (2026)
              </span>
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-2 md:space-y-3 text-base md:text-lg">
              <li>Developed responsive ASP.NET WebForms interfaces with C# backends for inventory management modules.</li>
              <li>Structured relational database schemas from scratch, optimizing SQL queries for reporting.</li>
              <li>Managed technical requirement backlog and sprint deliverables through Jira.</li>
            </ul>
          </InteractiveCard>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-16 md:py-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm uppercase tracking-wider mb-4">
          <FolderGit2 size={18} /> Selected Work
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 md:mb-12">GitHub Repositories & Solutions</h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((proj, idx) => (
            <InteractiveCard key={idx}>
              <div className="flex flex-col h-full justify-between">
                <div>
                  <span className="text-xs md:text-sm font-black uppercase tracking-wider text-pink-500 mb-3 block">{proj.category}</span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-4">{proj.title}</h3>
                  <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed">{proj.description}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-xs md:text-sm px-3 py-1.5 rounded-lg bg-white/70 text-slate-800 border border-white/80 font-bold shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-bold text-sky-600 hover:text-pink-500 transition-colors group/link"
                  >
                    <GithubIcon className="w-5 h-5 md:group-hover/link:scale-110 transition-transform" /> 
                    View Code on GitHub 
                    <ExternalLink size={16} className="md:group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </InteractiveCard>
          ))}
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-16 md:py-24 px-6 max-w-6xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 text-pink-500 font-bold text-sm uppercase tracking-wider mb-4">
          <Code2 size={18} /> Tech Stack
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 md:mb-12">Skills & Competencies</h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {skills.map((group, idx) => (
            <InteractiveCard key={idx}>
              <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mb-5 pb-4 border-b border-white/60">{group.category}</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {group.items.map((item, i) => (
                  <span key={i} className="px-3 md:px-4 py-2 rounded-xl bg-white/70 text-xs md:text-sm font-bold text-slate-800 border border-white/80 shadow-sm md:hover:scale-110 md:hover:bg-pink-100 hover:text-pink-700 transition-all cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </InteractiveCard>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 md:py-24 px-6 max-w-6xl mx-auto relative z-10">
        <InteractiveCard>
          <div className="text-center py-4 md:py-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 md:mb-6">Let's Work Together</h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10">
              Whether you are looking to build a desktop management system, clean complex data structures, or develop responsive web platforms, let's connect!
            </p>

            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6">
              <a 
                href={`mailto:${MY_INFO.email}`} 
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-pink-500 hover:from-sky-400 hover:to-pink-400 text-white font-bold shadow-xl hover:shadow-pink-500/40 transition-all md:hover:-translate-y-1 md:hover:scale-105"
              >
                <Mail size={20} /> {MY_INFO.email}
              </a>
              <a 
                href={MY_INFO.linkedin}
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 text-slate-900 font-bold transition-all hover:bg-white hover:text-[#0A66C2] md:hover:-translate-y-1 md:hover:scale-105 shadow-sm hover:shadow-lg"
              >
                <LinkedinIcon className="w-5 h-5" /> Connect on LinkedIn
              </a>
              {/* NEW UPWORK FOOTER BUTTON */}
              <a 
                href={MY_INFO.upwork}
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 text-slate-900 font-bold transition-all hover:bg-white hover:text-[#14A800] md:hover:-translate-y-1 md:hover:scale-105 shadow-sm hover:shadow-lg"
              >
                <UpworkIcon className="w-5 h-5" /> Hire on Upwork
              </a>
            </div>
          </div>
        </InteractiveCard>
      </section>

      {/* FOOTER */}
      <footer className="py-8 md:py-10 text-center text-xs md:text-sm font-bold text-slate-500 border-t border-slate-300/30 relative z-10 bg-slate-50/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} {MY_INFO.name}. Built with React & Tailwind CSS.</p>
      </footer>

    </div>
  );
}