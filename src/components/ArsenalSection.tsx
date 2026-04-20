"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionAmbient from "@/components/SectionAmbient";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  Radar,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const techCategories = [
  {
    id: "Deck 01",
    title: "Core Engineering",
    summary: "Modern front-end and back-end foundations for reliable product delivery.",
    icon: Code2,
    items: ["TypeScript", "React 19", "Next.js", "Node.js", "Python", "SQL"],
    iconClass: "text-[#2d5e83]",
  },
  {
    id: "Deck 02",
    title: "AI Intelligence",
    summary: "Practical AI systems for tutoring, recommendation, and document understanding.",
    icon: BrainCircuit,
    items: [
      "Gemini / DeepSeek",
      "Ollama Local",
      "RAG Pipelines",
      "FAISS / ChromaDB",
      "Computer Vision",
      "Prompt Orchestration",
    ],
    iconClass: "text-[#d06752]",
  },
  {
    id: "Deck 03",
    title: "Data and Platform",
    summary: "Scalable services, storage layers, and observability to support growth.",
    icon: Database,
    items: ["Supabase", "Firebase", "PostgreSQL", "Redis", "BullMQ", "Vector Stores"],
    iconClass: "text-[#ac7b2f]",
  },
  {
    id: "Deck 04",
    title: "Execution Discipline",
    summary: "From deployment to iteration with security and quality built in.",
    icon: Workflow,
    items: ["CI/CD", "Vercel / Render", "Version Control", "Testing Mindset", "Role-based Access", "API Security"],
    iconClass: "text-[#3f769d]",
  },
];

export default function ArsenalSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".arsenal-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80, rotateX: 10, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.95,
            ease: "power3.out",
            delay: index * 0.06,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });

      gsap.to(".arsenal-current-line", {
        xPercent: -22,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="arsenal" ref={ref} className="site-section overflow-hidden">
      <SectionAmbient />

      <div className="arsenal-current-line absolute left-0 right-0 top-20 z-0 hidden -translate-x-[12%] whitespace-nowrap text-[clamp(2rem,6vw,5rem)] font-semibold uppercase tracking-[0.18em] text-[#21405b]/8 md:block">
        OPEN SEA EXECUTION OPEN SEA EXECUTION OPEN SEA EXECUTION
      </div>

      <div className="content-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
        >
          <div>
            <p className="section-kicker">Capability Map</p>
            <h2 className="section-title">
              Tactical stack for <span className="text-[#2d5e83]">complex product waters</span>
            </h2>
            <p className="section-copy max-w-[62ch]">
              My toolkit balances velocity and robustness: rapid prototyping when needed, clean foundations when it
              matters, and architecture decisions that keep scaling sane.
            </p>
          </div>

          <div className="map-card map-card-hover h-fit p-6">
            <p className="section-kicker">Ops Snapshot</p>
            <ul className="mt-4 space-y-3 text-sm text-[#21405b]/82">
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-[#2d5e83]" aria-hidden="true" />
                Product-first implementation with security awareness
              </li>
              <li className="flex items-start gap-3">
                <CloudCog className="mt-0.5 h-4 w-4 text-[#2d5e83]" aria-hidden="true" />
                Cloud-native delivery and streamlined deploy flows
              </li>
              <li className="flex items-start gap-3">
                <Radar className="mt-0.5 h-4 w-4 text-[#2d5e83]" aria-hidden="true" />
                Continuous iteration through measurable feedback loops
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip">Grand Current Ready</span>
              <span className="chip">Crew Sync Enabled</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className="arsenal-card"
            >
              <article className="map-card map-card-hover p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="section-kicker !text-[0.64rem]">{cat.id}</p>
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#21405b]/20 bg-white/55 ${cat.iconClass}`}>
                    <cat.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <h3 className="mt-4 text-2xl text-[#12263a]">{cat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#21405b]/80">{cat.summary}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="chip">
                      <Sparkles className="h-3 w-3" aria-hidden="true" />
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#21405b]/14 pt-5 text-[11px] text-[#21405b]/66">
          <span className="inline-flex items-center gap-2">
            <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
            Built for long-range maintainability
          </span>
          <span className="inline-flex items-center gap-2">
            <BrainCircuit className="h-3.5 w-3.5" aria-hidden="true" />
            AI where it adds real product value
          </span>
        </div>
      </div>
    </section>
  );
}
