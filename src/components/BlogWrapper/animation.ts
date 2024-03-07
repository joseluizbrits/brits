import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, MutableRefObject } from "react";

const Animation = (component: MutableRefObject<null>) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".progress-bar", {
        scrollTrigger: {
          trigger: component.current,
          start: "top 20%",
          end: "88% center",
          scrub: true,
        },
        width: "0%",
        ease: "none",
      });
    }, component);

    return () => ctx.revert();
  }, [component]);
};

export default Animation;
