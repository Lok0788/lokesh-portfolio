import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { FileText, Linkedin, Github, Instagram, Mail } from "lucide-react";

// ---------- PROFILE DATA ----------
const PROFILE = {
  name: "Lokeshraja Balaji",
  title: "Software Developer | IT Graduate, SASTRA University",
  bio: "I build clean, production-ready web applications and reliable machine learning solutions. I focus on user-first design, maintainable code, and performance.",
  skills: [
    "Java", "Python", "MySQL", "JavaScript", "MongoDB",
    "Mongoose", "Node.js", "Express", "PHP", "React",
    "Numpy", "Pandas", "Matplotlib", "TensorFlow"
  ],
  certifications: [
    { title: "Java Foundations Professional Certificate", issuer: "JetBrains", skills: ["OOP", "Data Structures", "Java"] },
    { title: "Pandas Essential Training", issuer: "LinkedIn", skills: ["Pandas"] },
    { title: "Data Science with Python", issuer: "Simplilearn", skills: ["Data Visualization", "Data Analysis", "Statistics"] },
    { title: "SQL Essential Training", issuer: "LinkedIn", skills: ["SQL"] },
  ],
  projects: [
    {
      id: 1,
      dateRange: "08/01/2025 – 08/05/2025",
      title: "Heart Disease Prediction using Ensemble Learning",
      description: "High-performance heart disease prediction model using MLP, CNN, BiLSTM with advanced feature selection."
    },
    {
      id: 2,
      dateRange: "12/01/2024 – 16/04/2024",
      title: "Image Steganography with Bald Eagle Optimization",
      description: "Developed a secure image steganography system embedding sensitive information within images using optimization."
    },
    {
      id: 3,
      dateRange: "13/05/2025 – 10/06/2025",
      title: "Attendance & Salary Management System",
      description: "Desktop app (Java + MySQL) automating attendance, salary calculation and HR reporting with Swing GUI."
    },
  ],
  research: {
    title: "Harris Hawks Optimization based Deep Learning Models for Heart Disease Diagnosis",
    status: "In Progress",
  },
  github: "https://github.com/Lok0788?tab=repositories",
  linkedin: "https://www.linkedin.com/in/lokeshraja-b-624b7b259/",
  instagram: "https://www.instagram.com/_.lokeshraja._?igsh=d3hmYnlmMHJ3YWIy",
  email: "premalok2003@gmail.com",
  location: "Trichy, India",
};

