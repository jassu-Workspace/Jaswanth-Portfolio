"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionAmbient from "@/components/SectionAmbient";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, BrainCircuit, Code2, Handshake, Link2, Mail, PhoneCall, Rocket, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const traits = [
  {
    label: "Product Clarity",
    desc: "I break complex problems into flows users can understand and trust.",
    icon: ShieldCheck,
  },
  {
    label: "AI-Ready Systems",
    desc: "I integrate language and vision models with practical constraints in mind.",
    icon: BrainCircuit,
  },
  {
    label: "Execution Speed",
    desc: "Fast iteration with architecture discipline keeps momentum and quality aligned.",
    icon: Rocket,
  },
  {
    label: "Team Collaboration",
    desc: "I enjoy building with teams where ownership and curiosity are equally valued.",
    icon: Handshake,
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/jassu-Workspace",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jaswanth-sri-sai-venkat-dangeti-639aa9348/",
    icon: Link2,
  },
];

const CONTACT_EMAIL = "jaswanthsrisai0011@gmail.com";
const CONTACT_PHONE_DISPLAY = "+91 8500923656";
const CONTACT_PHONE_LINK = "+918500923656";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".about-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 70, rotateX: 9, filter: "blur(6px)" },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            duration: 0.85,
            ease: "power3.out",
            delay: index * 0.05,
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
            },
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="site-section overflow-hidden pb-20">
      <SectionAmbient />

      <div className="content-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <p className="section-kicker">Captain&apos;s Note</p>
          <h2 className="section-title">
            Building calm, high-trust experiences in <span className="text-[#2d5e83]">complex product weather</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5"
          >
            <article className="about-card map-card map-card-hover p-7">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#21405b]/26 bg-white/62 text-xl font-semibold text-[#12263a]">
                  J
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#12263a]">Jaswanth</p>
                  <p className="text-sm text-[#21405b]/72">AI Systems and Full-Stack Product Engineer</p>
                </div>
              </div>

              <p className="text-base leading-relaxed text-[#21405b]/84">
                I focus on building software that is both ambitious and dependable, combining thoughtful interaction design
                with practical AI capability.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#21405b]/82">
                My strongest work sits at the intersection of product engineering and intelligence systems: RAG platforms,
                verification workflows, and user-facing applications that stay performant under pressure.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-[#21405b]/82">
                SIH 2025 finalist with Horizon AI. Still curious, still shipping, and always refining both craft and process.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="chip">Visakhapatnam, India</span>
                <span className="chip">Route Marker: East Blue</span>
              </div>
            </article>

            <div className="about-card map-card map-card-hover p-5">
              <p className="section-kicker !text-[0.66rem]">Connect</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="legend-link inline-flex min-h-[44px] items-center gap-2 rounded-full border border-[#21405b]/18 bg-white/55 px-4 py-2 text-sm font-semibold text-[#21405b]"
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                    {social.label}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ))}

                <a href={`mailto:${CONTACT_EMAIL}`} className="cta-primary">
                  Let&apos;s Collaborate
                </a>

                <a href={`tel:${CONTACT_PHONE_LINK}`} className="cta-secondary">
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  Call Me
                </a>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 md:grid-cols-2">
                <a href={`mailto:${CONTACT_EMAIL}`} className="contact-channel">
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                    Email
                  </span>
                  <span className="contact-channel-value">{CONTACT_EMAIL}</span>
                </a>

                <a href={`tel:${CONTACT_PHONE_LINK}`} className="contact-channel">
                  <span className="inline-flex items-center gap-2">
                    <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
                    Phone
                  </span>
                  <span className="contact-channel-value">{CONTACT_PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {traits.map((trait, i) => (
              <motion.article
                key={trait.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.52, delay: 0.24 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="about-card map-card map-card-hover p-5"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#21405b]/18 bg-white/60 text-[#2d5e83]">
                  <trait.icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl text-[#12263a]">{trait.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#21405b]/82">{trait.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.72, delay: 0.52 }}
          className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t border-[#21405b]/14 pt-5 text-[11px] text-[#21405b]/68"
        >
          <span>© 2026 Jaswanth</span>
          <span className="fan-mark">Log Book // Build with intent</span>
          <span>Next.js • GSAP • Framer Motion • Three.js</span>
        </motion.div>
      </div>
    </section>
  );
}
