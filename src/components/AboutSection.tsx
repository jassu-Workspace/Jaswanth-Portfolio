"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionAmbient from "@/components/SectionAmbient";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const traits = [
  { label: "Hackathon Finalist", icon: "🏆", desc: "SIH 2025 — National Stage" },
  { label: "AI-First Mindset", icon: "🧠", desc: "Building with LLMs & CV daily" },
  { label: "Full-Stack Depth", icon: "⚡", desc: "End-to-end product ownership" },
  { label: "Ship Fast", icon: "🚀", desc: "From idea to deploy in hours" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/jassu-Workspace", icon: "GH" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jaswanth-sri-sai-venkat-dangeti-639aa9348/", icon: "LI" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".about-3d-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 70, rotateX: 12, z: -120 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            z: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: index * 0.05,
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
    <section id="about" ref={ref} className="relative overflow-hidden min-h-screen py-24 px-6 md:px-16 lg:px-24 grid-bg bg-[#0a191f]">
      <SectionAmbient />
      <div className="relative z-10 max-w-7xl mx-auto perspective-stage">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#00d0ff]/10 text-[#00d0ff] text-xs font-bold rounded-full mb-4 border border-[#00d0ff]/20 tracking-widest uppercase">
            Operator File
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            About <span className="text-[#00d0ff]">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="sector-border depth-card about-3d-card p-8 rounded-xl">
              <p className="text-gray-300 text-lg leading-relaxed mb-5">
                Hey — I'm <span className="text-white font-bold">Jaswanth</span>, an AI/ML & Full-Stack developer from
                Visakhapatnam, India. I build systems that are fast, intelligent, and ship-ready.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                My focus is at the intersection of <span className="text-[#00d0ff]">machine learning</span> and{" "}
                <span className="text-[#f5c842]">product engineering</span> — whether that's a RAG-powered tutoring
                engine, a computer vision pipeline, or a clean React UI that just works.
              </p>
              <p className="text-gray-400 leading-relaxed">
                SIH 2025 Finalist with <span className="text-white font-semibold">Horizon AI</span>. Always building,
                always learning.
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card depth-card about-3d-card px-5 py-3 rounded-lg border border-white/5 hover:border-[#00d0ff]/40 text-sm font-bold text-gray-400 hover:text-[#00d0ff] transition-all flex items-center gap-2"
                >
                  <span className="text-xs font-mono text-[#00d0ff]/60">{s.icon}</span>
                  {s.label}
                </a>
              ))}
              <a
                href="mailto:jaswanthsrisai0011@gmail.com"
                className="cinematic-btn depth-card about-3d-card bg-[#00d0ff] text-[#0a191f] px-6 py-3 rounded-lg font-bold text-sm"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right — trait cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {traits.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                className="glass-card depth-card about-3d-card p-6 rounded-xl border border-white/5 hover:border-[#00d0ff]/30 transition-all flex flex-col gap-3"
              >
                <span className="text-3xl">{t.icon}</span>
                <div>
                  <p className="text-sm font-bold text-white mb-1">{t.label}</p>
                  <p className="text-[11px] text-gray-500">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 flex flex-wrap justify-between items-center text-[10px] tracking-widest text-gray-600 uppercase border-t border-[#00d0ff]/10 pt-6"
        >
          <span>© 2025 Jaswanth</span>
          <span className="text-[#00d0ff]/40">Built with Next.js · Three.js · Framer Motion</span>
          <span>SYS: 1.0.0_PROD</span>
        </motion.div>
      </div>
    </section>
  );
}