// ---------- CSS INJECTION ----------
const STYLES = `
:root{
  --bg-light: #e0f2ff; /* Soft light-blue */
  --bg-dark: #0a0f25;
  --card-light: rgba(255,255,255,0.85);
  --card-dark: rgba(10,15,25,0.7);
  --muted-light: #1e3a8a;
  --muted-dark: #cbd5e1;
  --accent-gradient: linear-gradient(90deg,#6366f1,#a855f7);
  --link-hover-light: #3b82f6;
  --link-hover-dark: #00ffff;
}

*{box-sizing:border-box}
html,body,#root{height:100%;}
body{
  margin:0;
  font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial;
  background:var(--bg-light);
  color:var(--muted-light);
  transition:background .35s,color .35s
}
body.dark{background:var(--bg-dark); color:var(--muted-dark);}
.container{max-width:1100px;margin:0 auto;padding:28px}
.header{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:14px 0;flex-wrap:wrap}
.brand{display:flex;flex-direction:column}
.brand .name{font-weight:700;font-size:1.05rem}
.brand .title{font-size:0.78rem;color:var(--muted-light)}
.right-actions{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px}
.icon-btn{display:inline-flex;align-items:center;justify-content:center;padding:8px;border-radius:8px;border:1px solid transparent;background:transparent;cursor:pointer}
.icon-btn:hover{transform:translateY(-2px)}
.resume-btn{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:10px;background-image:var(--accent-gradient);color:white;border:none;font-weight:600}
.hero{display:grid;grid-template-columns:1fr 380px;gap:28px;align-items:center;margin-top:28px}
@media(max-width:880px){.hero{grid-template-columns:1fr;}.hero-left,.card{width:100%;}}
.card{padding:20px;border-radius:14px;backdrop-filter:blur(6px);border:1px solid rgba(255,255,255,0.6);background:var(--card-light);box-shadow:0 8px 24px rgba(30,58,138,0.1);}
body.dark .card{background:var(--card-dark);border:1px solid rgba(255,255,255,0.06);}
.hero-left h1{font-size:2rem;margin:0}
.hero-left p{margin-top:12px;color:var(--muted-light);max-width:64ch}
.cta-row{margin-top:18px;display:flex;gap:10px;flex-wrap:wrap}
.cta{padding:10px 14px;border-radius:10px;border:1px solid rgba(15,23,42,0.06);background:transparent;cursor:pointer;transition:0.2s}
.cta:hover{color:var(--link-hover-light); border-color:var(--link-hover-light);}
.skill-pill{display:inline-block;padding:6px 10px;border-radius:999px;margin:6px 6px 0 0;background:rgba(255,255,255,0.7);font-size:0.86rem;border:1px solid rgba(15,23,42,0.04);color:var(--muted-light);}
body.dark .skill-pill{background:rgba(255,255,255,0.06);border-color:rgba(255,255,255,0.06);color:var(--muted-dark);}
.avatar{width:160px;height:160px;border-radius:50%;box-shadow:0 0 25px rgba(79, 70, 229, 0.4);border:3px solid rgba(255,255,255,0.3);overflow:hidden;}
.bulb-glow{position:fixed;top:0;left:50%;width:400px;height:400px;background:radial-gradient(circle, rgba(255,244,163,0.45) 0%, transparent 70%);transform:translateX(-50%);pointer-events:none;transition:opacity 0.6s ease;z-index:0;}
body.dark .bulb-glow{opacity:0;}
body:not(.dark) .bulb-glow{opacity:1;}
.meta-links{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}
.section{margin-top:40px}
.section h2{font-size:1.5rem;margin-bottom:18px}
.projects .project{margin-bottom:16px;padding:18px;border-radius:12px;background:var(--card-light);border:1px solid rgba(15,23,42,0.04);}
body.dark .projects .project{background:var(--card-dark);}
.project .meta{color:var(--muted-light);font-size:0.86rem;}
.cert-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px}
.music-box{text-align:center}
.contact-row{display:flex;flex-direction:column;gap:10px}
.footer{margin-top:40px;padding:18px;text-align:center;color:var(--muted-light);font-size:0.9rem}
.row{display:flex;gap:12px;align-items:center}
.link{color:inherit;text-decoration:none;transition:0.2s;}
.link:hover{color:var(--link-hover-light);}
`;

// ---------- Hooks ----------
function useInjectStyles() {
  useEffect(() => {
    if (document.getElementById("lokesh-portfolio-styles")) return;
    const s = document.createElement("style");
    s.id = "lokesh-portfolio-styles";
    s.innerHTML = STYLES;
    document.head.appendChild(s);
  }, []);
}

function useDarkMode() {
  const [dark, setDark] = useState(() => {
    try { return JSON.parse(localStorage.getItem("lokesh-dark")) || true } catch { return true }
  });
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
    localStorage.setItem("lokesh-dark", JSON.stringify(dark));
  }, [dark]);
  return [dark, setDark];
}

function IconLink({ href, children, title }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="link">
      <div className="icon-btn" title={title}>{children}</div>
    </a>
  );
}

