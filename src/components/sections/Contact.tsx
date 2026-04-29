import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-40 overflow-hidden bg-white/20 backdrop-blur-xl border-t border-white/60">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="backdrop-blur-2xl p-10 md:p-16 rounded-[2.5rem] shadow-4xl border border-white/15 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-slate-900 tracking-tight mb-6">
            Ready to Build?
          </h2>
          <p className="text-xl text-slate-600 font-medium mb-12 max-w-2xl mx-auto">
            Whether you need a dedicated AI team, a strategic roadmap, or a full-stack product built from scratch — let's talk.
          </p>

          <form className="max-w-md mx-auto flex flex-col gap-5">
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full px-6 py-4 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 font-bold text-slate-900 shadow-inner"
            />
            <button
              type="button"
              className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-600/30 group"
            >
              Get in touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 text-sm text-slate-500 font-bold tracking-wide uppercase">
            Based in Pune, India. Operating globally.
          </div>
        </div>
      </div>
    </section>
  );
}
