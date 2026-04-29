"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AnimatedBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slow drifting for each shard
      gsap.to(".frost-shard", {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        rotation: "random(-8, 8)",
        duration: "random(8, 14)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.4, from: "random" },
      });

      // Pulse the deep glow orbs
      gsap.to(".glow-orb", {
        scale: 1.15,
        opacity: "+=0.1",
        duration: "random(5, 9)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.6, from: "center" },
      });

      // Shimmer lines slow horizontal drift
      gsap.to(".shimmer-line", {
        xPercent: 8,
        duration: "random(10, 18)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.5 },
      });
    }, bgRef);

    return () => ctx.revert();
  }, []);

  const shards = [
    { w: "38vw", h: "52vw", top: "5%", left: "8%", rot: "-14deg", blur: "18px", rx: "40% 60% 55% 45% / 50% 40% 60% 50%", op: 0.22 },
    { w: "28vw", h: "42vw", top: "20%", left: "55%", rot: "18deg", blur: "14px", rx: "55% 45% 40% 60% / 45% 55% 50% 50%", op: 0.18 },
    { w: "50vw", h: "35vw", top: "55%", left: "20%", rot: "-6deg", blur: "22px", rx: "50% 50% 60% 40% / 60% 40% 50% 50%", op: 0.15 },
    { w: "22vw", h: "30vw", top: "10%", left: "72%", rot: "28deg", blur: "10px", rx: "60% 40% 50% 50% / 40% 60% 55% 45%", op: 0.25 },
    { w: "44vw", h: "28vw", top: "72%", left: "60%", rot: "-20deg", blur: "20px", rx: "45% 55% 45% 55% / 55% 45% 60% 40%", op: 0.14 },
    { w: "18vw", h: "26vw", top: "40%", left: "2%", rot: "10deg", blur: "8px", rx: "50% 50% 40% 60% / 50% 60% 40% 50%", op: 0.2 },
  ];

  const orbs = [
    { size: "60vw", top: "10%", left: "15%", color: "rgba(59,130,246,0.18)" },
    { size: "50vw", top: "50%", left: "55%", color: "rgba(96,165,250,0.14)" },
    { size: "35vw", top: "5%", left: "65%", color: "rgba(147,197,253,0.12)" },
    { size: "45vw", top: "65%", left: "5%", color: "rgba(37,99,235,0.15)" },
  ];

  const shimmerLines = [
    { top: "18%", h: "1px", op: 0.18 },
    { top: "36%", h: "2px", op: 0.10 },
    { top: "58%", h: "1.5px", op: 0.14 },
    { top: "77%", h: "1px", op: 0.09 },
  ];

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none"
      style={{
        background: "linear-gradient(160deg, #dbeafe 0%, #93c5fd 35%, #3b82f6 70%, #1d4ed8 100%)",
      }}
    >
      {/* Deep glow orbs — subsurface color pools */}
      {orbs.map((o, i) => (
        <div
          key={`orb-${i}`}
          className="glow-orb absolute rounded-full"
          style={{
            width: o.size,
            height: o.size,
            top: o.top,
            left: o.left,
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${o.color} 0%, transparent 70%)`,
            filter: "blur(48px)",
          }}
        />
      ))}

      {/* Frosted glass shards */}
      {shards.map((s, i) => (
        <div
          key={`shard-${i}`}
          className="frost-shard absolute"
          style={{
            width: s.w,
            height: s.h,
            top: s.top,
            left: s.left,
            borderRadius: s.rx,
            transform: `rotate(${s.rot})`,
            backdropFilter: `blur(${s.blur}) saturate(180%) brightness(1.08)`,
            WebkitBackdropFilter: `blur(${s.blur}) saturate(180%) brightness(1.08)`,
            background: `linear-gradient(
              135deg,
              rgba(255,255,255,${s.op + 0.08}) 0%,
              rgba(191,219,254,${s.op}) 40%,
              rgba(147,197,253,${s.op - 0.04}) 100%
            )`,
            border: "1px solid rgba(255,255,255,0.35)",
            boxShadow: `
              inset 0 1px 0 rgba(255,255,255,0.5),
              inset 0 -1px 0 rgba(59,130,246,0.2),
              0 8px 32px rgba(37,99,235,0.12),
              0 2px 8px rgba(255,255,255,0.15)
            `,
          }}
        />
      ))}

      {/* Refraction edge highlights — thin bright lines along shard edges */}
      {shards.slice(0, 4).map((s, i) => (
        <div
          key={`edge-${i}`}
          className="frost-shard absolute"
          style={{
            width: s.w,
            height: "2px",
            top: s.top,
            left: s.left,
            borderRadius: "999px",
            transform: `rotate(${s.rot}) translateY(-2px)`,
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 40%, rgba(186,230,253,0.8) 60%, transparent 100%)",
            filter: "blur(1px)",
            opacity: 0.6,
          }}
        />
      ))}

      {/* Shimmer lines — internal light refracting across the surface */}
      {shimmerLines.map((l, i) => (
        <div
          key={`shimmer-${i}`}
          className="shimmer-line absolute"
          style={{
            top: l.top,
            left: "-10%",
            width: "120%",
            height: l.h,
            background: `linear-gradient(
              90deg,
              transparent 0%,
              rgba(255,255,255,${l.op}) 20%,
              rgba(186,230,253,${l.op * 1.4}) 50%,
              rgba(255,255,255,${l.op}) 80%,
              transparent 100%
            )`,
            filter: "blur(1.5px)",
          }}
        />
      ))}

      {/* Top specular highlight — like light hitting the topmost glass layer */}
      <div
        className="absolute inset-x-0 top-0"
        style={{
          height: "35%",
          background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom depth vignette */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: "40%",
          background: "linear-gradient(0deg, rgba(29,78,216,0.35) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}