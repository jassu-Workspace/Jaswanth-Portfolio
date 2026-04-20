"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();
  const smoothScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.2,
  });

  return <motion.div aria-hidden="true" className="scroll-progress" style={{ scaleX: reduceMotion ? scrollYProgress : smoothScale }} />;
}
