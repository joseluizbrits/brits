import HeroBlog from "@/components/HeroBlog";
import Author from "@/components/Author";
import Share from "@/components/Share";
import CallMe from "@/components/CallMe";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HeroBlog />
      <main className="blog-wrapper">
        <Share position="top" />
        <Author />
        {children}
        <Share position="bottom" />
        <CallMe />
      </main>
    </>
  );
}
