import { MutableRefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const BarProgress = (container: MutableRefObject<null>) => {
  useGSAP(
    () => {
      gsap.from(".progress-bar", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 20%",
          end: "88% center",
          scrub: true,
        },
        width: "0%",
        ease: "none",
      });
    },
    { scope: container }
  );
};

export default BarProgress;
