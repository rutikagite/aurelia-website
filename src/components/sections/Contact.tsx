import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-40 overflow-hidden bg-transparent border-t border-white/10"
    >
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div
          className="p-10 md:p-16 rounded-[2.5rem] text-center border"
          style={{
            /* Was bg-white/20 — too light to read navy text, too dim to read white text.
               Use a mid-tone glass that works with dark text on it via increased opacity */
            background: "rgba(255, 255, 255, 0.10)",
            backdropFilter: "blur(24px) saturate(120%)",
            WebkitBackdropFilter: "blur(24px) saturate(120%)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 8px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          {/* Heading — was text-navy (dark on semi-dark card). Now text-white */}
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tight mb-6">
            Ready to Build?
          </h2>

          {/* Body — was text-grey-dark (low contrast). Now text-slate-300 */}
          <p className="text-xl text-slate-300 font-medium mb-12 max-w-2xl mx-auto">
            Whether you need a dedicated AI team, a strategic roadmap, or a
            full-stack product built from scratch — let&apos;s talk.
          </p>

          <form className="max-w-md mx-auto flex flex-col gap-5">
            <input
              type="email"
              placeholder="name@company.com"
              /* Was bg-white/50 with text-navy placeholder — too light. 
                 Now dark glass with light placeholder */
              className="w-full px-6 py-4 rounded-xl border border-white/15 bg-white/8 focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-400 font-medium text-white shadow-inner backdrop-blur-sm"
            />
            <button
              type="button"
              /* Was bg-navy (dark on dark card). Now bg-blue-600 */
              className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 group"
            >
              Get in touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Footer note — was text-grey-mid (too dark). Now text-slate-400 */}
          <div className="mt-8 text-sm text-slate-400 font-bold tracking-wide uppercase">
            Based in Pune, India. Operating globally.
          </div>
        </div>
      </div>
    </section>
  );
}