"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AIXLVisual from "../ui/products/AIXLVisual";
import VibelyticsVisual from "../ui/products/VibelyticsVisual";

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    id: "aixl",
    subLabel: "Intelligence Capability Ecosystem",
    title: "AIXL Suite",
    desc: "A unified platform designed to build and scale internal AI excellence. From structured academic training to hands-on laboratory environments.",
    link: "https://aixlacademy.com",
    image: "/images/product_aixl.png",
    modules: [
      { name: "Academy", desc: "Corporate AI Training" },
      { name: "Skills", desc: "Assessment Platform" },
      { name: "Labs", desc: "Sandbox Environments" },
      { name: "Flight", desc: "Intelligence LMS" },
    ]
  },
  {
    id: "vibelytics",
    subLabel: "Natural Language Intelligence",
    title: "Vibelytics",
    desc: "The next generation of data analytics. Query your complex datasets using natural language to extract instant, high-fidelity insights and dashboards.",
    link: "https://aureliainnovatives.com/products/vibelytics",
    image: "/images/product_analytics.png",
  },
];

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="products" className="py-16 md:py-24 bg-[#E2E8F0] text-navy relative" ref={containerRef}>
      {/* Background subtle accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 pointer-events-none" />

      <div className="grid-container relative z-10">
        <div className="max-w-3xl mb-24">
          <div className="text-blue-brand font-bold tracking-widest uppercase text-xs mb-4">Proprietary IP</div>
          <h2 className="mb-6 text-navy font-black tracking-tighter">Software Engineered for Intelligence.</h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            We don't just consult; we build. Our internal product suite accelerates
            AI adoption and provides the infrastructure for data-driven decisions.
          </p>
        </div>

        {/* Stacking Cards Container */}
        {/* The gap-[35vh] ensures the first card is pinned and "steady" while the second one is off-screen,
            then the second one slides up and stacks on top. */}
        <div className="relative flex flex-col gap-[35vh] pb-[10vh]">
          {PRODUCTS.map((prod, index) => (
            <div
              key={prod.id}
              className="sticky top-24 md:top-32 w-full"

              style={{
                zIndex: index + 10,
              }}
            >
              <div className="bg-white p-8 lg:p-16 flex flex-col lg:flex-row gap-12 items-stretch min-h-[600px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-slate-200 rounded-[40px] group transition-all duration-500">
                {/* Text Area */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-blue-brand font-bold text-xs uppercase tracking-widest mb-4">
                    {prod.subLabel}
                  </div>
                  <h3 className="text-3xl lg:text-5xl font-black text-navy mb-6 tracking-tighter leading-tight">
                    {prod.title}
                  </h3>
                  <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed max-w-xl">
                    {prod.desc}
                  </p>

                  {prod.modules && (
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      {prod.modules.map((mod) => (
                        <div key={mod.name} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl group-hover:border-blue-brand/50 transition-colors">
                          <div className="text-sm font-bold text-navy mb-1">{mod.name}</div>
                          <div className="text-[11px] text-slate-500 font-medium leading-tight">{mod.desc}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto">
                    <a
                      href={prod.link}
                      className="button-primary px-8 py-4 inline-flex items-center justify-center font-bold text-white bg-blue-brand rounded-full hover:bg-navy transition-all duration-300 shadow-lg"
                    >
                      Explore {prod.title}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Visual Area */}
                <div className="flex-1 w-full lg:w-auto aspect-video rounded-3xl overflow-hidden relative shadow-2xl border border-slate-200 group-hover:shadow-blue-900/20 transition-all duration-500 flex items-center justify-center">
                  <div className="absolute inset-0 bg-slate-900" />
                  <div className="relative z-10 w-full h-full">
                    {prod.id === "aixl" ? (
                      <AIXLVisual />
                    ) : (
                      <VibelyticsVisual />
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
