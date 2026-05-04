"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

const SIGNALS = [
  "Production AI Systems",
  "Resilient RAG Pipelines",
  "Embedded Expert Teams",
];

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative flex min-h-[760px] w-full items-center justify-center overflow-hidden pt-28 bg-[#F8FAFC]"
    >
      {/* Dynamic Background Spotlight */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.45] transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(86,145,255,0.18) 0%, rgba(56,189,248,0.08) 25%, transparent 60%)`
        }}
      />

      <div className="hero-grid mesh-shift absolute inset-0 opacity-70" />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="ambient-blob absolute left-[-8%] top-[6%] h-[20rem] w-[20rem] rounded-full opacity-80 blur-3xl md:h-[28rem] md:w-[28rem]"
          style={{
            background:
              "radial-gradient(circle, rgba(86,145,255,0.28) 0%, rgba(86,145,255,0) 72%)",
          }}
        />
        <div
          className="ambient-blob absolute right-[-10%] top-[20%] h-[22rem] w-[22rem] rounded-full opacity-70 blur-3xl md:h-[30rem] md:w-[30rem]"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.24) 0%, rgba(56,189,248,0) 72%)",
            animationDelay: "-6s",
          }}
        />
        <div className="absolute inset-x-0 top-[18%] h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-80" />
      </div>


      <div className="grid-container relative z-10 flex flex-col items-center text-center">
        <div
          data-anim
          style={{ transitionDelay: "100ms" }}
          className="pulse-border glass-card mb-8 inline-flex items-center rounded-full px-5 py-2 text-xs font-bold uppercase tracking-[0.26em] text-blue-brand"
        >
          Intelligence Engineering Partner
        </div>

        <h1
          data-anim
          style={{ transitionDelay: "250ms" }}
          className="max-w-5xl leading-[1.02] text-navy"
        >
          AI That&apos;s Built to Move
          <br className="hidden md:block" />
          From <span className="bg-gradient-to-r from-blue-brand via-sky-500 to-cyan-400 bg-clip-text text-transparent">Vision to Deployment</span>.
        </h1>

        <p
          data-anim
          style={{ transitionDelay: "400ms" }}
          className="mb-12 max-w-2xl text-lg font-medium leading-relaxed text-slate-600 md:text-xl"
        >
          We architect mission-critical AI systems for enterprises that
          require production-grade reliability and technical excellence.
        </p>

        <div
          data-anim
          style={{ transitionDelay: "550ms" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link href="#services" className="button-primary w-full sm:w-auto">
            Explore Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>

          <Link
            href="#contact"
            className="glass-card inline-flex w-full items-center justify-center rounded-lg border border-white/70 px-8 py-4 text-base font-bold text-navy transition-all duration-200 hover:shadow-sm sm:w-auto"
          >
            Talk to an Expert
          </Link>
        </div>

        <div
          data-anim
          style={{ transitionDelay: "700ms" }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {SIGNALS.map((signal) => (
            <div
              key={signal}
              className="glass-card rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-600"
            >
              {signal}
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
