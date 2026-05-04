"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

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
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-28 pb-20 bg-transparent"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative w-full max-w-7xl mx-auto p-12 md:p-24 rounded-[40px] border border-white/40 bg-white/10 backdrop-blur-md shadow-2xl overflow-hidden group">
          {/* Fading Grid Background */}
          <div className="absolute inset-0 hero-grid hero-grid-fade opacity-60 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center">
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
              className="max-w-5xl leading-[1.02] text-navy mb-8"
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
          </div>
        </div>
      </div>
    </section>
  );
}
