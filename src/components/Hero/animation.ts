import gsap from "gsap";
import { useLayoutEffect } from "react";

const Animation = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.defaults({
        ease: "circ.out",
        duration: 2,
      });

      gsap.fromTo(
        ".hero-title",
        {
          y: 80,
        },
        {
          y: 0,
          opacity: 1,
        }
      );

      gsap.to("#hero", {
        "--triangleWidth": "30%",
        delay: 0.3,
      });

      gsap.fromTo(
        ".hero-media",
        {
          y: 80,
        },
        {
          y: 0,

          opacity: 1,
          delay: 0.6,
        }
      );
    }, document.documentElement);

    return () => ctx.revert();
  }, []);
};

export default Animation;
