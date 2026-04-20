"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionAmbient from "@/components/SectionAmbient";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Bot, BrainCircuit, Gauge, Layers3, Rocket, ShieldCheck, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  description: string;
  stack: string[];
  metrics: string;
  link?: string;
};

type Lane = {
  title: string;
  marker: string;
  chipClass: string;
  projects: Project[];
};

const lanes: Lane[] = [
  {
    title: "Education Intelligence",
    marker: "Lane 01",
    chipClass: "!border-[#2d5e8333] !text-[#2d5e83]",
    projects: [
      {
        title: "Horizon AI v2",
        description:
          "Serverless career navigator with role-aware dashboards, RAG-backed learning paths, PDF resume interpretation, and AI tutor workflows.",
        stack: ["React 18", "TypeScript", "Supabase", "PostgreSQL", "FAISS", "RAG"],
        metrics: "10-week adaptive roadmaps and multi-role analytics",
      },
      {
        title: "Horizon AI v1",
        description:
          "SIH 2025 finalist project focused on OCR verification, learner profiling, and biometric-assisted trust for scholarship readiness.",
        stack: ["React", "Node.js", "Supabase", "Gemini", "PaddleOCR", "YuNet"],
        metrics: "Selected from 500+ teams",
        link: "https://horizon-ai-v2.vercel.app/",
      },
    ],
  },
  {
    title: "Health and Lifestyle Systems",
    marker: "Lane 02",
    chipClass: "!border-[#d0675233] !text-[#d06752]",
    projects: [
      {
        title: "Physiq-AI",
        description:
          "Nutrition and fitness platform combining macro coaching, check-ins, and AI guidance across diverse food datasets.",
        stack: ["React 19", "TypeScript", "Firebase", "Gemini", "Recharts"],
        metrics: "12,228 foods and 1000+ exercise references",
        link: "https://physiq-ai.vercel.app/",
      },
      {
        title: "TripScraper.ai",
        description:
          "AI-first itinerary planner balancing budget constraints, travel intent, and route quality through guided multi-step planning.",
        stack: ["React 19", "Supabase", "Gemini 2.5 Flash", "Recharts", "PDF Export"],
        metrics: "Scenario-friendly budget optimization",
      },
    ],
  },
  {
    title: "Verification and Applied AI",
    marker: "Lane 03",
    chipClass: "!border-[#ac7b2f33] !text-[#ac7b2f]",
    projects: [
      {
        title: "Offline Zero-Shot ID Extraction",
        description:
          "Air-gapped extraction pipeline for identity cards using local inference orchestration and confidence scoring.",
        stack: ["Node.js", "Redis", "BullMQ", "FastAPI", "OpenCV", "Ollama"],
        metrics: "Offline-first reliability with queue-based scaling",
      },
      {
        title: "DL Verification System",
        description:
          "Microservice verification architecture with image processing, OCR, and one-command startup for rapid ops alignment.",
        stack: ["Python", "Node.js", "React", "Face API", "Microservices"],
        metrics: "Designed for quick operational rollout",
      },
    ],
  },
];

const highlights = [
  {
    icon: Gauge,
    title: "Performance-Oriented",
    detail: "Lighthouse-aware implementation with practical rendering and payload decisions.",
  },
  {
    icon: Bot,
    title: "AI With Purpose",
    detail: "Automation and intelligence are integrated only where they directly improve outcomes.",
  },
  {
    icon: ShieldCheck,
    title: "Trust by Design",
    detail: "Verification flows and role boundaries are treated as product features, not afterthoughts.",
  },
  {
    icon: BrainCircuit,
    title: "Future-Looking",
    detail: "Current team focus includes neuromorphic systems and edge-intelligence experimentation.",
  },
];

