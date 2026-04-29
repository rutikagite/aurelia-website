"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    title: "AI Readiness Audit",
    body: "Is your data, team, and infrastructure ready for AI? We'll tell you exactly where you stand.",
  },
  {
    title: "Use Case Prioritisation",
    body: "Not every problem needs AI. We identify the ones where AI creates disproportionate value.",
  },
  {
    title: "Architecture Design",
    body: "Model selection, data pipelines, infrastructure — designed before the first sprint begins.",
  },
  {
    title: "Build vs Buy Analysis",
    body: "Custom model or third-party API? We make the decision defensible, not just fast.",
  },
  {
    title: "AI Governance & Ethics",
    body: "Compliance, bias audits, explainability frameworks — responsible AI from day one.",
  },
  {
    title: "Ongoing AI Advisory",
    body: "Retained strategic guidance as your AI scales, evolves, and creates new questions.",
  },
];

export default function Consultancy() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Group cards into batches of 2
      for (let i = 0; i < cardsRef.current.length; i += 2) {
        const batch = [cardsRef.current[i], cardsRef.current[i + 1]].filter(Boolean);

        gsap.fromTo(
          batch,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: batch[0],
              start: "top 85%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="consultancy" className="py-32 backdrop-blur-xl relative border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-20 text-center max-w-4xl mx-auto">
          <div className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4">AI Consultancy</div>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-6">
            Strategy Before a Single <br className="hidden sm:block" /> Line of Code.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            We assess your data, systems, and goals — <br className="hidden sm:block" />
            then prescribe an AI roadmap that actually fits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="group p-8 rounded-3xl h-full border border-white/15 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(24px) saturate(180%)",
                WebkitBackdropFilter: "blur(24px) saturate(180%)",
              }}
            >
              {/* Blur overlay hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 to-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500 shadow-sm">
                0{i + 1}
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">{card.title}</h3>
              <p className="text-slate-600 font-medium text-sm leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
