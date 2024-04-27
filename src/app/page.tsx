import Hero from "@/containers/Hero";
import Introduction from "@/containers/Introduction";
import Services from "@/containers/Services";
import Features from "@/containers/Features";
import About from "@/containers/About";
import Projects from "@/containers/Projects";
import CTA from "@/containers/CTA";
import Process from "@/containers/Process";
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
        <Projects />
        <CTA />
        <Process />
        <Contact />
      </main>
      {/* </SmoothScroll> */}
    </>
  );
}
