"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  {
    title: "Engineering First",
    desc: "We don't just advise. We ship. Our team is comprised of senior AI engineers.",
  },
  {
    title: "Technology Agnostic",
    desc: "We use the right model for the job — OpenAI, Anthropic, or open-source local models.",
  },
  {
    title: "Security Native",
    desc: "Enterprise-grade data privacy. Your data never trains public models.",
  },
  {
    title: "Rapid Prototyping",
    desc: "From concept to working POC in weeks, not months.",
  },
];

export default function WhyAurelia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      // Draw horizontal line
      tl.fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: "left center", duration: 1, ease: "none" },
        0
      );

      // Reveal cards sequentially
      cardsRef.current.forEach((card, i) => {
        const progress = (i + 0.5) / PILLARS.length;
        tl.fromTo(
          card,
          { opacity: 0, y: 20, filter: "blur(8px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.2 },
          progress * 0.8
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why" className="py-16 md:py-24 bg-[#F8FAFC] border-t border-slate-100" ref={containerRef}>
      <div className="grid-container">
        <div className="mb-20 max-w-3xl">
          <div className="text-blue-brand font-bold tracking-widest uppercase text-xs mb-4">The Aurelia Advantage</div>
          <h2 className="text-navy font-black tracking-tighter">
            Execution Excellence.
          </h2>
        </div>

        <div className="relative pt-12 pb-8">
          {/* Connecting Line (Desktop only) - Perfectly centered with 12-unit icons */}
          <div className="hidden lg:block absolute top-[4.5rem] left-8 right-8 h-[1px] bg-slate-200 z-0" />
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-[4.5rem] left-8 right-8 h-[1px] bg-blue-brand z-0 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {PILLARS.map((pillar, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
                className="flex flex-col items-start lg:items-center lg:text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 mb-6 group-hover:border-blue-brand group-hover:text-blue-brand transition-all duration-500 shadow-sm relative z-10 bg-white">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 tracking-tight">{pillar.title}</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-[250px]">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

