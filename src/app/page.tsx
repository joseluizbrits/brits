import Hero from "@/components/Hero";
import Introduction from "@/containers/Introduction";
import Process from "@/containers/Process";
import Project from "@/containers/Project";
import About from "@/containers/About";
import Contact from "@/containers/Contact";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      {/* <SmoothScroll> */}
      <Hero />
      <Introduction />
      <Process />
      <Project />
      <About />
      <Contact />
      {/* </SmoothScroll> */}
    </>
  );
}
