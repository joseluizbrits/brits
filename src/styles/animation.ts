import { MutableRefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Animation = (container: MutableRefObject<null>, elements: string[]) => {
  useGSAP(
    () => {
      elements.map((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "-160px 85%",
            end: "bottom center",
          },
          y: 160,
          opacity: 0,
          ease: "elastic.out(1, .8)",
          duration: 1,
        });
      });
    },
    { scope: container }
  );
};

export default Animation;
