"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Compass, Navigation, Waves } from "lucide-react";

const SHARED_MORPH_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const sections = [
  { id: "hero", label: "Dawn Deck" },
  { id: "arsenal", label: "Arsenal Bay" },
  { id: "projects", label: "Ledger Room" },
  { id: "journey", label: "Red Route" },
  { id: "about", label: "Crew Log" },
];

export default function FloatingCompass() {
  const [status, setStatus] = useState(sections[0].label);
  const [rotation, setRotation] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isScrewing, setIsScrewing] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY;
      const viewH = window.innerHeight;
      const totalH = document.documentElement.scrollHeight - viewH;
      const safeTotal = totalH <= 0 ? 1 : totalH;
      const ratio = Math.min(Math.max(scrollPos / safeTotal, 0), 1);

      setRotation(ratio * 1080);
      setProgress(ratio);

      const idx = Math.min(
        Math.floor(ratio * sections.length),
        sections.length - 1
      );
      setStatus(sections[idx]?.label ?? sections[0].label);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onIntroComplete = () => setIsScrewing(true);

    window.addEventListener("intro:complete", onIntroComplete);
    return () => window.removeEventListener("intro:complete", onIntroComplete);
  }, []);

  useEffect(() => {
    if (!isScrewing) return;

    const timeout = window.setTimeout(() => setIsScrewing(false), 1000);
    return () => window.clearTimeout(timeout);
  }, [isScrewing]);

  return (
    <aside className="fixed right-5 top-24 z-40 hidden xl:block">
      <div className="float-slow map-card map-card-hover w-[196px] p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="fan-mark">Vivre Signal</p>
          <span className="chip !min-h-0 !px-2 !py-1 text-[10px]">{Math.round(progress * 100)}%</span>
        </div>

        <motion.div
          layoutId="vivre-signal-dial"
          className="relative mx-auto flex h-24 w-24 items-center justify-center"
          transition={{
            layout: {
              duration: 1.28,
              ease: SHARED_MORPH_EASE,
            },
          }}
        >
          <div className="compass-ring-anim absolute inset-0 rounded-full border border-dashed border-[#3f769d]/45" />
          <div className="absolute inset-2 rounded-full border border-[#21405b]/25" />
          <motion.div
            className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#21405b]/20 bg-white/65"
            animate={{ rotate: rotation }}
            transition={{ duration: 0.6, ease: SHARED_MORPH_EASE }}
          >
            <div className={`compass-dial-rotor ${isScrewing ? "compass-screw-active" : ""}`} aria-hidden="true">
              <div className="absolute inset-0 text-[8px] font-semibold text-[#21405b]/75">
                <span className="absolute left-1/2 top-1 -translate-x-1/2">N</span>
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2">S</span>
                <span className="absolute left-1 top-1/2 -translate-y-1/2">W</span>
                <span className="absolute right-1 top-1/2 -translate-y-1/2">E</span>
              </div>
              <div className="h-9 w-[2px] rounded-full bg-gradient-to-b from-[#12263a] via-[#3f769d] to-[#c39a4a]" />
            </div>
          </motion.div>

          <div className="absolute -right-3 bottom-2 flex h-6 w-6 items-center justify-center rounded-full border border-[#21405b]/25 bg-[#f6f2e7]">
            <Compass className="h-3.5 w-3.5 text-[#2d5e83]" aria-hidden="true" />
          </div>
        </motion.div>

        <div className="text-center">
          <p className="section-kicker mt-3 !text-[9px] !tracking-[0.34em]">Current Zone</p>
          <p className="mt-1 text-sm font-semibold text-[#12263a]">{status}</p>
          <p className="mt-1 text-[11px] text-[#21405b]/70">Log Pose calibrated for smooth waters</p>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-full border border-[#21405b]/12 bg-white/50 px-3 py-2 text-[11px] text-[#21405b]/70">
          <span className="inline-flex items-center gap-1">
            <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
            East 17
          </span>
          <span className="inline-flex items-center gap-1">
            <Waves className="h-3.5 w-3.5" aria-hidden="true" />
            Calm Belt
          </span>
        </div>
      </div>
    </aside>
  );
}
