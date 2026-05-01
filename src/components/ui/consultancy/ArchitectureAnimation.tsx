"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Database, Cpu, Globe, Activity, ShieldCheck } from "lucide-react";

const NODES = [
  { id: "data", icon: Database, label: "Data", x: 15, y: 50 },
  { id: "vdb", icon: Globe, label: "Embed/VecDB", x: 35, y: 30 },
  { id: "llm", icon: Cpu, label: "LLM", x: 55, y: 50, pulse: true },
  { id: "app", icon: ShieldCheck, label: "Gateway/App", x: 75, y: 70 },
  { id: "obs", icon: Activity, label: "Observability", x: 90, y: 50 },
];

const EDGES = [
  { from: 0, to: 1 },
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
];

export default function FlowAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);
  const pathsRef = useRef<(SVGPathElement | null)[]>([]);
  const [tokens, setTokens] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      // Node assembly
      tl.fromTo(
        nodesRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)" }
      );

      // Edge drawing
      tl.fromTo(
        pathsRef.current,
        { strokeDashoffset: 400, strokeDasharray: 400 },
        { strokeDashoffset: 0, duration: 1, stagger: 0.2, ease: "power2.inOut" },
        "-=0.5"
      );

      // Token counter increment
      tl.to({}, {
        duration: 0.5,
        repeat: -1,
        onRepeat: () => setTokens(prev => prev + Math.floor(Math.random() * 12) + 5)
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-white rounded-xl border border-slate-100 shadow-inner overflow-hidden flex items-center justify-center font-mono text-[10px]">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {EDGES.map((edge, i) => {
          const from = NODES[edge.from];
          const to = NODES[edge.to];
          return (
            <path
              key={i}
              ref={(el) => { if (el) pathsRef.current[i] = el; }}
              d={`M ${from.x} ${from.y} L ${to.x} ${to.y}`}
              stroke="rgba(15, 23, 42, 0.08)"
              strokeWidth="1"
              fill="none"
            />
          );
        })}
        {/* Particles */}
        {EDGES.map((edge, i) => (
          <circle key={`p-${i}`} r="1.2" fill="#2563eb">
            <animateMotion
              dur={`${1.5 + Math.random()}s`}
              repeatCount="indefinite"
              path={`M ${NODES[edge.from].x} ${NODES[edge.from].y} L ${NODES[edge.to].x} ${NODES[edge.to].y}`}
            />
          </circle>
        ))}
      </svg>

      {NODES.map((node, i) => (
        <div
          key={node.id}
          ref={(el) => { if (el) nodesRef.current[i] = el; }}
          className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <div className={`p-3 rounded-2xl border border-slate-200 bg-white shadow-xl ${node.pulse ? "animate-pulse border-blue-500/50 text-blue-600" : "text-slate-600"}`}>
            <node.icon size={20} />
          </div>
          <span className="uppercase tracking-[0.1em] text-slate-400 text-[7px] whitespace-nowrap font-bold">{node.label}</span>
        </div>
      ))}

      {/* Token Counter */}
      <div className="absolute top-3 right-4 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full font-mono text-blue-600 flex items-center gap-2 shadow-sm">
        <span className="text-[7px] opacity-60 uppercase font-bold">Tokens/sec:</span>
        <span className="font-extrabold">{tokens.toLocaleString()}</span>
      </div>
    </div>
  );
}
