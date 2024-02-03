import Author from "@/components/Author";
import CallMe from "@/components/CallMe";
import HeroBlog from "@/components/HeroBlog";
import Intro from "@/components/Intro";
import Share from "@/components/Share";
import Content from "@/containers/Blog/Content";

function page() {
  return (
    <>
      <HeroBlog />
      <main
        style={{
          backgroundColor: "var(--blogBody)",
          padding: "40px 400px 120px 400px",
        }}
      >
        <Share position="top" />
        <Author />
        <Intro />
        <Content />
        <Share position="bottom" />
        <CallMe />
      </main>
    </>
  );
}

export default page;
