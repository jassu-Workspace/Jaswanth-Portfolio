"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Mail, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", id: "hero", label: "Home" },
  { href: "#arsenal", id: "arsenal", label: "Stack" },
  { href: "#projects", id: "projects", label: "Work" },
  { href: "#journey", id: "journey", label: "Route" },
  { href: "#about", id: "about", label: "About" },
];

const CONTACT_EMAIL = "jaswanthsrisai0011@gmail.com";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      const topOffset = window.scrollY + 180;
      setScrolled(window.scrollY > 40);

      for (const link of [...navLinks].reverse()) {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= topOffset) {
          setActive(link.id);
          break;
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-1/2 top-3 z-50 flex w-[min(1120px,calc(100%-1.1rem))] -translate-x-1/2 items-center justify-between rounded-full px-3 py-2 transition-all duration-300 ${
          scrolled ? "nav-surface shadow-[0_18px_44px_-28px_rgba(14,29,43,0.65)]" : "nav-surface"
        }`}
      >
        <a href="#hero" className="flex min-h-[44px] items-center gap-3 rounded-full px-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#21405b]/30 bg-white/55">
            <div className="h-5 w-5 rounded-full border border-[#12263a]/70 bg-[#f4efe0]" />
            <div className="absolute top-[15px] h-[2px] w-6 bg-[#d06752]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-[#0e1d2b]">Jaswanth</span>
            <span className="fan-mark leading-none">Route 56 | East Log</span>
          </div>
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-[#21405b] lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`legend-link min-h-[44px] rounded-full px-3 py-2 transition-colors duration-200 ${
                active === link.id ? "text-[#0e1d2b]" : "text-[#21405b]/80 hover:text-[#0e1d2b]"
              }`}
              aria-current={active === link.id ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="cta-primary min-h-[44px]"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Let&apos;s Build
          </a>
        </div>

        <button
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-[#21405b]/25 bg-white/55 text-[#12263a] lg:hidden"
          aria-label="Toggle menu"
          title="Toggle menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.24 }}
            className="fixed left-1/2 top-[74px] z-40 flex w-[min(92vw,560px)] -translate-x-1/2 flex-col gap-2 rounded-3xl border border-[#21405b]/25 bg-[#f6f2e8]/95 p-4 shadow-[0_26px_44px_-34px_rgba(14,29,43,0.85)] backdrop-blur md:top-[82px] lg:hidden"
          >
            <div className="mb-1 flex items-center gap-2 rounded-xl px-2 py-1">
              <Compass className="h-4 w-4 text-[#3f769d]" aria-hidden="true" />
              <p className="fan-mark">Log Pose synchronized</p>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`min-h-[44px] rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                  active === link.id
                    ? "bg-[#21405b] text-[#f6f2e7]"
                    : "text-[#21405b] hover:bg-white/60"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="cta-primary mt-2"
              onClick={() => setMobileOpen(false)}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
