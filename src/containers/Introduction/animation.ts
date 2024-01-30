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
          end: "150% center",
          scrub: true,
        },
        "--middleTriangle": "polygon(100% 0, 100% 100%, 100% 100%)",
      });

      gsap.from("#intro h2", {
        scrollTrigger: {
          trigger: "#intro h2",
          start: "20% 80%",
          end: "bottom center",
        },
        y: 200,
        opacity: 0,
      });

      gsap.from("#intro ul", {
        scrollTrigger: {
          trigger: component.current,
          start: "70% 80%",
          end: "bottom center",
          markers: true,
        },
        y: 200,
        opacity: 0,
      });

      gsap.from("#intro button", {
        scrollTrigger: {
          trigger: component.current,
          start: "70% 80%",
          end: "bottom center",
          markers: true,
        },
        y: 200,
        opacity: 0,
      });
    }, component);

    return () => ctx.revert();
  }, [component]);
};

export default Animation;
