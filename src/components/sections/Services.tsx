"use client";

import { useEffect, useRef, useState, cloneElement, ReactElement } from "react";
import { gsap } from "gsap";
import {
  Bot, Database, TerminalSquare, Network, BrainCircuit, Server,
  Workflow, LayoutTemplate, Code2, Layers, Boxes, Cpu,
  Globe, GitBranch, Shield, Search, Zap, Box, FileCode
} from "lucide-react";
import { cn } from "@/lib/utils";

const CAPABILITIES = [
  { text: "Agentic AI Systems", icon: <Bot className="w-5 h-5" /> },
  { text: "RAG Pipelines", icon: <Database className="w-5 h-5" /> },
  { text: "Prompt Engineering", icon: <TerminalSquare className="w-5 h-5" /> },
  { text: "LLM Fine-Tuning", icon: <BrainCircuit className="w-5 h-5" /> },
  { text: "AI Integration & APIs", icon: <Server className="w-5 h-5" /> },
  { text: "Vector Search", icon: <Search className="w-5 h-5" /> },
  { text: "LangChain Dev", icon: <Workflow className="w-5 h-5" /> },
  { text: "GenAI Applications", icon: <LayoutTemplate className="w-5 h-5" /> },
  { text: "Python AI Engineering", icon: <Code2 className="w-5 h-5" /> },
  { text: "Multi-Agent Systems", icon: <Layers className="w-5 h-5" /> },
  { text: "Production Deployment", icon: <Cpu className="w-5 h-5" /> },
  { text: "Model Evaluation", icon: <Zap className="w-5 h-5" /> },
  { text: "Cloud AI Infra", icon: <Globe className="w-5 h-5" /> },
  { text: "CI/CD for AI", icon: <GitBranch className="w-5 h-5" /> },
  { text: "AI Security", icon: <Shield className="w-5 h-5" /> },
  { text: "Semantic Search", icon: <Search className="w-5 h-5" /> },
  { text: "Vector DBs", icon: <Box className="w-5 h-5" /> },
  { text: "API Development", icon: <FileCode className="w-5 h-5" /> },
  { text: "Edge Deployment", icon: <Network className="w-5 h-5" /> },
];

function MarqueeRow({ items, direction = "left", speed = 40 }: { items: typeof CAPABILITIES, direction?: "left" | "right", speed?: number }) {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rowRef.current) return;

    const row = rowRef.current;
    const totalWidth = row.scrollWidth / 4;

    const animation = gsap.to(row, {
      x: direction === "left" ? -totalWidth : 0,
      duration: speed,
      ease: "none",
      repeat: -1,
      startAt: { x: direction === "left" ? 0 : -totalWidth }
    });

    return () => {
      animation.kill();
    };
  }, [direction, speed]);

  return (
    <div className="overflow-hidden py-4">
      <div ref={rowRef} className="flex gap-4 whitespace-nowrap w-fit">
        {[...items, ...items, ...items, ...items].map((item, i) => (

          <div
            key={i}
            className="flex items-center gap-3 px-6 py-4 bg-white border border-blue-pale rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-brand/50 hover:bg-blue-wash group shrink-0"
          >
            <div className="p-2 bg-blue-wash rounded-xl group-hover:bg-blue-pale group-hover:text-blue-brand transition-colors text-grey-dark">
              {item.icon}
            </div>
            <span className="font-bold text-navy text-sm md:text-base tracking-tight">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const PROCESS_STEPS = [
  {
    title: "AI Strategy & Architecture",
    desc: "We define the model mix, data flow, and agentic workflows to solve your specific business problem.",
    icon: <BrainCircuit className="w-6 h-6" />,
  },
  {
    title: "Engineering & RAG Pipelines",
    desc: "Building high-performance retrieval systems and robust data ingestion for grounded AI responses.",
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "Agentic Workflow Development",
    desc: "Implementing autonomous agentic systems that can reason, use tools, and execute complex tasks.",
    icon: <Bot className="w-6 h-6" />,
  },
  {
    title: "Production Deployment",
    desc: "Containerizing, deploying, and monitoring AI systems at scale with full observability and security.",
    icon: <Server className="w-6 h-6" />,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Split capabilities into 3 rows
  const row1 = CAPABILITIES.slice(0, 7);
  const row2 = CAPABILITIES.slice(7, 13);
  const row3 = CAPABILITIES.slice(13);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#E2E8F0] relative overflow-hidden"
    >
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 pointer-events-none" />

      <div className="grid-container relative z-10">
        <div className="max-w-3xl mb-20">
          <div className="text-blue-brand font-bold tracking-widest uppercase text-xs mb-4">Core Capabilities</div>
          <h2 className="text-navy mb-8 font-black tracking-tighter">
            AI Engineering for the Production Environment.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
            We specialize in building the infrastructure and orchestration layers
            required to turn experimental models into mission-critical software.
          </p>
        </div>

        {/* PROCESS STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 md:mb-32">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon.type;

            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-brand/50 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-blue-50 text-blue-brand group-hover:bg-blue-brand group-hover:text-white transition-all duration-300">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold leading-tight text-navy mb-4">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600">
                    {step.desc}
                  </p>
                </div>

                {/* Subtle Decorative Icon */}
                <div className="absolute -right-4 -bottom-4 text-navy opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <Icon size={100} strokeWidth={1} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="text-navy font-black tracking-tighter text-3xl">
            Technical Excellence.
          </h2>
        </div>
      </div>

      {/* MARQUEE SECTION */}
      <div className="relative py-10">
        {/* Background Gradients for fade effect */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex flex-col gap-2">
          <MarqueeRow items={row1} direction="left" speed={40} />
          <MarqueeRow items={row2} direction="right" speed={45} />
          <MarqueeRow items={row3} direction="left" speed={35} />
        </div>
      </div>
    </section>
  );
}

