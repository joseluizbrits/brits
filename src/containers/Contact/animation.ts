import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, MutableRefObject } from "react";

const Animation = (component: MutableRefObject<null>) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({
        ease: "circ.out",
        duration: 2,
      });

      gsap.registerPlugin(ScrollTrigger);

      gsap.from("#contact h2", {
        scrollTrigger: {
          trigger: "#contact h2",
          start: "+=200px 80%",
          end: "bottom center",
        },
        y: 100,
        opacity: 0,
      });

      gsap.from("#contact h2", {
        scrollTrigger: {
          trigger: "#contact h2",
          start: "50% 80%",
          end: "bottom center",
        },
        "--aboutDeco": "translateX(-400px)",
      });
    }, component);

    return () => ctx.revert();
  }, [component]);
};

export default Animation;
