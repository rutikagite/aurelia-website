import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft overlay to ensure text readability against the animated background */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center text-center mt-16">
        <div
          data-anim
          style={{ transitionDelay: "100ms" }}
          className="inline-flex items-center px-4 py-1.5 rounded-full glass-card border border-blue-200/50 text-blue-700 text-sm font-bold tracking-wide mb-8 uppercase"
        >
          AI Development Partner
        </div>

        <h1
          data-anim
          style={{ transitionDelay: "250ms" }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight text-slate-900 max-w-5xl leading-[1.1] mb-8"
        >
          AI That's Built to Be{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">
            Deployed
          </span>,
          <br className="hidden md:block" />
          Not Demoed.
        </h1>

        <p
          data-anim
          style={{ transitionDelay: "400ms" }}
          className="text-lg md:text-2xl text-slate-600 max-w-2xl mb-12 font-medium leading-relaxed"
        >
          AI services, consultancy, and execution support <br className="hidden sm:block" />
          for teams building with AI.
        </p>

        <div
          data-anim
          style={{ transitionDelay: "550ms" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link
            href="#services"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-slate-900 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            Explore Our Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#consultancy"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-800 glass-card hover:bg-white transition-all duration-300 rounded-full w-full sm:w-auto hover:shadow-lg"
          >
            View Consultancy
          </Link>
        </div>
      </div>
    </section>
  );
}
