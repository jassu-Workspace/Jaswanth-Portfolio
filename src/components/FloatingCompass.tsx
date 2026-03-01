"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const sections = ["The Beginning", "Tech Arsenal", "Grand Projects", "The Journey", "AI Command"];

export default function FloatingCompass() {
  const compassRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState("Standby... Ready for voyage");
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY;
      const viewH = window.innerHeight;
      const totalH = document.documentElement.scrollHeight - viewH;
      const progress = scrollPos / totalH;

      setRotation(progress * 360 * 3);

      const idx = Math.min(
        Math.floor(progress * sections.length),
        sections.length - 1
      );
      setStatus(sections[idx] || "Navigating...");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-24 right-8 z-40 hidden xl:block">
      <div className="premium-glass p-6 rounded-2xl flex flex-col items-center gap-4 group transition-all duration-500 hover:border-[#00d0ff]/40">
        <div className="relative w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 compass-ring-anim rounded-full border-2 border-dashed border-[#00d0ff]/30" />
          <motion.div
            className="relative w-16 h-16 border border-[#00d0ff]/20 rounded-full flex items-center justify-center bg-[#0a191f]/40 shadow-[inset_0_0_20px_rgba(0,208,255,0.1)]"
            ref={compassRef}
            animate={{ rotate: rotation }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-[7px] font-bold">
              <span className="absolute top-1 text-[#f5c842]">N</span>
              <span className="absolute bottom-1 text-gray-500">S</span>
              <span className="absolute left-1 text-gray-500">W</span>
              <span className="absolute right-1 text-gray-500">E</span>
            </div>
            <div className="w-0.5 h-10 bg-gradient-to-b from-white via-[#00d0ff] to-[#f5c842] rounded-full shadow-[0_0_8px_rgba(0,208,255,0.5)]" />
          </motion.div>
        </div>
        <div className="text-center">
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#00d0ff] font-black mb-1">Navigator Core</p>
          <p className="text-[9px] text-gray-500 font-medium italic">{status}</p>
        </div>
      </div>
    </div>
  );
}
