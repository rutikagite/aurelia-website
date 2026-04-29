"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      autoRaf: true, // Let Lenis handle RAF
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
