"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowRight, Activity, BrainCircuit, Users, Boxes } from "lucide-react";
import { cn } from "@/lib/utils";

const CARDS = [
  {
    id: "01",
    title: "AI Development",
    body: "Production-grade agentic systems and custom LLM integrations.",
    cta: "Explore Services",
    href: "#services",
    icon: <BrainCircuit className="w-6 h-6" />,
    color: "text-blue-brand",
    bg: "bg-blue-50",
  },
  {
    id: "02",
    title: "Strategic Advisory",
    body: "Expert consultancy to architect your organization's AI roadmap.",
    cta: "View Strategy",
    href: "#consultancy",
    icon: <Activity className="w-6 h-6" />,
    color: "text-blue-brand",
    bg: "bg-blue-50",
  },
  {
    id: "03",
    title: "Talent Solutions",
    body: "Vetted AI engineers embedded directly into your technical team.",
    cta: "Request Talent",
    href: "#resources",
    icon: <Users className="w-6 h-6" />,
    color: "text-blue-brand",
    bg: "bg-blue-50",
  },
  {
    id: "04",
    title: "Software Products",
    body: "Proprietary IP built to accelerate your data intelligence.",
    cta: "See Products",
    href: "#products",
    icon: <Boxes className="w-6 h-6" />,
    color: "text-blue-brand",
    bg: "bg-blue-50",
  },
];

export default function Overview() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    // Calculate width of one full set (1/4 of the total content since we duplicate 4 times)
    const setWidth = track.scrollWidth / 4;

    const animation = gsap.fromTo(
      track,
      { x: 0 },
      {
        x: -setWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      }
    );

    const pause = () => animation.pause();
    const play = () => animation.play();

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", play);

    return () => {
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", play);
      animation.kill();
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="grid-container mb-16">
        <div className="max-w-3xl">
          <div className="text-blue-brand font-bold tracking-widest uppercase text-xs mb-4">Our Ecosystem</div>
          <h2 className="text-navy font-black tracking-tighter">
            Architecting the Future of Enterprise Intelligence.
          </h2>
        </div>
      </div>

      <div className="relative w-full">
        {/* Gradients for smooth fade out at edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-6 w-max will-change-transform"
        >
          {/* We duplicate 4 times to ensure no gaps on high-res monitors */}
          {[...CARDS, ...CARDS, ...CARDS, ...CARDS].map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className="group relative w-[320px] h-[240px] shrink-0 bg-slate-50 rounded-3xl border border-slate-200 p-8 flex flex-col justify-between hover:border-blue-brand/30 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col gap-4">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 group-hover:bg-blue-brand group-hover:text-white", card.bg, card.color)}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-navy leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed group-hover:text-navy transition-colors">
                  {card.body}
                </p>
              </div>

              <div className="mt-auto">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-blue-brand font-bold text-xs uppercase tracking-widest hover:text-navy transition-colors"
                >
                  {card.cta}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Decorative Number */}
              <div className="absolute top-8 right-8 text-4xl font-black text-slate-200 group-hover:text-blue-50 transition-colors pointer-events-none">
                {card.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
