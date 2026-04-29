"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth floating animation
      gsap.to(".gradient-blob", {
        x: "random(-40, 40)",
        y: "random(-40, 40)",
        scale: "random(0.95, 1.1)",
        duration: "random(10, 18)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 1,
          from: "random",
        },
      });
    }, bgRef);

    return () => ctx.revert();
  }, []);

  const blobs = [
    {
      size: "60vw",
      top: "20%",
      left: "25%",
      color: "rgba(59,130,246,0.25)",
    },
    {
      size: "50vw",
      top: "60%",
      left: "70%",
      color: "rgba(96,165,250,0.2)",
    },
    {
      size: "40vw",
      top: "10%",
      left: "75%",
      color: "rgba(147,197,253,0.18)",
    },
    {
      size: "55vw",
      top: "75%",
      left: "20%",
      color: "rgba(37,99,235,0.22)",
    },
  ];

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none"
      style={{
        background:
          "linear-gradient(135deg, #e0f2fe 0%, #93c5fd 40%, #3b82f6 100%)",
      }}
    >
      {/* Gradient blobs */}
      {blobs.map((b, i) => (
        <div
          key={i}
          className="gradient-blob absolute rounded-full"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
      ))}
    </div>
  );
}