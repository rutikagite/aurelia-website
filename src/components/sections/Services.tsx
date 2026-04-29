"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import {
  Database, Server, Workflow, Bot, BrainCircuit, Code2,
  TerminalSquare, Network, Cpu, LayoutTemplate, Box, Boxes,
  GitBranch, Layers, Zap, Shield, Globe, Search, FileCode
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FLOW_STEPS = [
  { num: "1", title: "Discovery", desc: "Understand your use case" },
  { num: "2", title: "Architecture", desc: "Design the right stack" },
  { num: "3", title: "Development", desc: "Build with LangChain, Agentic AI, fine-tuned LLMs" },
  { num: "4", title: "Deployment", desc: "Ship to production environments" },
  { num: "5", title: "Iteration", desc: "Improve with real-world feedback" },
];

// ─── 5-COLUMN VERSION ────────────────────────────────────────────────────────
const TOOLS_AND_CAPS_5 = [
  // Col 1
  [
    { type: "cap", text: "Agentic AI Systems" },
    { type: "icon", icon: <Bot className="w-8 h-8 text-slate-400" /> },
    { type: "cap", text: "RAG Pipelines" },
    { type: "icon", icon: <Database className="w-8 h-8 text-slate-400" /> },
    { type: "cap", text: "Prompt Engineering" },
    { type: "icon", icon: <TerminalSquare className="w-8 h-8 text-slate-400" /> },
  ],
  // Col 2
  [
    { type: "icon", icon: <Network className="w-8 h-8 text-slate-400" /> },
    { type: "cap", text: "LLM Fine-Tuning" },
    { type: "icon", icon: <BrainCircuit className="w-8 h-8 text-slate-400" /> },
    { type: "cap", text: "AI Integration & APIs" },
    { type: "icon", icon: <Server className="w-8 h-8 text-slate-400" /> },
    { type: "cap", text: "Vector Search" },
  ],
  // Col 3 (middle — staggered)
  [
    { type: "cap", text: "LangChain Development" },
    { type: "icon", icon: <Workflow className="w-8 h-8 text-slate-400" /> },
    { type: "cap", text: "GenAI Applications" },
    { type: "icon", icon: <LayoutTemplate className="w-8 h-8 text-slate-400" /> },
    { type: "cap", text: "Python AI Engineering" },
    { type: "icon", icon: <Code2 className="w-8 h-8 text-slate-400" /> },
  ],
  // Col 4
  [
    { type: "icon", icon: <Layers className="w-8 h-8 text-slate-400" /> },
    { type: "cap", text: "Multi-Agent Systems" },
    { type: "icon", icon: <Boxes className="w-8 h-8 text-slate-400" /> },
    { type: "cap", text: "Production Deployment" },
    { type: "icon", icon: <Cpu className="w-8 h-8 text-slate-400" /> },
    { type: "cap", text: "Model Evaluation" },
  ],
  // Col 5
  [
    { type: "cap", text: "Cloud AI Infra" },
    { type: "icon", icon: <Globe className="w-8 h-8 text-slate-400" /> },
    { type: "cap", text: "CI/CD for AI" },
    { type: "icon", icon: <GitBranch className="w-8 h-8 text-slate-400" /> },
    { type: "cap", text: "AI Security" },
    { type: "icon", icon: <Shield className="w-8 h-8 text-slate-400" /> },
  ],
];

// ─── 7-COLUMN VERSION ────────────────────────────────────────────────────────
const TOOLS_AND_CAPS_7 = [
  // Col 1
  [
    { type: "cap", text: "Agentic AI Systems" },
    { type: "icon", icon: <Bot className="w-7 h-7 text-slate-400" /> },
    { type: "cap", text: "RAG Pipelines" },
    { type: "icon", icon: <Database className="w-7 h-7 text-slate-400" /> },
    { type: "cap", text: "Prompt Engineering" },
  ],
  // Col 2
  [
    { type: "icon", icon: <Network className="w-7 h-7 text-slate-400" /> },
    { type: "cap", text: "LLM Fine-Tuning" },
    { type: "icon", icon: <BrainCircuit className="w-7 h-7 text-slate-400" /> },
    { type: "cap", text: "AI Integration & APIs" },
    { type: "icon", icon: <Server className="w-7 h-7 text-slate-400" /> },
  ],
  // Col 3
  [
    { type: "cap", text: "LangChain Dev" },
    { type: "icon", icon: <Workflow className="w-7 h-7 text-slate-400" /> },
    { type: "cap", text: "GenAI Apps" },
    { type: "icon", icon: <LayoutTemplate className="w-7 h-7 text-slate-400" /> },
    { type: "cap", text: "Python AI Eng." },
  ],
  // Col 4 (middle — staggered)
  [
    { type: "icon", icon: <Layers className="w-7 h-7 text-slate-400" /> },
    { type: "cap", text: "Multi-Agent Systems" },
    { type: "icon", icon: <Boxes className="w-7 h-7 text-slate-400" /> },
    { type: "cap", text: "Production Deploy" },
    { type: "icon", icon: <Cpu className="w-7 h-7 text-slate-400" /> },
  ],
  // Col 5
  [
    { type: "cap", text: "Cloud AI Infra" },
    { type: "icon", icon: <Globe className="w-7 h-7 text-slate-400" /> },
    { type: "cap", text: "CI/CD for AI" },
    { type: "icon", icon: <GitBranch className="w-7 h-7 text-slate-400" /> },
    { type: "cap", text: "AI Security" },
  ],
  // Col 6
  [
    { type: "icon", icon: <Shield className="w-7 h-7 text-slate-400" /> },
    { type: "cap", text: "Semantic Search" },
    { type: "icon", icon: <Search className="w-7 h-7 text-slate-400" /> },
    { type: "cap", text: "Model Evaluation" },
    { type: "icon", icon: <Zap className="w-7 h-7 text-slate-400" /> },
  ],
  // Col 7
  [
    { type: "cap", text: "Vector DBs" },
    { type: "icon", icon: <Box className="w-7 h-7 text-slate-400" /> },
    { type: "cap", text: "API Development" },
    { type: "icon", icon: <FileCode className="w-7 h-7 text-slate-400" /> },
    { type: "cap", text: "Edge Deployment" },
  ],
];

