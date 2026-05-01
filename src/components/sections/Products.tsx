"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    id: "aixl",
    subLabel: "AI Capability Building Ecosystem",
    title: "AIXL Suite",
    desc: "An integrated platform for organisations building internal AI capability — from structured learning to hands-on project execution.",
    link: "https://aixlacademy.com",
    image: "/images/product_aixl.png",
    modules: [
      { name: "AIXL Academy", link: "https://aixlacademy.com" },
      { name: "AIXL Labs", link: "https://aixlacademy.com/labs" },
      { name: "AIXL Skills", link: "https://aixlacademy.com/skills" },
      { name: "AIXL Flight", link: "https://aixlacademy.com/flight" },
    ]
  },
  {
    id: "analytics",
    subLabel: "AI-Powered Business Intelligence",
    title: "Analytics Intelligence Platform",
    desc: "Transforms raw data into clear, actionable intelligence — connecting signal detection, correlation analysis, and predictive insights.",
    link: "https://aureliainnovatives.com/products/analytics",
    image: "/images/product_analytics.png",
  },
];

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pinning the left content
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 10%",
          end: "bottom bottom",
          pin: leftColRef.current,
          pinSpacing: false,
          onUpdate: (self) => {
            if (self.progress > 0.5) {
              setActiveIndex(1);
            } else {
              setActiveIndex(0);
            }
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" className="py-20 bg-navy text-white relative border-t border-blue-deep" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-blue-soft font-bold tracking-widest uppercase text-sm mb-4 text-center lg:text-left">
          Products
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-16 text-center lg:text-left">
          Built Internally. Designed for Real Use.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
          {/* LEFT COLUMN - Sticky Details */}
          <div ref={leftColRef} className="lg:h-[70vh] flex flex-col justify-center relative z-20">
            {PRODUCTS.map((prod, i) => (
              <div
                key={prod.id}
                className={cn(
                  "absolute lg:static top-0 left-0 right-0 transition-all duration-700 ease-in-out",
                  activeIndex === i ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-8 absolute pointer-events-none lg:hidden",
                  "lg:block lg:opacity-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2",
                  activeIndex === i && "lg:opacity-100 lg:translate-y-[-50%]"
                )}
              >
                <div className="text-blue-soft font-bold text-sm uppercase tracking-wider mb-4">
                  {prod.subLabel}
                </div>
                <h2 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-6">
                  {prod.title}
                </h2>
                <p className="text-lg text-blue-pale font-medium mb-8 max-w-md leading-relaxed">
                  {prod.desc}
                </p>

                {prod.modules && (
                  <div className="flex flex-wrap gap-2 mb-10">
                    {prod.modules.map((mod) => (
                      <a
                        key={mod.name}
                        href={mod.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-blue-deep border border-blue-mid rounded-md text-xs font-semibold text-blue-pale hover:bg-blue-mid hover:text-white transition-colors"
                      >
                        {mod.name}
                      </a>
                    ))}
                  </div>
                )}

                <a
                  href={prod.link}
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-navy bg-white rounded-full hover:bg-blue-brand hover:text-white transition-all duration-300 shadow-xl hover:shadow-blue-brand/30"
                >
                  {prod.id === "aixl" ? "Explore AIXL Suite" : "Explore Analytics Platform"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN - Scrolling Images */}
          <div className="flex flex-col gap-[10vh] lg:gap-[40vh] py-[5vh] lg:py-[15vh]">
            {PRODUCTS.map((prod, i) => (
              <div
                key={`img-${prod.id}`}
                className={cn(
                  "relative rounded-3xl overflow-hidden shadow-2xl transition-all duration-700",
                  activeIndex === i ? "scale-100 opacity-100 border-4 border-slate-700" : "scale-95 opacity-30 lg:opacity-40 border-4 border-transparent blur-[2px]"
                )}
              >
                <div className="absolute top-0 left-0 right-0 h-12 bg-blue-deep flex items-center px-4 border-b border-blue-mid gap-2 z-10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-auto pt-12 object-cover bg-blue-wash"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
