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

      gsap.from(component.current, {
        scrollTrigger: {
          trigger: component.current,
          start: "top bottom",
          end: "80% center",
          scrub: true,
        },
        "--aboutDeco": "translateX(-400px)",
      });
    }, component);

    return () => ctx.revert();
  }, [component]);
};

export default Animation;
