"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

import { ReactNode, useEffect } from "react";
import usePopup from "@/hooks/usePopup";

function SmoothScroll({ children }: { children: ReactNode }) {
  const { getPopup } = usePopup();

  const popup1 = getPopup(1);
  const popup2 = getPopup(2);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 2.5,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 500);
    });

    gsap.ticker.lagSmoothing(0);
  }, [popup1, popup2]);

  return <>{children}</>;
}

export default SmoothScroll;
