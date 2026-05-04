import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 overflow-hidden bg-[#E2E8F0]/60 backdrop-blur-md"
    >

      <div className="grid-container relative z-10">
        <div className="bg-slate-50 border border-slate-200 p-10 md:p-20 text-center rounded-3xl max-w-5xl mx-auto">
          <div className="text-blue-brand font-bold tracking-widest uppercase text-xs mb-4">Final Step</div>
          <h2 className="text-navy mb-8 font-black tracking-tighter">
            Deploy Your Intelligence Layer.
          </h2>

          <p className="text-lg md:text-xl text-slate-600 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you need a dedicated AI engineering team, a strategic roadmap, or a
            production-grade system built from scratch — we are ready to execute.
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="name@company.com"
              className="flex-grow px-6 py-4 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-brand/20 transition-all placeholder:text-slate-400 font-medium text-navy shadow-sm"
            />
            <button
              type="button"
              className="button-primary px-8 py-4 whitespace-nowrap shadow-lg shadow-blue-brand/20"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-12 pt-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Available for Q3 2026
            </div>
            <div className="hidden md:block h-4 w-px bg-slate-200" />
            <div>Based in Pune, India • Operating Globally</div>
          </div>
        </div>
      </div>
    </section>
  );
}
