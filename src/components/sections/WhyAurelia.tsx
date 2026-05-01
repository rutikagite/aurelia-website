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

      // Reveal cards sequentially as line passes them
      cardsRef.current.forEach((card, i) => {
        const progress = (i + 0.5) / PILLARS.length;
        tl.fromTo(
          card,
          { opacity: 0, y: 30, filter: "blur(10px)" },
          { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.2 },
          progress * 0.8
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="why" className="py-20 bg-off-white border-t border-blue-wash" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-navy tracking-tight">
            Why Aurelia Innovatives?
          </h2>
        </div>

        <div className="relative pt-8 lg:pt-12 pb-8">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[3.5rem] left-8 right-8 h-[2px] bg-blue-pale z-0" />
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-[3.5rem] left-8 right-8 h-[2px] bg-gradient-to-r from-blue-brand via-blue-soft to-blue-deep z-0 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PILLARS.map((pillar, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) cardsRef.current[i] = el;
                }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-white border-2 border-blue-pale flex items-center justify-center text-grey-mid mb-4 group-hover:border-blue-soft group-hover:text-blue-brand transition-colors duration-500 shadow-sm relative z-10">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-navy mb-2">{pillar.title}</h3>
                <p className="text-grey-dark text-sm font-medium leading-relaxed max-w-[250px] mx-auto">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
