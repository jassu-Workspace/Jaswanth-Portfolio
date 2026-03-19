"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionAmbient from "@/components/SectionAmbient";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const edtechProjects = [
  {
    title: "Horizon AI v2",
    description:
      "Serverless career navigator (React 18/TS, Supabase PostgreSQL, FAISS+RAG). 10-week NSQF roadmaps, weekly quizzes, PDF resume analysis (pdf.js), AI chat, multi-role dashboards (Learner/Trainer/Policymaker), offline dataset pipeline (MASTER_KNOWLEDGE_BASE.csv + vector DB).",
    stack: ["React 18", "TypeScript", "Supabase", "PostgreSQL", "FAISS", "RAG", "pdf.js"],
  },
  {
    title: "Horizon AI v1",
    link: "https://horizon-ai-v2.vercel.app/",
    description:
      "SIH 2025 flagship (React/Node/Supabase/Gemini/PaddleOCR/YuNet). OCR verification, face recognition, learner profiling, gamification, qualified from 500+ teams via Team Portgas D Ace.",
    stack: ["React", "Node.js", "Supabase", "Gemini", "PaddleOCR", "YuNet"],
  },
  {
    title: "Campus-SkillSwap",
    description:
      "React/TS peer-learning app (Gemini 3 Pro). Junior/Senior skill exchange, certificate analysis, role-based dashboards, AI tutoring microservice.",
    stack: ["React", "TypeScript", "Gemini 3 Pro", "Dashboards", "AI Tutoring"],
  },
  {
    title: "Luffy's King of Exams",
    description:
      "One Piece-themed exam generator (FastAPI/Next.js/ChromaDB/Gemini). RAG-powered PDFs with marks, Mermaid/SVG visuals, PostgreSQL history.",
    stack: ["FastAPI", "Next.js", "ChromaDB", "Gemini", "PostgreSQL", "Mermaid", "SVG"],
  },
];

const healthTechProjects = [
  {
    title: "Physiq-AI",
    link: "https://physiq-ai.vercel.app/",
    description:
      "Nutrition/fitness coach (React 19/TS/Tailwind/Vite/Firebase/Gemini). 12,228 foods (5 datasets incl. Indian/Ayurvedic), macro tracking, carb cycling, daily check-ins, 1000+ exercises, AI chat, Recharts progress. Firestore per-user isolation; 88+ Lighthouse.",
    stack: ["React 19", "TypeScript", "Tailwind", "Vite", "Firebase", "Gemini", "Recharts"],
  },
];

const travelTechProjects = [
  {
    title: "TripScraper.ai",
    description:
      "AI travel planner (React 19/Supabase/Gemini 2.5 Flash). Personalized itineraries (leisure/business), budget optimization, Recharts analytics, PDF export, multi-step wizard.",
    stack: ["React 19", "Supabase", "Gemini 2.5 Flash", "Recharts", "PDF Export"],
  },
];

const verificationProjects = [
  {
    title: "Offline Zero-Shot ID Card Extraction",
    description:
      "Local-only pipeline (Node/Redis/BullMQ/FastAPI/OpenCV/Surya/PaddleOCR/Ollama Qwen2.5). JSON output (Name/ID/DOB/confidence), air-gapped model caches.",
    stack: ["Node.js", "Redis", "BullMQ", "FastAPI", "OpenCV", "Surya", "PaddleOCR", "Ollama"],
  },
  {
    title: "DL Verification System",
    description:
      "Microservices (Python Face API/Node/React). Face detection/OCR/verification, one-click PowerShell startup (start-all.ps1).",
    stack: ["Python", "Face API", "Node.js", "React", "Microservices", "PowerShell"],
  },
];

const comparisonRows = [
  {
    project: "Horizon AI v2",
    highlights: "React 18 / Supabase / FAISS",
    ai: "PostgreSQL, RAG+CSV",
    scale: "Dynamic courses",
    innovation: "Multi-role NSQF dashboards",
  },
  {
    project: "Horizon AI v1",
    highlights: "React / Node / Gemini / PaddleOCR",
    ai: "Supabase",
    scale: "NSQF quals",
    innovation: "Face/OCR verification",
  },
  {
    project: "Physiq-AI",
    highlights: "React 19 / Firebase / Gemini",
    ai: "Firestore",
    scale: "12K foods",
    innovation: "Carb cycling engine",
  },
  {
    project: "Campus-SkillSwap",
    highlights: "React / TS / Gemini 3",
    ai: "N/A",
    scale: "Cert analysis",
    innovation: "Peer skill exchange",
  },
  {
    project: "TripScraper.ai",
    highlights: "React 19 / Supabase / Gemini",
    ai: "Supabase",
    scale: "Travel sims",
    innovation: "Budget downgrading",
  },
  {
    project: "Luffy's King of Exams",
    highlights: "FastAPI / Next.js / ChromaDB",
    ai: "PostgreSQL",
    scale: "RAG quizzes",
    innovation: "Programmatic visuals",
  },
  {
    project: "ID Extraction",
    highlights: "Node / FastAPI / Ollama",
    ai: "Redis queue",
    scale: "Local models",
    innovation: "Zero-shot confidence",
  },
  {
    project: "DL Verification",
    highlights: "Python / Node / React",
    ai: "N/A",
    scale: "Microservices",
    innovation: "One-click startup",
  },
];

