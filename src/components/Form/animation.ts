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
          start: "top 80%",
          end: "bottom center",
        },
        y: 100,
        opacity: 0,
      });

      gsap.from(".fields label", {
        scrollTrigger: {
          trigger: component.current,
          start: "top 80%",
          end: "bottom center",
        },
        x: -40,
        opacity: 0,
      });

      gsap.from(".fields input", {
        scrollTrigger: {
          trigger: component.current,
          start: "top 80%",
          end: "bottom center",
        },
        x: -40,
        opacity: 0,
        delay: 0.1,
      });

      gsap.from(".fields textarea", {
        scrollTrigger: {
          trigger: component.current,
          start: "top 80%",
          end: "bottom center",
        },
        x: -40,
        opacity: 0,
        delay: 0.1,
      });

      gsap.from(".send", {
        scrollTrigger: {
          trigger: component.current,
          start: "40% 80%",
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
