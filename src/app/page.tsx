import Hero from "@/components/Hero";
import Introduction from "@/containers/Home/Introduction";
import Explanation from "@/containers/Home/Explanation";
import Services from "@/containers/Home/Services";
import Project from "@/containers/Home/Project";
import About from "@/containers/Home/About";
import Contact from "@/containers/Home/Contact";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <Hero />
        <Introduction />
        <Explanation />
        <Services />
        <Project />
        <About />
        <Contact />
      </SmoothScroll>
    </>
  );
}
