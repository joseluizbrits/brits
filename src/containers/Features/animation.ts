import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, MutableRefObject } from "react";

interface IFeatures {
  id: string;
  name: string;
  icon: JSX.Element;
}

const Animation = (
  component: MutableRefObject<null>,
  projects: IFeatures[]
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({
        ease: "circ.out",
        duration: 2,
      });

      gsap.registerPlugin(ScrollTrigger);

      gsap.from("#features h2", {
        scrollTrigger: {
          trigger: component.current,
          start: "5% 80%",
          end: "80% center",
        },
        y: 80,
        opacity: 0,
      });

      projects.map((_, index) => {
        gsap.from(`#features #feat-${index + 1}`, {
          scrollTrigger: {
            trigger: `#features #feat-${index + 1}`,
            start: "top 80%",
            end: "bottom 80%",
            scrub: true,
          },
          y: 40,
          opacity: 0,
        });
      });
    }, component);

    return () => ctx.revert();
  }, [component, projects]);
};

export default Animation;
