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
          start: "50% bottom",
          end: "bottom center",
          scrub: true,
        },
        "--aboutDeco": "translateX(200px)",
      });

      gsap.from("#send-message", {
        scrollTrigger: {
          trigger: component.current,
          start: "70% bottom",
          end: "bottom center",
          scrub: true,
        },
        y: 100,
        opacity: 0,
      });
    }, component);

    return () => ctx.revert();
  }, [component]);
};

export default Animation;
