"use client";
import { useRef, useEffect, Suspense, lazy } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Binoculars, Sparkles } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionAmbient from "@/components/SectionAmbient";

gsap.registerPlugin(ScrollTrigger);

const HeroCanvas = lazy(() => import("./HeroCanvas"));

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const sharedMorphDuration = reduceMotion ? 0.2 : 1.28;
  const sharedMorphEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-stagger",
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.09,
          ease: "power3.out",
          delay: 0.25,
        }
      );

      gsap.to(".hero-parallax-bg", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-depth-layer", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-signal", {
        xPercent: -10,
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
      className="site-section relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      <SectionAmbient />

      <div className="hero-parallax-bg absolute inset-0 z-0 opacity-80">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="hero-depth-layer absolute inset-0 z-[1] bg-gradient-to-b from-[#f6f2e7]/70 via-transparent to-[#ecdfc7]/88" />
      <div className="absolute left-1/2 top-[12%] z-[1] h-[34vw] w-[34vw] min-h-56 min-w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(95,153,188,0.20),rgba(95,153,188,0.01)_62%)]" />

      <div className="content-wrap relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p
              layoutId="shared-role-line"
              className="hero-stagger section-kicker"
              transition={{
                layout: {
                  duration: sharedMorphDuration,
                  ease: sharedMorphEase,
                },
              }}
            >
              AI Systems | Full-Stack Product Engineering
            </motion.p>
            <motion.h1
              layoutId="jaswanth-name"
              className="hero-stagger morph-name-shared text-depth-main mt-5 text-[clamp(3.2rem,10vw,7.5rem)] leading-[0.92] text-[#0e1d2b]"
              transition={{
                layout: {
                  duration: sharedMorphDuration,
                  ease: sharedMorphEase,
                },
              }}
            >
              Jaswanth
            </motion.h1>

            <p className="hero-stagger text-depth-soft mt-5 text-[clamp(1.3rem,3.5vw,2.2rem)] leading-tight text-[#21405b]">
              Designing intelligent products for unpredictable seas.
            </p>

            <p className="hero-stagger section-copy max-w-[60ch]">
              I build production-ready AI experiences from concept to deployment: thoughtful interfaces,
              scalable architecture, and practical intelligence that actually ships.
            </p>

            <div className="hero-stagger mt-8 flex flex-wrap items-center gap-3">
              <span className="chip">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                SIH 2025 Finalist
              </span>
              <span className="chip">AICTE IDE Bootcamp Awardee</span>
              <motion.span
                layoutId="shared-startup-chip"
                className="chip"
                transition={{
                  layout: {
                    duration: sharedMorphDuration,
                    ease: sharedMorphEase,
                  },
                }}
              >
                Startup Opportunity: Horizon AI
              </motion.span>
              <span className="chip">Puttaparthi | 72 Teams | 10+ States</span>
              <span className="chip">Signal Stable</span>
            </div>

            <div className="hero-stagger mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="cta-primary">
                Explore Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#about" className="cta-secondary">
                <Binoculars className="h-4 w-4" aria-hidden="true" />
                About Me
              </a>
            </div>

            <div className="hero-stagger mt-10 flex flex-wrap gap-8">
              {[
                { label: "Systems Shipped", value: "10+" },
                { label: "AI Integrations", value: "6" },
                { label: "Years Building", value: "2" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="stat-number">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-signal hero-stagger relative">
            <div className="map-card map-card-hover p-6 md:p-7">
              <div className="mb-5 flex items-center justify-between">
                <p className="section-kicker !text-[0.62rem]">Navigation Brief</p>
                <span className="fan-mark">Code: Sunny-13</span>
              </div>

              <h2 className="text-depth-soft text-[clamp(1.45rem,3.2vw,2.1rem)] leading-tight text-[#12263a]">
                Horizon AI and beyond: human-centered systems with measurable impact.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#21405b]/80">
                Current route focuses on AI education tooling, health intelligence, and trustworthy document workflows.
              </p>

              <div className="mt-6 space-y-3 text-sm text-[#21405b]/86">
                <div className="flex items-start justify-between gap-4 border-b border-[#21405b]/15 pb-2">
                  <span>Specialty</span>
                  <span className="font-semibold text-[#12263a]">AI + Product Interface Engineering</span>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-[#21405b]/15 pb-2">
                  <span>Current Mission</span>
                  <span className="font-semibold text-[#12263a]">Neuromorphic Explorations</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span>Availability</span>
                  <span className="font-semibold text-[#12263a]">Open to high-impact collaborations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-center">
          <span className="scroll-cue">
            <span className="scroll-cue-line" />
            Scroll to chart the route
            <span className="scroll-cue-line" />
          </span>
        </div>
      </div>
    </section>
  );
}
