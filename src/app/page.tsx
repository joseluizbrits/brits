import Hero from "@/containers/Home/Hero";
import Introduction from "@/containers/Home/Introduction";
import Services from "@/containers/Home/Services";
import Features from "@/containers/Home/Features";
import About from "@/containers/Home/About";
import Projects from "@/containers/Home/Projects";
import CTA from "@/containers/Home/CTA";
import Process from "@/containers/Home/Process";
import SeeBlog from "@/containers/Home/SeeBlog";
import Contact from "@/containers/Home/Contact";
import SmoothScroll from "@/components/Home/SmoothScroll";

export default async function Home() {
  return (
    <>
      <SmoothScroll>
        <main className="container">
          <Hero />
          <Introduction />
          <Services />
          <Features />
          <About />
          <Projects />
          <CTA />
          <Process />
          <SeeBlog />
          <Contact />
        </main>
      </SmoothScroll>
    </>
  );
}
