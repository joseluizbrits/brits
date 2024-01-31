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

      gsap.from("#footer > *", {
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "bottom center",
        },
        y: 40,
        opacity: 0,
      });
    }, component);

    return () => ctx.revert();
  }, [component]);
};

export default Animation;
