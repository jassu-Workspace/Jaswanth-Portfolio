"use client";
import { useEffect, useRef, useState } from "react";

export default function GlobalScrollAmbient() {
  const [reduce, setReduce] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onReduce = () => setReduce(mq.matches);
    mq.addEventListener("change", onReduce);

    const onVisibility = () => setIsVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      mq.removeEventListener("change", onReduce);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // Only render animated waves when not reduced-motion and when document is visible.
  const showAnimation = !reduce && isVisible;

  return (
    <div
      className="global-scroll-ambient"
      aria-hidden="true"
      style={showAnimation ? { opacity: 1 } : { opacity: 0 }}
    >
      <div className="global-wave global-wave-a" />
      <div className="global-wave global-wave-b" />
      <div className="global-wave global-wave-c" />
      <div className="global-drift-points" />
      <div className="global-ring global-ring-a" />
      <div className="global-ring global-ring-b" />
    </div>
  );
}