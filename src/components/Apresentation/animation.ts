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
          end: "90% center",
          scrub: true,
        },
        "--middleTriangleBottom": "polygon(0 0, 40% 0, 60% 2%, 0 2%)",
      });

      gsap.from("#me img", {
        scrollTrigger: {
          trigger: component.current,
          start: "20% 80%",
          end: "bottom center",
          scrub: true,
        },
        clipPath: "circle(0% at 50% 50%)",
      });

      gsap.from(".baloon-short", {
        scrollTrigger: {
          trigger: component.current,
          start: "40% 80%",
          end: "bottom center",
          scrub: true,
        },
        y: 80,
        x: -40,
        opacity: 0,
      });

      gsap.from(".baloon-large", {
        scrollTrigger: {
          trigger: component.current,
          start: "90% 80%",
          end: "bottom center",
          scrub: true,
        },
        y: -80,
        x: 80,
        opacity: 0,
      });
    }, component);

    return () => ctx.revert();
  }, [component]);
};

export default Animation;
