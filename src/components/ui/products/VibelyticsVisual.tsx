"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Search, PieChart, TrendingUp, MessageSquare } from "lucide-react";

export default function VibelyticsVisual() {
  const [query, setQuery] = useState("");
  const fullQuery = "Show me the quarterly revenue split by agent efficiency...";
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < fullQuery.length) {
        setQuery(fullQuery.slice(0, currentIdx + 1));
        currentIdx++;
      } else {
        clearInterval(interval);
        gsap.to(chartRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full bg-[#050A14] p-6 flex flex-col gap-6 font-sans">
      {/* Query Bar */}
      <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4">
        <Search className="w-4 h-4 text-blue-500" />
        <div className="flex-1 text-xs font-medium text-white/80 overflow-hidden whitespace-nowrap">
          {query}
          <span className="inline-block w-1 h-3 bg-blue-500 ml-1 animate-pulse" />
        </div>
      </div>

      {/* Results Area */}
      <div ref={chartRef} className="flex-1 opacity-0 translate-y-10 flex flex-col gap-6">
        <div className="flex gap-4">
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
                <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Confidence</span>
                <div className="text-lg font-black text-blue-400">99.2%</div>
            </div>
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col gap-2">
                <span className="text-[10px] text-white/40 font-black uppercase tracking-widest">Processing</span>
                <div className="text-lg font-black text-emerald-400">0.4s</div>
            </div>
        </div>

        <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center relative">
            <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:10px_10px]" />
            <TrendingUp className="w-12 h-12 text-blue-500 mb-4" />
            <div className="flex items-center gap-6">
                {[30, 50, 40, 70, 60].map((h, i) => (
                    <div key={i} className="w-8 bg-blue-500/20 border-t-2 border-blue-500 rounded-t-lg transition-all duration-1000" style={{ height: `${h}px` }} />
                ))}
            </div>
            <div className="mt-6 flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                <PieChart className="w-3 h-3 text-blue-400" />
                <span className="text-[9px] text-blue-400 font-bold uppercase tracking-widest">Analytics Ready</span>
            </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="flex items-center gap-4 text-[8px] font-black uppercase tracking-widest text-white/20">
        <div className="flex items-center gap-2">
            <MessageSquare className="w-3 h-3" />
            <span>NLP Engine Online</span>
        </div>
        <div className="flex-1 h-px bg-white/5" />
        <span>Vibelytics v2.0</span>
      </div>
    </div>
  );
}
