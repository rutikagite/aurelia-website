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
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-4"
          : "py-6"
      )}
    >
      <div className={cn(
        "container mx-auto px-6 max-w-7xl flex items-center justify-between transition-all duration-500 rounded-full outline-none border",
        scrolled
          ? "bg-white/30 backdrop-blur-md border-white/40 shadow-[0_8px_32px_rgba(42,109,217,0.06)] py-3 px-8"
          : "bg-transparent border-transparent py-2"


      )}>
        {/* LOGO */}
        <Link href="#top" className="flex items-center gap-2 group">
          <div className="font-heading font-extrabold text-2xl tracking-tighter text-navy flex items-center">
            Aurelia<span className="text-blue-brand">.</span>
          </div>
        </Link>


        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-slate-600 hover:text-blue-brand transition-colors tracking-tight"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & MOBILE TOGGLE */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white bg-blue-brand rounded-full hover:bg-navy transition-all duration-300 shadow-md hover:shadow-blue-brand/30"
          >
            Start a Project
          </Link>


          <button
            className="md:hidden p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors text-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE PANEL */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-xl transition-all duration-300 origin-top overflow-hidden",
          mobileMenuOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        )}
      >
        <nav className="flex flex-col px-6 gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-navy hover:text-blue-brand transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#contact"
            className="button-primary text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start a Project
          </Link>
        </nav>
      </div>
    </header>
  );
}