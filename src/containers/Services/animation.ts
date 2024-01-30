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

const Animation = (component: MutableRefObject<null>, projects: IProject[]) => {
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
          start: "3% bottom",
          end: "80% center",
<<<<<<< HEAD
=======
          markers: true,
>>>>>>> ff36c545aaff3fcd5b2109adeab0f174c4ebc460
        },
        y: 200,
        opacity: 0,
      });
    }, component);

    return () => ctx.revert();
  }, [component]);
};

export default Animation;
