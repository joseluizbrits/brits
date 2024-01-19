import Hero from "@/components/Hero";
import Introduction from "@/sections/Introduction";
import Explanation from "@/sections/Explanation";
import Services from "@/sections/Services";
import Project from "@/sections/Project";
import About from "@/sections/About";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <Explanation />
      <Services />
      <Project />
      <About />
    </>
  );
}
