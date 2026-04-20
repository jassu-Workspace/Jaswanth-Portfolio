"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Compass, Sparkles, Waves } from "lucide-react";

const INTRO_DURATION_MS = 3000;
const REDUCED_INTRO_DURATION_MS = 520;
const SHARED_MORPH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function IntroOverlay() {
  const reduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(true);
  const hasDispatchedComplete = useRef(false);
  const sharedMorphDuration = reduceMotion ? 0.2 : 1.28;

  useEffect(() => {
    if (!isVisible) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = window.setTimeout(
      () => setIsVisible(false),
      reduceMotion ? REDUCED_INTRO_DURATION_MS : INTRO_DURATION_MS
    );

    return () => window.clearTimeout(timeout);
  }, [isVisible, reduceMotion]);

  useEffect(() => {
    if (isVisible || hasDispatchedComplete.current) return;

    hasDispatchedComplete.current = true;
    window.dispatchEvent(new Event("intro:complete"));
  }, [isVisible]);

  return (
    <AnimatePresence mode="wait">
      {isVisible ? (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: reduceMotion ? 0.2 : 0.72,
              ease: SHARED_MORPH_EASE,
            },
          }}
          role="dialog"
          aria-label="Portfolio intro animation"
        >
          <div className="intro-grid" aria-hidden="true" />
          <div className="intro-aurora intro-aurora-a" aria-hidden="true" />
          <div className="intro-aurora intro-aurora-b" aria-hidden="true" />
          <div className="intro-scanline" aria-hidden="true" />

          <motion.div
            className="intro-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0.25 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.p
              className="intro-kicker"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.5, delay: reduceMotion ? 0 : 0.08 }}
            >
              Welcome to the Jaswanth Portfolio Site
            </motion.p>

            <motion.p
              className="intro-pretitle"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.45, delay: reduceMotion ? 0 : 0.15 }}
            >
              A curated experience in intelligent systems, product depth, and modern engineering craft.
            </motion.p>

            <motion.div
              layoutId="vivre-signal-dial"
              className="intro-vivre-dial relative mx-auto mt-1 flex h-[108px] w-[108px] items-center justify-center"
              initial={{ opacity: 0, scale: 0.78, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.72,
                delay: reduceMotion ? 0 : 0.16,
                ease: SHARED_MORPH_EASE,
                layout: {
                  duration: sharedMorphDuration,
                  ease: SHARED_MORPH_EASE,
                },
              }}
            >
              <div className="compass-ring-anim absolute inset-0 rounded-full border border-dashed border-[#3f769d]/45" />
              <div className="absolute inset-[10px] rounded-full border border-[#21405b]/25" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[#21405b]/20 bg-white/72">
                <div className="compass-dial-rotor" aria-hidden="true">
                  <div className="absolute inset-0 text-[8px] font-semibold text-[#21405b]/75">
                    <span className="absolute left-1/2 top-1 -translate-x-1/2">N</span>
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2">S</span>
                    <span className="absolute left-1 top-1/2 -translate-y-1/2">W</span>
                    <span className="absolute right-1 top-1/2 -translate-y-1/2">E</span>
                  </div>
                  <div className="h-9 w-[2px] rounded-full bg-gradient-to-b from-[#12263a] via-[#3f769d] to-[#c39a4a]" />
                </div>
              </div>
            </motion.div>

            <motion.h1
              layoutId="jaswanth-name"
              className="intro-title morph-name-shared"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.6,
                delay: reduceMotion ? 0 : 0.24,
                layout: {
                  duration: sharedMorphDuration,
                  ease: SHARED_MORPH_EASE,
                },
              }}
            >
              Jaswanth
            </motion.h1>

            <motion.p
              layoutId="shared-role-line"
              className="intro-subtitle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0.2 : 0.5,
                delay: reduceMotion ? 0 : 0.34,
                layout: {
                  duration: sharedMorphDuration,
                  ease: SHARED_MORPH_EASE,
                },
              }}
            >
              AI Systems | Full-Stack Product Engineering
            </motion.p>

            <motion.p
              className="intro-welcome"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.45, delay: reduceMotion ? 0 : 0.43 }}
            >
              Explore startup-ready execution, interface storytelling, and robust AI-driven delivery across real products.
            </motion.p>

            <motion.div
              className="intro-progress-track"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.45, delay: reduceMotion ? 0 : 0.4 }}
              aria-hidden="true"
            >
              <motion.span
                className="intro-progress-fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: reduceMotion ? 0.35 : 1.7,
                  ease: reduceMotion ? "easeOut" : [0.65, 0, 0.35, 1],
                  delay: reduceMotion ? 0 : 0.42,
                }}
              />
            </motion.div>

            <motion.div
              className="intro-badges"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.45, delay: reduceMotion ? 0 : 0.5 }}
            >
              <span className="intro-badge">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Light Theme Experience
              </span>
              <span className="intro-badge">
                <Waves className="h-3.5 w-3.5" aria-hidden="true" />
                Motion Calibrated
              </span>
              <motion.span
                layoutId="shared-startup-chip"
                className="intro-badge"
                transition={{
                  layout: {
                    duration: sharedMorphDuration,
                    ease: SHARED_MORPH_EASE,
                  },
                }}
              >
                <Compass className="h-3.5 w-3.5" aria-hidden="true" />
                Startup Opportunity: Horizon AI
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.button
            type="button"
            className="intro-skip"
            onClick={() => setIsVisible(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: reduceMotion ? 0 : 0.45 }}
          >
            Enter Portfolio
          </motion.button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}