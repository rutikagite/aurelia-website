"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
      className="py-16 md:py-24 bg-[#F8FAFC]/60 backdrop-md relative overflow-hidden"
    >

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="mb-20 max-w-3xl">
          <div className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-4">
            Strategic Advisory
          </div>
          <h2 className="text-slate-900 mb-6 font-black tracking-tighter text-4xl md:text-5xl">
            Strategy Before a Single Line of Code.
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            We assess your data maturity, organizational readiness, and technical
            infrastructure to prescribe an AI roadmap that delivers compounding value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {KINETIC_CARDS.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
              className="group h-full flex flex-col"
            >
              <div className="bg-slate-50 border border-slate-200 p-8 flex flex-col h-full rounded-2xl hover:border-blue-500/30 transition-all hover:shadow-lg hover:bg-white">
                {/* Animation Area */}
                <div className="relative w-full h-[240px] mb-8 bg-white rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center shadow-inner">
                  <div className="w-full h-full scale-[0.85] transform-gpu">
                    {card.animation}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-800 mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-slate-600 font-medium text-sm leading-relaxed mb-6">
                  {card.desc}
                </p>


              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}