// ---------- Main App ----------
export default function App() {
  useInjectStyles();
  const [dark, setDark] = useDarkMode();

  return (
    <div className="container">
      <div className="bulb-glow"></div>

      <header className="header">
        <div className="brand">
          <div className="name">{PROFILE.name}</div>
          <div className="title">{PROFILE.title}</div>
        </div>

        <div className="right-actions">
          <IconLink href={PROFILE.github} title="GitHub"><Github size={18} /></IconLink>
          <IconLink href={PROFILE.linkedin} title="LinkedIn"><Linkedin size={18} /></IconLink>
          <IconLink href={PROFILE.instagram} title="Instagram"><Instagram size={18} /></IconLink>
          <a
  href={`${process.env.PUBLIC_URL}/resume.pdf`}
  className="resume-btn"
  download="Lokeshraja_Resume.pdf"
>
  <FileText size={16} /> Resume
</a>

          <motion.button
            onClick={() => setDark(d => !d)}
            className="icon-btn bulb-toggle"
            title="Toggle light"
            animate={{ rotate: dark ? 180 : 0, scale: dark ? 1 : 1.1 }}
            transition={{ type: "spring", stiffness: 150, damping: 10 }}
          >
            <Lightbulb
              size={22}
              color={dark ? "#ccc" : "#facc15"}
              fill={dark ? "none" : "#facc15"}
              style={{ filter: dark ? "none" : "drop-shadow(0 0 12px #facc15)" }}
            />
          </motion.button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <motion.div className="hero-left" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1>{PROFILE.name}</h1>
            <p>{PROFILE.bio}</p>

            <div className="cta-row">
              <a className="cta" href="#projects">Projects</a>
              <a className="cta" href={PROFILE.linkedin + '/details/certifications/'} target="_blank" rel="noreferrer">Certifications</a>
              <a className="cta" href={PROFILE.instagram} target="_blank" rel="noreferrer">Instagram</a>
            </div>

            <div style={{ marginTop: 18 }}>
              <h4 style={{ fontSize: 12, color: 'var(--muted-light)', textTransform: 'uppercase', letterSpacing: 1 }}>Top skills</h4>
              <div style={{ marginTop: 12 }}>
                {PROFILE.skills.map((s, i) => <motion.span key={i} whileHover={{ scale: 1.04 }} className="skill-pill">{s}</motion.span>)}
              </div>
            </div>
          </motion.div>

          <motion.div className="card" initial={{ opacity: 0, scale: 0.99 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="avatar">
                <img
  src={process.env.PUBLIC_URL + '/profile.jpg'}
  alt="Lokeshraja Balaji"
  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
/>

              </div>

              <div style={{ marginTop: 14, textAlign: 'center' }}>
                <div style={{ fontWeight: 600 }}>Software Developer • Vocalist</div>
                <div style={{ color: 'var(--muted-light)', marginTop: 6, fontSize: 13 }}>Based in {PROFILE.location} • Open to opportunities</div>
                <div className="meta-links">
                  <a className="cta" href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a className="cta" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section className="section projects" id="projects">
          <h2>Projects</h2>
          {PROFILE.projects.map(p => (
            <motion.div key={p.id} className="project" initial={{ opacity: 0, y: 8 }} whileHover={{ scale: 1.01 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <div className="row" style={{ justifyContent: 'space-between' }}><div className="meta">{p.dateRange}</div></div>
              <h3 style={{ marginTop: 8, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ color: 'var(--muted-light)' }}>{p.description}</p>
            </motion.div>
          ))}
          <div style={{ marginTop: 12 }}><a href={PROFILE.github} target="_blank" rel="noreferrer" className="link">More projects on GitHub</a></div>
        </section>

        {/* Research */}
        <section className="section" id="research">
          <h2>Research in Progress</h2>
          <motion.div className="card" initial={{ opacity: 0, y: 8 }} whileHover={{ scale: 1.01 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <div className="meta">Status: {PROFILE.research.status}</div>
            <h3 style={{ marginTop: 8 }}>{PROFILE.research.title}</h3>
          </motion.div>
        </section>

        {/* Certifications */}
        <section className="section" id="certifications">
          <h2>Certifications</h2>
          <div className="cert-grid">
            {PROFILE.certifications.map((c,i)=>(
              <motion.div key={i} className="card" initial={{ opacity:0, y:6 }} whileHover={{ scale:1.02 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4 }}>
                <div style={{ fontWeight:700 }}>{c.title}</div>
                <div style={{ color:'var(--muted-light)', marginTop:6 }}>{c.issuer}</div>
                <div style={{ marginTop:8, color:'var(--muted-light)' }}>Skills: {c.skills.join(', ')}</div>
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: 12 }}><a href={PROFILE.linkedin + '/details/certifications/'} target="_blank" rel="noreferrer" className="link">View all certifications</a></div>
        </section>

        {/* Music */}
        <section className="section music" id="music">
          <h2>Music & Creative</h2>
          <div className="card music-box">
            <p style={{ marginBottom: 12 }}>I post vocal covers and creative work on Instagram — check them out for my musical side.</p>
            <a className="resume-btn" href={PROFILE.instagram} target="_blank" rel="noreferrer">Visit Instagram</a>
          </div>
        </section>

        {/* Contact */}
        <section className="section" id="contact">
          <h2>Contact</h2>
          <div className="card contact-row">
            <div className="row"><Mail size={18}/> <a className="link" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
            <div className="row"><Linkedin size={18}/> <a className="link" href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a></div>
          </div>
        </section>

        <footer className="footer">© {new Date().getFullYear()} {PROFILE.name} — Built with React & ❤</footer>
      </main>
    </div>
  );
}

// ---------- Bootstrap ----------
if (typeof document !== 'undefined' && document.getElementById('root')) {
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
}