const bootcampAchievement = {
  heading: "AICTE IDE Bootcamp - Certificate of Appreciation",
  summary:
    "Participated in AICTE IDE Bootcamp (Edition 3, Phase 1) at Puttaparthi, Ananthapur, where 72 teams from 10+ states competed. Our team was recognized for one of the best innovative ideas and awarded a Certificate of Appreciation for excellence in idea pitching.",
  keyHighlights: [
    "Recognition among top-performing teams across multiple states",
    "High-impact idea presentation with strong problem-solution alignment",
    "Hands-on exposure to design thinking, innovation, and startup development",
    "Collaboration and competition with diverse teams, including aspiring entrepreneurs",
  ],
  outcomes: [
    "Received the opportunity to develop the idea into a startup initiative",
    "Mentored by Mr. Srikanth Kumar on startup strategy and product direction",
    "Currently building a startup path around the Horizon AI project as a scalable product",
  ],
  learning: [
    "Idea validation and problem identification",
    "Business model development",
    "Effective pitching and communication",
    "Real-world startup ecosystem dynamics",
  ],
};

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".project-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 90, rotateX: 12, filter: "blur(7px)" },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 1.05,
            ease: "power3.out",
            delay: index * 0.04,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".project-lane").forEach((lane, index) => {
        gsap.fromTo(
          lane,
          { x: index % 2 === 0 ? -72 : 72 },
          {
            x: 0,
            ease: "none",
            scrollTrigger: {
              trigger: lane,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={ref} className="site-section overflow-hidden">
      <SectionAmbient />

      <div className="content-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="section-kicker">Selected Missions</p>
          <h2 className="section-title">
            Project command center with <span className="text-[#ac7b2f]">real-world execution</span>
          </h2>
          <p className="section-copy max-w-[67ch]">
            These builds represent my strongest blend of AI capability, interface quality, and product pragmatism across
            education, health, travel, and verification workflows.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-10"
        >
          <article className="project-card map-card map-card-hover p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="max-w-[72ch]">
                <p className="section-kicker !text-[0.64rem]">Achievement Spotlight</p>
                <h3 className="mt-3 text-[clamp(1.45rem,4vw,2.25rem)] leading-tight text-[#12263a]">
                  {bootcampAchievement.heading}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#21405b]/84">{bootcampAchievement.summary}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="chip !border-[#2d5e8333] !text-[#2d5e83]">
                  <Trophy className="h-3.5 w-3.5" aria-hidden="true" />
                  Bootcamp Awardee
                </span>
                <span className="chip !border-[#d0675233] !text-[#d06752]">
                  <Rocket className="h-3.5 w-3.5" aria-hidden="true" />
                  Startup Opportunity
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-[#21405b]/14 bg-white/55 p-5">
                <p className="section-kicker !text-[0.62rem]">Key Highlights</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#21405b]/84">
                  {bootcampAchievement.keyHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#21405b]/14 bg-white/55 p-5">
                <p className="section-kicker !text-[0.62rem]">Outcome and Next Steps</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#21405b]/84">
                  {bootcampAchievement.outcomes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#21405b]/14 bg-white/55 p-5">
                <p className="section-kicker !text-[0.62rem]">Learning Experience</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#21405b]/84">
                  {bootcampAchievement.learning.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#ac7b2f33] bg-[#ac7b2f]/[0.08] p-4 text-sm leading-relaxed text-[#12263a]">
              <p className="font-semibold">Startup Track Update</p>
              <p className="mt-1">
                This bootcamp marked a major shift from idea to venture: the Horizon AI concept is now being shaped as a
                real-world startup initiative with guided mentorship and product scaling direction.
              </p>
            </div>
          </article>

          {lanes.map((lane) => (
            <article key={lane.title} className="project-lane space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="section-kicker !text-[0.64rem]">{lane.marker}</p>
                  <h3 className="mt-2 text-[clamp(1.5rem,3.5vw,2.25rem)] text-[#12263a]">{lane.title}</h3>
                </div>
                <span className={`chip ${lane.chipClass}`}>
                  <Layers3 className="h-3.5 w-3.5" aria-hidden="true" />
                  Open Water Build
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                {lane.projects.map((project) => (
                  <div key={project.title} className="project-card map-card map-card-hover p-6">
                    <h4 className="text-[1.45rem] leading-tight text-[#12263a]">{project.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-[#21405b]/82">{project.description}</p>

                    <div className="mt-4 rounded-2xl border border-[#21405b]/14 bg-white/45 px-4 py-3 text-sm text-[#21405b]/86">
                      {project.metrics}
                    </div>

                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="legend-link mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2d5e83]"
                      >
                        View Live
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : null}

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="chip">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {highlights.map((highlight) => (
              <article key={highlight.title} className="project-card map-card map-card-hover p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#21405b]/18 bg-white/60 text-[#2d5e83]">
                    <highlight.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h4 className="text-xl text-[#12263a]">{highlight.title}</h4>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[#21405b]/82">{highlight.detail}</p>
              </article>
            ))}
          </div>

          <div className="project-card map-card map-card-hover overflow-hidden p-0">
            <div className="border-b border-[#21405b]/14 bg-white/50 px-4 py-3">
              <p className="section-kicker !text-[0.64rem]">Comparative Snapshot</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left">
                <thead>
                  <tr className="border-b border-[#21405b]/10 text-[11px] uppercase tracking-[0.12em] text-[#21405b]/70">
                    <th className="px-4 py-3">Project</th>
                    <th className="px-4 py-3">Domain</th>
                    <th className="px-4 py-3">AI Layer</th>
                    <th className="px-4 py-3">Primary Strength</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Horizon AI v2", "EdTech", "RAG + conversational guidance", "Role-aware learning pathways"],
                    ["Physiq-AI", "Health", "Nutrition intelligence", "Data-rich recommendation loops"],
                    ["TripScraper.ai", "Travel", "Plan generation", "Budget-aware itinerary design"],
                    ["ID Extraction", "Verification", "Offline vision pipeline", "Air-gapped reliability"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-b border-[#21405b]/8 text-sm text-[#21405b]/86">
                      <td className="px-4 py-3 font-semibold text-[#12263a]">{row[0]}</td>
                      <td className="px-4 py-3">{row[1]}</td>
                      <td className="px-4 py-3">{row[2]}</td>
                      <td className="px-4 py-3">{row[3]}</td>
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
