import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, MutableRefObject } from "react";

interface IProject {
  id: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
  href: string;
}

const Animation = (component: MutableRefObject<null>) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({
        ease: "circ.out",
        duration: 2,
      });

      gsap.registerPlugin(ScrollTrigger);

      gsap.from("#services h2", {
        scrollTrigger: {
          trigger: component.current,
          start: "4% bottom",
          end: "80% center",
        },
        y: 40,
        opacity: 0,
      });
    }, component);

    return () => ctx.revert();
  }, [component]);
};

export default Animation;
