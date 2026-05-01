"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const LINES = [
  { text: "$ run audit --target=prod", delay: 0.5 },
  { text: "> establishing secure link... OK", delay: 1.5 },
  { text: "> scanning dimensions...", delay: 2.5 },
  { label: "DATA", value: 62, delay: 3.5 },
  { label: "INFRA", value: 41, delay: 4.5 },
  { label: "TEAM", value: 78, delay: 5.5 },
  { label: "GOV", value: 35, delay: 6.5 },
];

export default function TerminalAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const verdictRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      LINES.forEach((_, i) => {
        tl.to({}, {
          duration: 0.1,
          onStart: () => setVisibleLines(i + 1),
        }, LINES[i].delay);
      });

      tl.fromTo(
        verdictRef.current,
        { opacity: 0, scale: 0.8 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 0.5, 
          ease: "back.out(2)",
          onComplete: () => {
            gsap.to(verdictRef.current, {
              boxShadow: "0 0 20px rgba(239, 68, 68, 0.15)",
              borderColor: "rgba(239, 68, 68, 0.4)",
              duration: 1,
              repeat: -1,
              yoyo: true
            });
          }
        },
        "+=0.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full bg-white rounded-xl overflow-hidden flex flex-col font-mono text-[10px] relative border border-slate-200 shadow-inner">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Terminal Header */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 border-b border-slate-200">
        <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
        <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
        <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-slate-400 text-[8px] uppercase tracking-widest font-bold">Aurelia_Innovatives_v4.0</span>
      </div>

      {/* Terminal Content */}
      <div className="p-4 space-y-2 overflow-hidden flex-1 relative bg-white">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex flex-col gap-1">
            {line.label ? (
              <div className="flex items-center gap-3">
                <span className="text-blue-600 font-bold w-10">{line.label}:</span>
                <div className="flex-1 h-2 bg-slate-100 rounded-sm overflow-hidden relative">
                  <div 
                    className="h-full bg-blue-500/80" 
                    style={{ width: `${line.value}%` }} 
                  />
                  <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[7px] text-slate-500 font-bold">
                    {line.value}%
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-slate-800 font-bold opacity-90">{line.text}</span>
                {i === visibleLines - 1 && (
                  <div className="w-1.5 h-3 bg-blue-600 animate-pulse" />
                )}
              </div>
            )}
          </div>
        ))}

        {/* Verdict Box */}
        <div 
          ref={verdictRef}
          className="absolute bottom-4 left-4 right-4 p-3 bg-red-50/80 border border-red-200 rounded flex items-center justify-between shadow-sm"
        >
          <span className="text-red-600 font-bold uppercase tracking-widest text-[11px]">Verdict: Not ready</span>
          <span className="text-red-400/60 text-[8px] font-bold">ERR_GATE_01</span>
        </div>

        {/* Heartbeat line */}
        {visibleLines >= LINES.length && (
          <div className="absolute bottom-1 right-4 text-[6px] text-slate-300 uppercase tracking-widest flex items-center gap-2 font-bold">
            <div className="w-1 h-1 rounded-full bg-blue-500 animate-ping" />
            System_Heartbeat: Active
          </div>
        )}
      </div>
    </div>
  );
}
