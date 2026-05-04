"use client";

import { useEffect, useState, useRef } from "react";

export default function AnimatedBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

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
    <div ref={containerRef} className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-white">
      
      {/* 1. Subtle Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />

      {/* 2. Floating Technical Blobs */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-[100px] animate-blob" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-50/30 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-blue-50/40 rounded-full blur-[80px] animate-blob animation-delay-4000" />

      {/* 3. Mouse-Following Intelligence Spotlight */}
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(
            600px circle at ${mousePos.x}px ${mousePos.y}px,
            rgba(42, 109, 217, 0.04),
            transparent 80%
          )`,
        }}
      />

      {/* 4. High-Precision Technical Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#000 1px, transparent 1px),
            linear-gradient(90deg, #000 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 5. Dots Pattern (Subtle detail) */}
      <div
        className="absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage: `radial-gradient(#2A6DD9 0.5px, transparent 0.5px)`,
          backgroundSize: "30px 30px",
        }}
      />

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 10s infinite alternate cubic-bezier(0.45, 0, 0.55, 1);
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}