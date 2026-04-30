import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-transparent"></div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center mt-16">
        {/* Badge */}
        <div
          data-anim
          style={{ transitionDelay: "100ms" }}
          className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-bold tracking-wide mb-8 uppercase backdrop-blur-sm"
        >
          AI Development Partner
        </div>

        {/* Heading — was text-navy (dark), now text-white */}
        <h1
          data-anim
          style={{ transitionDelay: "250ms" }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight text-white max-w-5xl leading-[1.1] mb-8"
        >
          AI That&apos;s Built to Be{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
            Deployed
          </span>,
          <br className="hidden md:block" />
          Not Demoed.
        </h1>

        {/* Subheading — was text-grey-dark (too dark), now text-slate-300 */}
        <p
          data-anim
          style={{ transitionDelay: "400ms" }}
          className="text-lg md:text-2xl text-slate-300 max-w-2xl mb-12 font-medium leading-relaxed"
        >
          AI services, consultancy, and execution support{" "}
          <br className="hidden sm:block" />
          for teams building with AI.
        </p>

        <div
          data-anim
          style={{ transitionDelay: "550ms" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Primary CTA — bg-navy was dark on dark; use bg-blue-600 */}
          <Link
            href="#services"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Secondary CTA — glass with visible border */}
          <Link
            href="#consultancy"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white border border-white/20 bg-white/8 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 rounded-full w-full sm:w-auto hover:shadow-lg hover:border-white/40"
          >
            View Consultancy
          </Link>
        </div>
      </div>
    </section>
  );
}