import Hero from "@/containers/Hero";
import Introduction from "@/containers/Introduction";
import Services from "@/containers/Services";
import Features from "@/containers/Features";
import About from "@/containers/About";
import Process from "@/containers/Process";
import Project from "@/containers/Project";
import Contact from "@/containers/Contact";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      {/* <SmoothScroll> */}
      <main className="container">
        <Hero />
        <Introduction />
        <Services />
        <Features />
        <About />
        <Process />
        <Project />
        <Contact />
      </main>
      {/* </SmoothScroll> */}
    </>
  );
}
