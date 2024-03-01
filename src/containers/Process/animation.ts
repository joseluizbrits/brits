import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, MutableRefObject } from "react";

interface ISteps {
  id: string;
  title: string;
  desc: string;
}

const Animation = (component: MutableRefObject<null>, projects: ISteps[]) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({
        ease: "circ.out",
        duration: 2,
      });

      gsap.registerPlugin(ScrollTrigger);

      gsap.from("#process h2", {
        scrollTrigger: {
          trigger: component.current,
          start: "5% 80%",
          end: "80% center",
        },
        y: 80,
        opacity: 0,
      });

      projects.map((_, index) => {
        gsap.from(`#process #step-${index + 1}`, {
          scrollTrigger: {
            trigger: `#process #step-${index + 1}`,
            start: "-20px 80%",
            end: "bottom center",
            scrub: true,
          },
          y: 40,
          scale: 0.9,
          opacity: 0,
        });
      });

      projects.map((_, index) => {
        gsap.from(`#process #step-${index + 1} svg`, {
          scrollTrigger: {
            trigger: `#process #step-${index + 1} svg`,
            start: "top 65%",
            end: "bottom center",
            scrub: true,
          },
          y: -40,
          x: (index + 1) % 2 !== 0 ? -40 : 40,
          rotate: (index + 1) % 2 !== 0 ? "20deg" : "160deg",
          opacity: 0,
        });
      });
    }, component);

    return () => ctx.revert();
  }, [component, projects]);
};

export default Animation;
