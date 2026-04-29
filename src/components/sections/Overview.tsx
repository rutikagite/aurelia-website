"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CARDS = [
  {
    id: "01",
    title: "AI Development Services",
    body: "End-to-end AI engineering. Agentic systems, LLM fine-tuning, LangChain, GenAI — built production-ready.",
    cta: "Explore services",
    href: "#services",
    color: "bg-blue-500",
  },
  {
    id: "02",
    title: "AI Consultancy",
    body: "Strategic AI advisory. We map your business to the right AI architecture before a single line is written.",
    cta: "View consultancy",
    href: "#consultancy",
    color: "bg-teal-500",
  },
  {
    id: "03",
    title: "Resource Augmentation",
    body: "Vetted AI engineers, on-site or remote. Your team, extended with specialists who ship.",
    cta: "See resources",
    href: "#resources",
    color: "bg-indigo-500",
  },
  {
    id: "04",
    title: "AI Products",
    body: "Purpose-built AI products — analytics intelligence, AI readiness assessments, and more.",
    cta: "See products",
    href: "#products",
    color: "bg-sky-500",
  },
];

export default function Overview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (!trackRef.current) return;

  const track = trackRef.current;

  // Get half width (since we duplicated cards)
  const totalWidth = track.scrollWidth / 2;

  const tl = gsap.fromTo(
    track,
    { x: 0 },
    {
      x: -totalWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
    }
  );

  const pause = () => tl.pause();
  const play = () => tl.play();

  track.addEventListener("mouseenter", pause);
  track.addEventListener("mouseleave", play);

  return () => {
    track.removeEventListener("mouseenter", pause);
    track.removeEventListener("mouseleave", play);
    tl.kill();
  };
}, []);
}
