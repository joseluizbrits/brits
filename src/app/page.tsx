import Hero from "@/components/Hero";
import Introduction from "@/containers/Introduction";
import Explanation from "@/containers/Explanation";
import Services from "@/containers/Services";
import Project from "@/containers/Project";
import About from "@/containers/About";
import Contact from "@/containers/Contact";
import SmoothScroll from "@/components/SmoothScroll";
import Benefits from "@/containers/Benefits";
import Features from "@/containers/Features";
import Process from "@/containers/Process";
import Story from "@/components/Story";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        {/* <Story /> */}
        <Hero />
        <Introduction />
        <Explanation />
        <Services />
        <Benefits />
        <Features />
        <Process />
        <Project />
        <About />
        <Contact />
      </SmoothScroll>
    </>
  );
}
