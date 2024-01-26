"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
}

export default SmoothScroll;
