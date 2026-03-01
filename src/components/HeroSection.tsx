"use client";
import { useRef, useEffect, Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroCanvas = lazy(() => import("./HeroCanvas"));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] } },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-parallax-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-[#0a191f]"
    >
      <div className="hero-parallax-bg absolute inset-0 z-0">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a191f] via-transparent to-[#0a191f] z-[1] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a191f]/50 via-transparent to-[#0a191f]/50 z-[1] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center z-10 max-w-5xl relative"
      >
        <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-5 py-1.5 rounded-full border border-[#f5c842]/30 bg-[#f5c842]/5 text-[#f5c842] text-[11px] uppercase tracking-[0.3em] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f5c842] animate-pulse" />
          System Online: SIH 2025 Finalist
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-7xl sm:text-8xl md:text-[9rem] lg:text-[10rem] font-black mb-4 premium-glow tracking-tighter text-white leading-none"
        >
          Jaswanth
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl text-[#00d0ff] font-medium mb-8 tracking-[0.4em] uppercase"
        >
          AI/ML &amp; <span className="text-[#f5c842]">Full-Stack</span> Architect
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          Architecting{" "}
          <span className="text-white font-semibold border-b border-[#00d0ff]/40">Horizon AI</span>{" "}
          — a cinematic shift in education powered by OCR, biometric intelligence, and adaptive neural learning.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a
            href="#projects"
            className="cinematic-btn bg-[#00d0ff] text-[#0a191f] px-10 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3"
          >
            View Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="cinematic-btn border border-[#00d0ff]/30 text-white px-10 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-3 hover:bg-[#00d0ff]/5"
          >
            About Me
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { label: "Projects", value: "8+" },
            { label: "SIH Rank", value: "Finalist" },
            { label: "AI Models", value: "5+" },
            { label: "Tech Stack", value: "20+" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="text-3xl font-black text-[#00d0ff]">{s.value}</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center floating z-10">
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#f5c842]/60 mb-3">Scroll to Explore</p>
        <div className="w-px h-14 bg-gradient-to-b from-[#00d0ff] to-transparent mx-auto" />
      </div>
    </section>
  );
}
