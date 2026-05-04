"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { GraduationCap, BarChart3, Target, Zap } from "lucide-react";

export default function AIXLVisual() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to({}, {
        duration: 2,
        repeat: -1,
        onRepeat: () => setProgress(Math.floor(Math.random() * 30) + 70)
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full bg-slate-900 p-6 flex flex-col gap-6 font-sans">
      {/* Top Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="w-4 h-4 text-blue-400" />
            <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">Active Learners</span>
          </div>
          <div className="text-xl font-black text-white tracking-tighter">1,284</div>
        </div>
        <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-emerald-400" />
            <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">Mastery Level</span>
          </div>
          <div className="text-xl font-black text-white tracking-tighter">{progress}%</div>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden">
        <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] text-white/60 font-black uppercase tracking-widest">Intelligence Growth</span>
            <Zap className="w-4 h-4 text-amber-400 animate-pulse" />
        </div>
        
        <div className="flex-1 flex items-end gap-2">
          {[40, 65, 45, 80, 55, 90, 75, 95, 85].map((h, i) => (
            <div 
              key={i} 
              className="flex-1 bg-gradient-to-t from-blue-600/20 to-blue-500 rounded-t-sm transition-all duration-1000"
              style={{ height: `${h}%`, opacity: 0.3 + (i * 0.08) }}
            />
          ))}
        </div>

        {/* Floating Tooltip */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 p-3 rounded-lg shadow-2xl border border-white/20">
            <div className="text-[8px] text-white/60 uppercase font-bold mb-1">Projected ROI</div>
            <div className="text-sm font-black text-white">+24.8%</div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex items-center justify-between text-[8px] font-black uppercase tracking-[0.2em] text-white/20">
        <span>Aurelia OS v4.2</span>
        <div className="flex gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Real-time Sync</span>
        </div>
      </div>
    </div>
  );
}
