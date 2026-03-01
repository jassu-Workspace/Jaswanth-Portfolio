"use client";
import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, useSpring } from "framer-motion";
import SectionAmbient from "@/components/SectionAmbient";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type TechItem = {
  name: string;
  icon?: string;
};

const techCategories = [
  {
    id: "L_01",
    title: "Languages",
    status: "OPTIMAL",
    icon: "\u2328",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL Engine"],
  },
  {
    id: "AI_03",
    title: "Neural Intelligence",
    status: "NEURAL_SYNC: ACTIVE",
    icon: "🧠",
    grid: true,
    items: [
      { name: "Gemini / DeepSeek", icon: "✨" },
      { name: "Ollama Edge", icon: "🦙" },
      { name: "Computer Vision", icon: "👁️" },
      { name: "RAG & Vector DB", icon: "📚" },
      { name: "FAISS / ChromaDB", icon: "🧩" },
    ],
  },
  {
    id: "CL_04",
    title: "Cloud & DevOps",
    status: "DEPLOYED",
    icon: "\u2601",
    full: true,
    items: [
      { name: "Supabase", icon: "🟢" },
      { name: "Firebase", icon: "🔥" },
      { name: "GitHub", icon: "🐙" },
      { name: "Render", icon: "🚀" },
    ],
  },
];

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 800 }}
      className={`sector-border p-7 rounded-lg flex flex-col gap-5 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function ArsenalSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const getItemLabel = (item: string | TechItem) => (typeof item === "string" ? item : item.name);
  const getItemIcon = (item: string | TechItem) => (typeof item === "string" ? null : item.icon);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".arsenal-3d-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 70, rotateX: 16, z: -140 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            z: 0,
            duration: 1,
            ease: "power3.out",
            delay: index * 0.08,
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="arsenal" ref={ref} className="relative overflow-hidden min-h-screen py-24 px-6 md:px-16 lg:px-24 grid-bg bg-[#0a191f]">
      <SectionAmbient />
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8"
        >
          <div>
            <span className="inline-block px-4 py-1 bg-[#00d0ff]/10 text-[#00d0ff] text-xs font-bold rounded-full mb-4 border border-[#00d0ff]/20 tracking-widest uppercase">
              Grand Line Tech Stack
            </span>
            <h2 className="text-5xl md:text-7xl font-black mb-5 tracking-tighter">
              Tactical <span className="text-[#00d0ff]">Arsenal</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              A curated selection of cutting-edge technologies optimized for the software engineering frontiers.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="#projects"
              className="cinematic-btn bg-[#00d0ff] text-[#0a191f] px-8 py-3 rounded-lg font-bold text-sm"
            >
              View Projects
            </a>
            <p className="text-xs text-[#00d0ff]/60 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00d0ff] rounded-full animate-pulse" />
              Navigating the digital ocean
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-stage">
          {techCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
              className={`${(cat as any).full ? "md:col-span-2" : ""} arsenal-3d-card`}
            >
              <TiltCard className="depth-card">
                <div className="sector-tag">{cat.id}: {cat.title}</div>
                <div className="flex items-center justify-between mt-3">
                  <h3 className="text-base font-bold tracking-[0.2em] text-[#00d0ff] uppercase flex items-center gap-2">
                    <span className="text-xl">{cat.icon}</span>
                    {cat.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#00d0ff]/40">{cat.status}</span>
                </div>
                <div className={`grid gap-3 ${(cat as any).grid ? "grid-cols-2 sm:grid-cols-3" : (cat as any).full ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6" : "grid-cols-1"}`}>
                  {cat.items.map((item) => (
                    <div
                      key={getItemLabel(item)}
                      className={`glass-card rounded-lg border border-white/5 hover:border-[#00d0ff]/40 transition-all cursor-default ${
                        (cat as any).grid
                          ? "px-4 py-5 flex flex-col items-center text-center gap-2"
                          : (cat as any).full
                          ? "p-4 flex flex-col items-center text-center gap-2"
                          : "px-4 py-3 flex items-center gap-3"
                      }`}
                    >
                      {(cat as any).grid || (cat as any).full ? (
                        <>
                          <span className="text-lg text-[#00d0ff]/80 leading-none">{getItemIcon(item) ?? "◈"}</span>
                          <span className="text-[11px] font-bold uppercase tracking-wider">{getItemLabel(item)}</span>
                        </>
                      ) : (
                        <span className="text-sm font-medium">{getItemLabel(item)}</span>
                      )}
                    </div>
                  ))}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-between items-center text-[10px] tracking-widest text-gray-500 uppercase border-t border-[#00d0ff]/10 pt-6">
          <span>LAT: 17.7231° N</span>
          <span>LONG: 83.3013° E</span>
          <span className="text-[#00d0ff]">Nav: Jaswanth — Developer</span>
          <span>SYS: 1.0.0_PROD</span>
        </div>
      </div>
    </section>
  );
}
