import { Metadata } from "next";
import { createClient } from "@/prismicio";

import TitleCircle from "@/components/TitleCircle";
import GalaxiesImage from "@/components/GalaxiesImage";
import BlogPostList from "@/components/BlogPostList";

export const metadata: Metadata = {
  title: "Todos os posts | BRITS Blog",
  description:
    "Venha dar uma olhada nos posts do meu blog. Cada artigo vai te trazer uma nova maneira de perceber o mundo social, profissional e pessoal. Leia e compartilhe!",
  openGraph: {
    title: "odos os posts | BRITS Blog",
    description:
      "Venha dar uma olhada nos posts do meu blog. Cada artigo vai te trazer uma nova maneira de perceber o mundo social, profissional e pessoal. Leia e compartilhe!",
    url: "https://brits.com.br/blog",
  },
};

async function page() {
  const client = createClient();
  const blogPosts = await client.getAllByType("blog_post");

  return (
    <>
      <GalaxiesImage position="top" />

      <main
        className="container"
        style={{
          backgroundColor: "var(--blogBody)",
          paddingBottom: "40px",
          display: "grid",
          gap: "80px",
        }}
      >
        <TitleCircle>Todos os Posts</TitleCircle>
        <BlogPostList posts={blogPosts} />
      </main>

      <GalaxiesImage position="bottom" />
    </>
  );
}

export default page;