const achievements = [
  "SIH 2025 Finalist — Horizon AI selected from 500+ teams",
  "Built cross-domain AI systems across EdTech, HealthTech, TravelTech, and Document AI",
  "Shipped RAG + vector search pipelines with production-style dashboards and analytics",
  "Strong full-stack execution with React 19, Supabase/Firebase, and AI integrations",
];

const neuromorphicProject = {
  title: "Current Team Mega Project — Neuromorphic Computing & Engineering",
  summary:
    "We are building in the cutting-edge neuromorphic domain using brain-inspired event-driven systems, spiking neural networks (SNNs), and ultra-low-power edge intelligence.",
  hardware: [
    "Intel Loihi / Loihi 2",
    "IBM TrueNorth / NorthPole",
    "SpiNNaker / SpiNNaker 2",
    "BrainScaleS-2",
    "Akida, Pulsar T1, GrAI VIP edge chips",
  ],
  software: ["Lava", "Nengo", "SpikingJelly", "NIR"],
  focus: [
    "Continual learning and optimization on neuromorphic hardware",
    "Real-world robotics, sensor fusion, and always-on edge AI",
    "Brain implant and biohybrid low-power interfaces",
    "NeuroBench-driven benchmarking across speed/energy/accuracy",
  ],
};

function SectionBlock({
  title,
  accentClass,
  projects,
}: {
  title: string;
  accentClass: string;
  projects: { title: string; description: string; stack: string[]; link?: string }[];
}) {
  return (
    <div className="space-y-5">
      <h3 className={`text-2xl font-black tracking-wide ${accentClass}`}>
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <div
            key={project.title}
            className="sector-border depth-card project-3d-card p-6 rounded-lg flex flex-col gap-4 hover:border-[#00d0ff]/30 transition-all"
          >
            <h4 className="text-xl font-black tracking-tight text-white">{project.title}</h4>
            <p className="text-sm text-gray-300 leading-relaxed">{project.description}</p>
            {project.link ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-[#00d0ff] hover:text-[#f5c842] transition-colors"
              >
                Visit Live Project ↗
              </a>
            ) : null}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[#00d0ff]/5 border border-[#00d0ff]/15 text-[#00d0ff]/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-3d-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80, rotateX: 14, z: -160 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            z: 0,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.04,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden min-h-screen py-24 px-6 md:px-16 lg:px-24 bg-[#0a191f]">
      <SectionAmbient />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#f5c842]/10 text-[#f5c842] text-xs font-bold rounded-full mb-4 border border-[#f5c842]/20 tracking-widest uppercase">
            Mission Logs
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            Project <span className="text-[#f5c842]">Command Center</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Consolidated project portfolio across EdTech, HealthTech, TravelTech, and Document AI verification systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-12 perspective-stage"
        >
          <SectionBlock title="EdTech Projects" accentClass="text-[#f5c842]" projects={edtechProjects} />
          <SectionBlock title="HealthTech Project" accentClass="text-[#22c55e]" projects={healthTechProjects} />
          <SectionBlock title="TravelTech Project" accentClass="text-[#a855f7]" projects={travelTechProjects} />
          <SectionBlock title="Document AI & Verification" accentClass="text-[#00d0ff]" projects={verificationProjects} />

          <div className="space-y-5">
            <h3 className="text-2xl font-black tracking-wide text-[#f5c842]">Highlighted Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="glass-card depth-card project-3d-card rounded-lg p-5 border border-[#f5c842]/20 text-sm text-gray-200 leading-relaxed"
                >
                  ⭐ {achievement}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl font-black tracking-wide text-[#00d0ff]">Biggest Ongoing Team Project</h3>
            <div className="sector-border depth-card project-3d-card rounded-lg p-6 space-y-6">
              <div>
                <h4 className="text-xl md:text-2xl font-black text-white mb-3">{neuromorphicProject.title}</h4>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">{neuromorphicProject.summary}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-card depth-card project-3d-card rounded-lg p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-widest text-[#f5c842] mb-2">Hardware</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {neuromorphicProject.hardware.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card depth-card project-3d-card rounded-lg p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-widest text-[#a855f7] mb-2">Software Ecosystem</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {neuromorphicProject.software.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card depth-card project-3d-card rounded-lg p-4 border border-white/10">
                  <p className="text-xs uppercase tracking-widest text-[#00d0ff] mb-2">Applied Focus</p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {neuromorphicProject.focus.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="text-2xl font-black tracking-wide text-[#00d0ff]">All Projects Comparison Table</h3>
            <div className="sector-border depth-card project-3d-card rounded-lg overflow-x-auto">
              <table className="w-full min-w-[900px] text-left">
                <thead>
                  <tr className="border-b border-[#00d0ff]/20 bg-[#00d0ff]/5">
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-[#00d0ff]">Project</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-[#00d0ff]">Tech Highlights</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-[#00d0ff]">Database / AI</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-[#00d0ff]">Scale / Datasets</th>
                    <th className="px-4 py-3 text-xs uppercase tracking-wider text-[#00d0ff]">Unique Innovation</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.project} className="border-b border-white/5 align-top">
                      <td className="px-4 py-3 text-sm font-semibold text-white">{row.project}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{row.highlights}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{row.ai}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{row.scale}</td>
                      <td className="px-4 py-3 text-sm text-gray-300">{row.innovation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
