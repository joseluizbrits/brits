import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, MutableRefObject } from "react";

interface IBenefits {
  id: string;
  title: string;
  desc: string;
  icon: JSX.Element;
}

const Animation = (
  component: MutableRefObject<null>,
  projects: IBenefits[]
) => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({
        ease: "circ.out",
        duration: 2,
      });

      gsap.registerPlugin(ScrollTrigger);

      gsap.from("#benefits h2", {
        scrollTrigger: {
          trigger: component.current,
          start: "5% 80%",
          end: "80% center",
        },
        y: 80,
        opacity: 0,
      });

      projects.map((_, index) => {
        gsap.from(`#benefits #benefit-${index + 1}`, {
          scrollTrigger: {
            trigger: `#benefits #benefit-${index + 1}`,
            start: "-40px 80%",
            end: "end center",
            scrub: true,
          },
          y: 40,
          scale: 0.8,
          opacity: 0,
        });
      });
    }, component);

    return () => ctx.revert();
  }, [component, projects]);
};

export default Animation;
