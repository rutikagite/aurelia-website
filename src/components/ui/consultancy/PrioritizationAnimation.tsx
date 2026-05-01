"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const DIMENSIONS = [
  { label: "ROI", value: 85 },
  { label: "Feasibility", value: 70 },
  { label: "Data Fit", value: 90 },
  { label: "Speed", value: 65 },
  { label: "Scale", value: 80 },
  { label: "Impact", value: 95, highlight: true },
];

export default function RadarAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const polygonRef = useRef<SVGPolygonElement>(null);
  const pointsRef = useRef<(SVGCircleElement | null)[]>([]);
  const labelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      const centerX = 100;
      const centerY = 100;
      const radius = 80;

      // Initial points (center)
      const startPoints = DIMENSIONS.map(() => `${centerX},${centerY}`).join(" ");
      
      // Target points based on values
      const targetPoints = DIMENSIONS.map((d, i) => {
        const angle = (i * 2 * Math.PI) / DIMENSIONS.length - Math.PI / 2;
        const r = (d.value / 100) * radius;
        return `${centerX + r * Math.cos(angle)},${centerY + r * Math.sin(angle)}`;
      }).join(" ");

      // Animate Polygon
      tl.fromTo(
        polygonRef.current,
        { attr: { points: startPoints }, opacity: 0 },
        { attr: { points: targetPoints }, opacity: 1, duration: 1.5, ease: "power4.out" }
      );

      // Animate dots and labels
      DIMENSIONS.forEach((d, i) => {
        tl.fromTo(
          pointsRef.current[i],
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(2)" },
          `-=${1.2 - i * 0.1}`
        );
        tl.fromTo(
          labelsRef.current[i],
          { opacity: 0, y: 5 },
          { opacity: 1, y: 0, duration: 0.3 },
          "-=0.2"
        );

        if (d.highlight) {
          tl.to(pointsRef.current[i], {
            r: 6,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            fill: "#2563eb",
          }, "+=0.2");
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full aspect-square max-h-[280px] relative font-mono text-[10px] flex items-center justify-center bg-white rounded-xl border border-slate-100 shadow-inner overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:10px_10px]" />

      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible p-4">
        {/* Radar Background Grid */}
        {[20, 40, 60, 80].map((r) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            fill="none"
            stroke="rgba(15, 23, 42, 0.08)"
            strokeWidth="1"
          />
        ))}
        {/* Axis Lines */}
        {DIMENSIONS.map((_, i) => {
          const angle = (i * 2 * Math.PI) / DIMENSIONS.length - Math.PI / 2;
          return (
            <line
              key={i}
              x1="100"
              y1="100"
              x2={100 + 80 * Math.cos(angle)}
              y2={100 + 80 * Math.sin(angle)}
              stroke="rgba(15, 23, 42, 0.1)"
              strokeWidth="1"
            />
          );
        })}

        {/* The Polygon */}
        <polygon
          ref={polygonRef}
          fill="rgba(37, 99, 235, 0.15)"
          stroke="#2563eb"
          strokeWidth="2"
          className="drop-shadow-[0_4px_12px_rgba(37,99,235,0.2)]"
        />

        {/* Points */}
        {DIMENSIONS.map((d, i) => {
          const angle = (i * 2 * Math.PI) / DIMENSIONS.length - Math.PI / 2;
          const r = (d.value / 100) * 80;
          return (
            <circle
              key={i}
              ref={(el) => { if (el) pointsRef.current[i] = el; }}
              cx={100 + r * Math.cos(angle)}
              cy={100 + r * Math.sin(angle)}
              r="4"
              fill={d.highlight ? "#2563eb" : "#475569"}
            />
          );
        })}
      </svg>

      {/* Floating Labels */}
      {DIMENSIONS.map((d, i) => {
        const angle = (i * 2 * Math.PI) / DIMENSIONS.length - Math.PI / 2;
        const r = 90;
        return (
          <div
            key={i}
            ref={(el) => { if (el) labelsRef.current[i] = el; }}
            className="absolute flex flex-col items-center"
            style={{
              left: `${50 + (r * Math.cos(angle)) / 2}%`,
              top: `${50 + (r * Math.sin(angle)) / 2}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="uppercase tracking-tighter text-slate-400 font-bold text-[8px]">{d.label}</span>
            <span className={d.highlight ? "text-blue-600 font-extrabold" : "text-slate-800 font-bold"}>{d.value}%</span>
          </div>
        );
      })}
    </div>
  );
}
