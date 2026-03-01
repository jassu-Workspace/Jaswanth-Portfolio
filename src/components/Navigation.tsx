"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#arsenal", label: "Arsenal" },
  { href: "#projects", label: "Projects" },
  { href: "#journey", label: "Journey" },
  { href: "#about", label: "About" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 w-full z-50 px-8 py-5 flex justify-between items-center transition-all duration-300 ${
        scrolled ? "premium-glass py-3" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-[#00d0ff] rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,208,255,0.4)]">
          <span className="text-[#0a191f] font-black text-lg">J</span>
        </div>
        <span className="text-xl font-bold tracking-tight">Jaswanth</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-[#00d0ff] transition-colors duration-200 relative group"
          >
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00d0ff] group-hover:w-full transition-all duration-300" />
          </a>
        ))}
        <a
          href="mailto:jaswanthsrisai0011@gmail.com"
          className="bg-[#00d0ff] text-[#0a191f] px-6 py-2 rounded-lg font-bold hover:scale-105 hover:brightness-110 transition-all shadow-[0_0_15px_rgba(0,208,255,0.3)]"
        >
          Contact
        </a>
      </div>

      <button className="md:hidden text-[#00d0ff]" aria-label="Open menu" title="Open menu">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </motion.nav>
  );
}