// ─── PICK YOUR VARIANT ───────────────────────────────────────────────────────
// Change these two lines to switch between 5 and 7 columns:
const COLS = 7;                          // 5 or 7
const TOOLS_AND_CAPS = TOOLS_AND_CAPS_7; // TOOLS_AND_CAPS_5 or TOOLS_AND_CAPS_7

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blurTargetRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);

  const midCol = Math.floor(COLS / 2); // 2 for 5-col, 3 for 7-col

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(blurTargetRef.current, {
        filter: "blur(16px)",
        opacity: 0.3,
        scale: 0.95,
        scrollTrigger: {
          trigger: scrollerRef.current,
          start: "top 70%",
          end: "top 10%",
          scrub: true,
        },
      });

      columnsRef.current.forEach((col, i) => {
        if (!col) return;
        gsap.to(col, {
          y: i === midCol ? -150 : -80,
          scrollTrigger: {
            trigger: scrollerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [midCol]);

  // Tailwind grid classes (must be complete strings, not dynamic)
  const gridClass = COLS === 7
    ? "grid grid-cols-2 md:grid-cols-7 gap-4 md:gap-5 pt-[30vh]"
    : "grid grid-cols-2 md:grid-cols-5 gap-5 md:gap-6 pt-[30vh]";

  return (
    <section id="services" className="relative bg-slate-50 min-h-screen" ref={containerRef}>

      {/* PINNED BACKGROUND CONTENT */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden z-0">
        <div ref={blurTargetRef} className="container mx-auto px-6 max-w-7xl pt-24 pb-12 transition-all will-change-transform">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-6">AI Development Services</div>
            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-slate-900 tracking-tight mb-8">
              From Idea to <br className="hidden sm:block" /> Production AI.
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 font-medium">
              We handle the full engineering lifecycle — <br className="hidden md:block" />
              so your team focuses on outcomes, not infrastructure.
            </p>
          </div>

          {/* FLOW TIMELINE */}
          <div className="hidden lg:flex justify-between relative px-12 mb-12">
            <div className="absolute top-8 left-24 right-24 h-[2px] bg-slate-200 z-0" />
            <div className="absolute top-8 left-24 right-24 h-[2px] bg-blue-600 z-0 origin-left scale-x-100" />
            {FLOW_STEPS.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center w-48 text-center group">
                <div className="w-16 h-16 rounded-2xl border-2 border-blue-600 bg-blue-600 flex items-center justify-center font-bold text-xl text-white mb-6 shadow-md">
                  {step.num}
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-600 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* MOBILE FLOW TIMELINE */}
          <div className="lg:hidden flex flex-col gap-6">
            {FLOW_STEPS.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCROLLING FOREGROUND (THE TILES) */}
      <div ref={scrollerRef} className="relative z-10 w-full pb-[20vh] -mt-[20vh]">
        <div className="container mx-auto px-4 max-w-[100vw] overflow-hidden">
          <div className={gridClass}>
            {TOOLS_AND_CAPS.map((col, i) => (
              <div
                key={i}
                ref={(el) => { if (el) columnsRef.current[i] = el; }}
                className={cn(
                  "flex flex-col gap-4 md:gap-5",
                  i === midCol ? "md:pt-32" : "md:pt-0"
                )}
              >
                {col.map((item, j) => (
                  <div
                    key={j}
                    className={cn(
                      "glass-card rounded-2xl border border-white/60 shadow-xl backdrop-blur-xl bg-white/70 flex items-center justify-center transition-transform hover:scale-105 hover:bg-white/90",
                      item.type === "icon"
                        ? "aspect-square p-4"
                        : COLS === 7 ? "min-h-[100px] p-4" : "min-h-[120px] p-6"
                    )}
                  >
                    {item.type === "icon" ? (
                      item.icon
                    ) : (
                      <h4 className={cn(
                        "font-bold text-slate-800 text-center leading-tight",
                        COLS === 7 ? "text-sm md:text-base" : "text-lg md:text-xl"
                      )}>
                        {item.text}
                      </h4>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}