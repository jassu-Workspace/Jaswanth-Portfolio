"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealItem = {
  selector: string;
  y?: number;
  opacity?: number;
  scale?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
};

type Options = {
  items: RevealItem[];
  start?: string;
  once?: boolean;
};

export function useScrollReveal(ref: React.RefObject<HTMLElement | null>, options: Options) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      options.items.forEach((item) => {
        const fromVars: Record<string, number> = {};
        const toVars: gsap.TweenVars = {
          opacity: item.opacity ?? 1,
          y: item.y ?? 0,
          scale: item.scale ?? 1,
          duration: item.duration ?? 0.85,
          ease: "power3.out",
          stagger: item.stagger,
        };
        if (item.opacity !== undefined && item.opacity !== 1) fromVars.opacity = 0;
        if (item.y !== undefined && item.y !== 0) fromVars.y = item.y;
        if (item.scale !== undefined && item.scale !== 1) fromVars.scale = item.scale;

        tl.fromTo(item.selector, fromVars, toVars, item.delay ?? 0);
      });

      ScrollTrigger.create({
        trigger: el,
        start: options.start ?? "top 85%",
        once: options.once ?? true,
        animation: tl,
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}