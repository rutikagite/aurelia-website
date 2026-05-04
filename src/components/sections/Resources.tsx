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
    color: "text-blue-brand",
    bg: "bg-blue-wash",
  },
  {
    id: "remote",
    title: "Remote Dedicated",
    desc: "Same commitment, zero location friction. Timezone-matched when required.",
    icon: MonitorSmartphone,
    color: "text-blue-soft",
    bg: "bg-blue-wash",
  },
  {
    id: "hybrid",
    title: "Hybrid Sprints",
    desc: "Short-cycle, high-output engagements. Ideal for POCs and fast prototyping.",
    icon: Zap,
    color: "text-blue-deep",
    bg: "bg-blue-pale",
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
    <section id="resources" className="py-16 md:py-[120px] bg-white relative overflow-hidden" ref={containerRef}>
      {/* Background Soft Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-wash rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-blue-pale rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">

          {/* LEFT: STICKY INFO */}
          <div className="w-full lg:w-1/2 relative">
            <div className="lg:sticky lg:top-40 flex flex-col items-start text-left mb-8 lg:mb-0">
              <div className="text-blue-brand font-bold tracking-widest uppercase text-xs mb-6 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Resource Augmentation
              </div>
              <h2 className="font-black text-navy tracking-tighter mb-8 leading-[1.05]">
                The AI Talent You Need.<br />
                <span className="text-blue-brand">When You Need It.</span>
              </h2>
              <p className="text-lg text-slate-600 font-medium mb-10 max-w-md">
                Hire dedicated AI engineers who integrate with your team — on-site or remote, for sprints or long-term builds.
              </p>

              <a
                href="#contact"
                className="button-primary px-8 py-4 shadow-xl shadow-blue-brand/20"
              >
                Request Talent
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT: SCROLLING BLOCKS */}
          <div className="w-full lg:w-1/2 relative">
            <div className="w-full flex flex-col gap-8 lg:gap-12 py-8 lg:py-[5vh] relative z-10">
              {MODELS.map((model, i) => (
                <div key={model.id} className="relative">
                  <div
                    ref={(el) => { if (el) blocksRef.current[i] = el; }}
                    className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-brand/30 transition-all duration-300 relative z-20 group flex flex-col sm:flex-row items-start sm:items-center gap-6"
                  >
                    <div className={cn("shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center", model.bg, model.color)}>
                      <model.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-navy mb-2">{model.title}</h3>
                      <p className="text-slate-600 font-medium text-sm leading-relaxed">{model.desc}</p>
                    </div>
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
