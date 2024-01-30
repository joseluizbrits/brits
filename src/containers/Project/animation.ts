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
          end: "50% center",
          scrub: true,
        },
        "--shortTriangle": "polygon(85% 0, 100% 100%, 55% 55%)",
      });

      gsap.from("#project h2", {
        scrollTrigger: {
          trigger: "#project h2",
          start: "20% 80%",
          end: "bottom center",
        },
        y: 200,
        opacity: 0,
        duration: 2.5,
      });

      gsap.from("#project button", {
        scrollTrigger: {
          trigger: component.current,
          start: "85% 80%",
          end: "bottom center",
        },
        y: 100,
        opacity: 0,
      });
    }, component);

    return () => ctx.revert();
  }, [component]);
};

export default Animation;
