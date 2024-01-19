import Hero from "@/components/Hero";
import Introduction from "@/containers/Introduction";
import Explanation from "@/containers/Explanation";
import Services from "@/containers/Services";
import Project from "@/containers/Project";
import About from "@/containers/About";
import Contact from "@/containers/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Explanation />
      <Services />
      <Project />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
