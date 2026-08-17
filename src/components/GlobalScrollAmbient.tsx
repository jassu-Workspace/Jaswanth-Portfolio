"use client";

export default function GlobalScrollAmbient() {
  return (
    <div className="global-scroll-ambient" aria-hidden="true" style={{ willChange: "transform" }}>
      <div className="global-wave global-wave-a" style={{ willChange: "transform, filter" }} />
      <div className="global-wave global-wave-b" style={{ willChange: "transform, filter" }} />
      <div className="global-wave global-wave-c" style={{ willChange: "transform, filter" }} />
      <div className="global-drift-points" style={{ willChange: "transform" }} />
      <div className="global-ring global-ring-a" />
      <div className="global-ring global-ring-b" />
    </div>
  );
}