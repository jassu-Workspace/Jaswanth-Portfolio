"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalScrollAmbient() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(".global-wave-a", {
        yPercent: 24,
        xPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(".global-wave-b", {
        yPercent: -18,
        xPercent: 9,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(".global-wave-c", {
        yPercent: 12,
        xPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(".global-drift-points", {
        xPercent: -12,
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(".global-ring-a", {
        rotation: 140,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      gsap.to(".global-ring-b", {
        rotation: -180,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="global-scroll-ambient" aria-hidden="true">
      <div className="global-wave global-wave-a" />
      <div className="global-wave global-wave-b" />
      <div className="global-wave global-wave-c" />
      <div className="global-drift-points" />
      <div className="global-ring global-ring-a" />
      <div className="global-ring global-ring-b" />
    </div>
  );
}