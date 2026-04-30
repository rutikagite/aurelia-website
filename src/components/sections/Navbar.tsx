"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Consultancy", href: "#consultancy" },
  { name: "Resources", href: "#resources" },
  { name: "Products", href: "#products" },
  { name: "Why Aurelia", href: "#why" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => setIsOpen(false);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#060d1a]/80 backdrop-blur-xl border-b border-white/10 py-3"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* BRAND MARK */}
        <Link href="#top" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
            AI
          </div>
          <div className="hidden sm:flex flex-col">
            {/* Was text-navy — invisible on dark bg. Now text-white */}
            <span className="font-heading font-bold text-lg leading-none tracking-tight text-white">
              Aurelia Innovators
            </span>
            {/* Was text-grey-mid — too dark. Now text-slate-400 */}
            <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-0.5">
              AI Development & Solutions
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              /* Was text-grey-dark — too dark on dark bg. Now text-slate-300 */
              className="text-sm font-semibold text-slate-300 hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            /* Was bg-navy (dark on dark). Now bg-blue-600 with white text */
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-colors shadow-md hover:shadow-blue-500/30"
          >
            Start a Project
          </Link>

          <button
            /* Was bg-blue-wash (light) — hard to see on dark. Now dark glass */
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE PANEL */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-[#060d1a]/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 origin-top overflow-hidden",
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              /* Was text-navy — dark on dark. Now text-slate-200 */
              className="text-lg font-semibold text-slate-200 py-2 border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 mt-4 text-base font-bold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}