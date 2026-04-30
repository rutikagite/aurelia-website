"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frame: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">

      {/* 🌑 Navy-Dominant Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              140deg,
              var(--color-black) 0%,
              var(--color-navy) 25%,
              var(--color-blue-deep) 55%,
              var(--color-navy) 85%,
              var(--color-black) 100%
            )
          `,
        }}
      />

      {/* ✨ Subtle Navy Glow (NOT bright blue) */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            500px circle at ${mousePos.x}px ${mousePos.y}px,
            rgba(26, 74, 138, 0.18),  /* muted mid-blue */
            transparent 70%
          )`,
        }}
      />

      {/* 🔲 Ultra subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* 🌌 Strong vignette for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 35%, rgba(6,13,26,0.85) 100%)",
        }}
      />
    </div>
  );
}