import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

const Animation = (points: string[]) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({
        ease: "circ.out",
        duration: 2,
      });

      gsap.registerPlugin(ScrollTrigger);

      points.map((_, index) => {
        gsap.from(`#point-${index + 1}`, {
          scrollTrigger: {
            trigger: `#point-${index + 1}`,
            start: "+=100px 80%",
            end: "center center",
            scrub: true,
          },
          scale: 0,
        });
      });
    });

    return () => ctx.revert();
  }, [points]);
};

export default Animation;
