"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ScrubItem = {
  selector: string;
  from: Record<string, number>;
  to: Record<string, number>;
  ease?: string;
  scrub?: boolean | number;
};

type Options = {
  items: ScrubItem[];
  start?: string;
  end?: string;
  scrub?: boolean | number;
};

/**
 * Scroll-linked scrub animations (parallax, line-fill).
 * One ScrollTrigger per section driving all scrub tweens — cheaper than N triggers.
 */
export function useScrollProgress(ref: React.RefObject<HTMLElement | null>, options: Options) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      options.items.forEach((item) => {
        const target = el.querySelector(item.selector);
        if (!target) return;
        tl.add(
          gsap.fromTo(target, item.from, {
            ...item.to,
            ease: item.ease ?? "none",
          }),
          0
        );
      });

      ScrollTrigger.create({
        trigger: el,
        start: options.start ?? "top bottom",
        end: options.end ?? "bottom top",
        scrub: options.scrub ?? true,
        animation: tl,
      });
    }, el);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}