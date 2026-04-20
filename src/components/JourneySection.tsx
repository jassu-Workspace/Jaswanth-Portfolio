"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionAmbient from "@/components/SectionAmbient";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Anchor, Code, Compass, FlaskConical, Rocket, Route, Trophy } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    phase: "Phase 01",
    title: "Interface Fundamentals",
    description: "Built early discipline in structure, semantics, and clean front-end composition.",
    tag: "Dawn",
    icon: Anchor,
  },
  {
    phase: "Phase 02",
    title: "Systems Thinking",
    description: "Strengthened logic and architecture intuition through deeper language and backend exploration.",
    tag: "Keel",
    icon: Code,
  },
  {
    phase: "Phase 03",
    title: "Product Acceleration",
    description: "Moved from isolated features to complete user journeys and full-stack ownership.",
    tag: "Current",
    icon: Rocket,
  },
  {
    phase: "Phase 04",
    title: "AI-Integrated Execution",
    description: "Shipped multi-domain applications with practical AI integration and measurable outcomes.",
    tag: "Grand Line",
    icon: Compass,
  },
  {
    phase: "Phase 05",
    title: "AICTE IDE Bootcamp Recognition",
    description:
      "At AICTE IDE Bootcamp (Edition 3, Phase 1) in Puttaparthi, our team was recognized among 72 teams from 10+ states and awarded a Certificate of Appreciation for one of the best innovative idea pitches.",
    tag: "Awarded",
    icon: Trophy,
  },
  {
    phase: "Now",
    title: "Neuromorphic Frontier",
    description: "Current team work explores event-driven intelligence and edge-oriented brain-inspired systems.",
    tag: "Open Route",
    icon: FlaskConical,
  },
];

export default function JourneySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".journey-line-fill",
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 68%",
            end: "bottom 72%",
            scrub: true,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".journey-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 76, rotateX: 10, filter: "blur(7px)" },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.9,
            ease: "power3.out",
            delay: index * 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });

      gsap.to(".journey-aside", {
        yPercent: -10,
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
    <section id="journey" ref={ref} className="site-section overflow-hidden">
      <SectionAmbient />

      <div className="content-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="section-kicker">Voyage Timeline</p>
          <h2 className="section-title">
            From first lines of code to <span className="text-[#3f769d]">strategic product craft</span>
          </h2>
          <p className="section-copy max-w-[64ch]">
            Each phase sharpened a different edge: structure, systems thinking, acceleration, and AI-led execution.
            The route keeps evolving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="journey-aside map-card map-card-hover h-fit p-6 lg:sticky lg:top-24"
          >
            <p className="section-kicker">Current Heading</p>
            <h3 className="mt-3 text-[1.7rem] leading-tight text-[#12263a]">Startup Track: Horizon AI</h3>
            <p className="mt-4 text-sm leading-relaxed text-[#21405b]/82">
              After bootcamp recognition, the next mission is converting Horizon AI into a startup-ready product with a
              clear problem-solution fit, repeatable delivery model, and scalable implementation roadmap.
            </p>

            <div className="mt-5 space-y-2 text-sm text-[#21405b]/84">
              <p className="inline-flex items-center gap-2">
                <Route className="h-4 w-4 text-[#3f769d]" aria-hidden="true" />
                Opportunity to move from prototype to startup initiative
              </p>
              <p className="inline-flex items-center gap-2">
                <Trophy className="h-4 w-4 text-[#3f769d]" aria-hidden="true" />
                Guided by mentor Mr. Srikanth Kumar
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="chip">Bootcamp Winner Recognition</span>
              <span className="chip">Startup Build: Active</span>
            </div>
          </motion.aside>

          <div className="relative">
            <div className="absolute left-[14px] top-2 bottom-2 w-[2px] rounded-full bg-[#21405b]/12" />
            <div className="journey-line-fill absolute left-[14px] top-2 bottom-2 w-[2px] origin-top rounded-full bg-gradient-to-b from-[#2d5e83] via-[#3f769d] to-[#ac7b2f]" />

            <div className="space-y-5 pl-10">
              {milestones.map((milestone) => (
                <article key={milestone.title} className="journey-card map-card map-card-hover p-5">
                  <div className="absolute -left-[30px] top-8 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-[#21405b]/20 bg-[#f6f2e7] text-[#21405b] shadow-sm">
                    <milestone.icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="chip !text-[10px]">{milestone.phase}</span>
                    <span className="fan-mark">{milestone.tag}</span>
                  </div>

                  <h4 className="mt-3 text-[1.35rem] text-[#12263a]">{milestone.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#21405b]/82">{milestone.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
