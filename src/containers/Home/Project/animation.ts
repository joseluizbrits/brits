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
          end: "210% center",
          scrub: true,
        },
        "--shortTriangle": "polygon(0 30%, 0% 100%, 0% 100%)",
      });

      gsap.from("#project h2", {
        scrollTrigger: {
          trigger: "#project h2",
          start: "top bottom",
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
        y: 40,
        opacity: 0,
      });
    }, component);

    return () => ctx.revert();
  }, [component]);
};

export default Animation;
