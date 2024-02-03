import Author from "@/components/Author";
import CallMe from "@/components/CallMe";
import HeroBlog from "@/components/HeroBlog";
import Share from "@/components/Share";
import Content from "@/containers/Blog/Content";

function page() {
  return (
    <>
      <HeroBlog />
      <main className="blog-wrapper">
        <Share position="top" />
        <Author />
        <Content />
        <Share position="bottom" />
        <CallMe />
      </main>
    </>
  );
}

export default page;
