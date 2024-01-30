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
        "--largeTriangle": "polygon(100% 0, 100% 100%, 100% 100%)",
      });

      gsap.from("#explan h2", {
        scrollTrigger: {
          trigger: component.current,
          start: "40% 80%",
          end: "bottom center",
        },
        y: 200,
        opacity: 0,
      });

      gsap.from("#explan ul", {
        scrollTrigger: {
          trigger: component.current,
          start: "70% 80%",
          end: "bottom center",
        },
        y: 100,
        opacity: 0,
      });

      gsap.from("#explan button", {
        scrollTrigger: {
          trigger: component.current,
          start: "70% 80%",
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
