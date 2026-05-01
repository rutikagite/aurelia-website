"use client";

import { motion } from "framer-motion";
import AuditAnimation from "../ui/consultancy/AuditAnimation";
import PrioritizationAnimation from "../ui/consultancy/PrioritizationAnimation";
import ArchitectureAnimation from "../ui/consultancy/ArchitectureAnimation";

const KINETIC_CARDS = [
  {
    id: "01",
    title: "AI Readiness Audit",
    desc: "Is your data, team, and infrastructure ready for AI? We'll tell you exactly where you stand.",
    animation: <AuditAnimation />,
  },
  {
    id: "02",
    title: "Use Case Prioritisation",
    desc: "Not every problem needs AI. We identify the ones where AI creates disproportionate value.",
    animation: <PrioritizationAnimation />,
  },
  {
    id: "03",
    title: "Architecture Design",
    desc: "Model selection, data pipelines, infrastructure — designed before the first sprint begins.",
    animation: <ArchitectureAnimation />,
  },
];

export default function Consultancy() {
  return (
    <section
      id="consultancy"
      className="py-[var(--section-py)] bg-transparent relative border-t border-white/10"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section header */}
        <div className="mb-20 text-center max-w-4xl mx-auto">
          {/* Label — was text-blue-brand (check if var resolves on dark bg, keeping explicit blue) */}
          <div className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
            AI Consultancy
          </div>
          {/* Heading — was text-off-white, keeping but ensuring it resolves clearly */}
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">
            Strategy Before a Single <br className="hidden sm:block" /> Line of Code.
          </h2>
          {/* Subheading — was text-blue-soft (could be dark); now slate-300 for guaranteed readability */}
          <p className="text-lg md:text-xl text-slate-300 font-medium">
            We assess your data, systems, and goals —{" "}
            <br className="hidden sm:block" />
            then prescribe an AI roadmap that actually fits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {KINETIC_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
              className="group relative h-full flex flex-col"
            >
              {/* Card Container with Perspective */}
              <div className="relative flex-1 rounded-[2.5rem] border border-white/10 bg-transparent backdrop-blur-2xl overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:bg-white/[0.02] flex flex-col">

                {/* Animation Area (TOP) — Light Cinematic Canvas */}
                <div className="relative w-full h-[320px] bg-slate-50/80 p-8 flex items-center justify-center overflow-hidden border-b border-slate-200">

                  <div className="w-full h-full scale-[1.1] transform-gpu">
                    {card.animation}
                  </div>
                </div>

                {/* Header Area (BOTTOM) — Transparent */}
                <div className="p-10 flex-1 flex flex-col bg-transparent">
                  <h3 className="text-2xl font-heading font-bold text-white mb-4 leading-tight tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 font-medium text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {card.desc}
                  </p>
                </div>

                {/* Background Glow Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                  <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full" />
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}