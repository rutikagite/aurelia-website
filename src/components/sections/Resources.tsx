"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, MonitorSmartphone, Zap, Users, ArrowRight, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const MODELS = [
  {
    id: "onsite",
    title: "On-Site Deployment",
    desc: "Our engineers work within your premises. Full-time, accountable, embedded.",
    icon: Building2,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    id: "remote",
    title: "Remote Dedicated",
    desc: "Same commitment, zero location friction. Timezone-matched when required.",
    icon: MonitorSmartphone,
    color: "text-teal-600",
    bg: "bg-teal-100",
  },
  {
    id: "hybrid",
    title: "Hybrid Sprints",
    desc: "Short-cycle, high-output engagements. Ideal for POCs and fast prototyping.",
    icon: Zap,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
];

export default function Resources() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<(HTMLDivElement | null)[]>([]);
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);
  const nodeRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Node initialization (fade in when section enters)
      gsap.fromTo(
        nodeRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
          },
        }
      );

      // Chips staggered fade in
      gsap.fromTo(
        chipsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.8,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
          },
        }
      );

      // Block Animations
      // 1. On-Site (Slide from left)
      if (blocksRef.current[0]) {
        gsap.fromTo(
          blocksRef.current[0],
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: blocksRef.current[0],
              start: "top 80%",
            },
          }
        );
      }

      // 2. Remote (Fade + Upward)
      if (blocksRef.current[1]) {
        gsap.fromTo(
          blocksRef.current[1],
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: blocksRef.current[1],
              start: "top 80%",
            },
          }
        );
      }

      // 3. Hybrid (Scale in + blur)
      if (blocksRef.current[2]) {
        gsap.fromTo(
          blocksRef.current[2],
          { scale: 0.9, opacity: 0, filter: "blur(10px)" },
          {
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: blocksRef.current[2],
              start: "top 85%",
            },
          }
        );
      }

      // Connecting Lines Drawing
      linesRef.current.forEach((line) => {
        if (!line) return;
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power2.out",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: line,
              start: "top 75%",
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="resources" className="py-10 lg:py-12 bg-slate-50 relative overflow-hidden" ref={containerRef}>
      {/* Background Soft Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-100 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-teal-50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">

          {/* LEFT: STICKY INFO */}
          <div className="w-full lg:w-5/12 relative">
            <div className="lg:sticky lg:top-40 flex flex-col items-start text-left mb-8 lg:mb-0">
              <div className="text-indigo-600 font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Resource Augmentation
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.15]">
                The AI Talent You Need.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">When You Need It.</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium mb-10 max-w-md">
                Hire dedicated AI engineers who integrate with your team — on-site or remote, for sprints or long-term builds.
              </p>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-2xl hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
              >
                Request Talent
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT: SCROLLING BLOCKS + SYSTEM NODE */}
          <div className="w-full lg:w-7/12 relative flex">

            {/* SCROLLING BLOCKS */}
            <div className="w-full lg:w-2/3 flex flex-col gap-8 lg:gap-12 py-8 lg:py-[10vh] relative z-10 lg:pr-8">
              {MODELS.map((model, i) => (
                <div key={model.id} className="relative">
                  <div
                    ref={(el) => { if (el) blocksRef.current[i] = el; }}
                    className="glass-card bg-white/40 backdrop-blur-xl border border-white/80 p-6 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(37,99,235,0.08)] transition-shadow duration-500 relative z-20 group flex flex-col sm:flex-row items-start sm:items-center gap-6"
                  >
                    <div className={cn("shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center", model.bg, model.color)}>
                      <model.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">{model.title}</h3>
                      <p className="text-slate-600 font-medium text-sm leading-relaxed">{model.desc}</p>
                    </div>

                    {/* Specialized Animations inside blocks */}
                    {i === 1 && (
                      <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-teal-400 animate-pulse shadow-[0_0_12px_rgba(45,212,191,0.8)]" />
                    )}
                    {i === 2 && (
                      <div className="absolute bottom-0 left-8 right-8 h-1 bg-slate-100 rounded-t-lg overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="h-full bg-indigo-500 w-full origin-left animate-[progress_2s_ease-in-out_infinite]" />
                      </div>
                    )}
                  </div>

                  {/* SVG Connection Line (Desktop Only) */}
                  <div className="hidden lg:block absolute top-1/2 left-[calc(100%-1rem)] w-[calc(50%+2rem)] h-[2px] -translate-y-1/2 z-0 overflow-hidden">
                    <div
                      ref={(el) => { if (el) linesRef.current[i] = el; }}
                      className={cn("w-full h-full bg-gradient-to-r to-transparent",
                        i === 0 ? "from-blue-200" : i === 1 ? "from-teal-200" : "from-indigo-200"
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Tailwind Custom Keyframes Extension */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes progress {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); transform-origin: left; }
          50.1% { transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}} />
    </section>
  );
}
