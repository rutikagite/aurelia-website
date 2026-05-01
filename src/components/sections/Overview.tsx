"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CARDS = [
  {
    id: "01",
    title: "AI Development Services",
    body: "End-to-end AI engineering. Agentic systems, LLM fine-tuning, LangChain, GenAI — built production-ready.",
    cta: "Explore services",
    href: "#services",
    color: "bg-blue-brand",
  },
  {
    id: "02",
    title: "AI Consultancy",
    body: "Strategic AI advisory. We map your business to the right AI architecture before a single line is written.",
    cta: "View consultancy",
    href: "#consultancy",
    color: "bg-blue-soft",
  },
  {
    id: "03",
    title: "Resource Augmentation",
    body: "Vetted AI engineers, on-site or remote. Your team, extended with specialists who ship.",
    cta: "See resources",
    href: "#resources",
    color: "bg-blue-deep",
  },
  {
    id: "04",
    title: "AI Products",
    body: "Purpose-built AI products — analytics intelligence, AI readiness assessments, and more.",
    cta: "See products",
    href: "#products",
    color: "bg-blue-mid",
  },
];

export default function Overview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;

    const totalWidth = track.scrollWidth / 2;

    const tl = gsap.fromTo(
      track,
      { x: 0 },
      {
        x: -totalWidth,
        duration: 40,
        ease: "none",
        repeat: -1,
      }
    );

    const pause = () => tl.pause();
    const play = () => tl.play();

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", play);

    return () => {
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", play);
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-white overflow-hidden border-t border-blue-wash"
    >
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <h2 className="text-3xl font-extrabold text-navy tracking-tight">
          What we do
        </h2>
      </div>

      <div className="relative w-full">
        <div
          ref={trackRef}
          className="flex gap-5 px-6 w-max will-change-transform"
        >
          {[...CARDS, ...CARDS].map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className="group relative w-[270px] h-[220px] shrink-0 bg-blue-wash/50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-blue-pale"
            >
              {/* Top border accent */}
              <div
                className={cn(
                  "absolute top-0 left-0 right-0 h-1",
                  card.color
                )}
              />

              {/* Dot accent */}
              <div
                className={cn(
                  "absolute top-5 right-5 w-2.5 h-2.5 rounded-full",
                  card.color
                )}
              />

              <div className="p-6 h-full flex flex-col justify-between relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="font-bold text-xl text-navy leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-grey-dark font-medium leading-relaxed transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2">
                  {card.body}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center">
                <Link
                  href={card.href}
                  className="flex items-center gap-2 px-6 py-3 bg-navy text-white rounded-full font-bold text-sm translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-blue-brand hover:shadow-lg"
                >
                  {card.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
