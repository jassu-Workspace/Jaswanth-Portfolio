"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionAmbient from "@/components/SectionAmbient";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "Step 1",
    title: "HTML Foundations",
    description: "Started with HTML and understood how to structure web experiences from scratch.",
    dotClass: "bg-[#f5c842] shadow-[0_0_14px_rgba(245,200,66,0.5)]",
    chipClass: "text-[#f5c842] border-[#f5c842]/40 bg-[#f5c842]/10",
    tag: "Origin",
  },
  {
    year: "Step 2",
    title: "Java Fundamentals",
    description:
      "Learned Java next and built strong logic, OOP thinking, and problem-solving discipline.",
    dotClass: "bg-[#00d0ff] shadow-[0_0_14px_rgba(0,208,255,0.5)]",
    chipClass: "text-[#00d0ff] border-[#00d0ff]/40 bg-[#00d0ff]/10",
    tag: "Core",
  },
  {
    year: "Step 3",
    title: "JavaScript Momentum",
    description:
      "Moved into JavaScript to build dynamic apps and real interactive product flows.",
    dotClass: "bg-[#a855f7] shadow-[0_0_14px_rgba(168,85,247,0.5)]",
    chipClass: "text-[#a855f7] border-[#a855f7]/40 bg-[#a855f7]/10",
    tag: "Shift",
  },
  {
    year: "Step 4",
    title: "Idea Building Era",
    description:
      "Transitioned from coding features to building complete ideas and systems that solve real-world problems.",
    dotClass: "bg-[#f5c842] shadow-[0_0_14px_rgba(245,200,66,0.5)]",
    chipClass: "text-[#f5c842] border-[#f5c842]/40 bg-[#f5c842]/10",
    tag: "Builder",
    highlight: true,
  },
  {
    year: "Now",
    title: "Present Core Skillset",
    description:
      "Main skill today: building the best ideas and leveling them up into top-quality products, with full-stack development as a core execution engine.",
    dotClass: "bg-[#22c55e] shadow-[0_0_14px_rgba(34,197,94,0.5)]",
    chipClass: "text-[#22c55e] border-[#22c55e]/40 bg-[#22c55e]/10",
    tag: "ACTIVE",
  },
];

export default function JourneySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".journey-3d-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 70, rotateX: 14, z: -140 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            z: 0,
            duration: 0.95,
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
    <section id="journey" ref={ref} className="relative overflow-hidden min-h-screen py-24 px-6 md:px-16 lg:px-24 bg-[#060f14]">
      <SectionAmbient />
      <div className="relative z-10 max-w-5xl mx-auto perspective-stage">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1 bg-[#a855f7]/10 text-[#a855f7] text-xs font-bold rounded-full mb-4 border border-[#a855f7]/20 tracking-widest uppercase">
            Log Book
          </span>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            The <span className="text-[#a855f7]">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            From first markup to full product strategy — the journey from learning syntax to building impactful ideas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
          className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div className="glass-card depth-card journey-3d-card rounded-xl p-6 border border-[#f5c842]/20">
            <p className="text-xs uppercase tracking-widest text-[#f5c842] mb-3">Highlighted Projects</p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>• Horizon AI v1 / v2</li>
              <li>• Physiq-AI</li>
              <li>• Luffy&apos;s King of Exams</li>
              <li>• TripScraper.ai & Campus-SkillSwap</li>
            </ul>
          </div>
          <div className="glass-card depth-card journey-3d-card rounded-xl p-6 border border-[#00d0ff]/20">
            <p className="text-xs uppercase tracking-widest text-[#00d0ff] mb-3">Major Achievements</p>
            <ul className="text-sm text-gray-300 space-y-2">
              <li>• SIH 2025 Finalist (500+ teams)</li>
              <li>• Multi-domain full-stack + AI portfolio</li>
              <li>• Production-focused RAG and verification systems</li>
              <li>• Team-building and idea-to-product execution</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="mb-16 premium-glass depth-card journey-3d-card rounded-xl p-6 border border-[#a855f7]/20"
        >
          <p className="text-xs uppercase tracking-widest text-[#a855f7] mb-3">Current Biggest Team Project</p>
          <h3 className="text-2xl font-black text-white mb-3">Neuromorphic Computing & Engineering</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            We are actively building around neuromorphic computing using SNNs, event-driven intelligence, advanced chips, and frameworks like Lava/Nengo/SpikingJelly, with real-world focus on robotics, edge AI, and benchmarked performance using NeuroBench.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[26px] top-0 bottom-0 w-px bg-gradient-to-b from-[#f5c842]/60 via-[#00d0ff]/40 to-[#22c55e]/40 md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
                className={`relative flex gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-5 w-[14px] h-[14px] rounded-full border-2 border-[#0a191f] z-10 shadow-lg md:left-1/2 md:-translate-x-1/2 ${m.dotClass}`}
                />

                {/* Card */}
                <div className={`ml-10 md:ml-0 md:w-[46%] ${i % 2 === 0 ? "md:pr-10" : "md:pl-10"}`}>
                  <div
                    className={`glass-card depth-card journey-3d-card p-6 rounded-xl border transition-all ${
                      m.highlight ? "border-[#f5c842]/40 shadow-[0_0_30px_rgba(245,200,66,0.1)]" : "border-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-[10px] font-bold rounded-full px-3 py-1 border uppercase tracking-widest ${m.chipClass}`}>
                        {m.tag}
                      </span>
                      <span className="text-xs font-mono text-gray-500">{m.year}</span>
                    </div>
                    <h3 className="text-xl font-black text-white mb-2">{m.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{m.description}</p>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[46%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
