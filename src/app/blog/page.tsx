import { Metadata } from "next";
import { createClient } from "@/prismicio";

import TitleCircle from "@/components/Blog/TitleCircle";
import PostList from "@/components/Blog/PostList";
import GalaxiesImage from "@/components/Blog/GalaxiesImage";

export const metadata: Metadata = {
  title: "Todos os posts | BRITS Blog",
  description:
    "Venha dar uma olhada nos posts do meu blog. Cada artigo vai te trazer uma nova maneira de perceber o mundo social, profissional e pessoal. Leia e compartilhe!",
  openGraph: {
    title: "Todos os posts | BRITS Blog",
    description:
      "Venha dar uma olhada nos posts do meu blog. Cada artigo vai te trazer uma nova maneira de perceber o mundo social, profissional e pessoal. Leia e compartilhe!",
    url: "https://brits.com.br/blog",
  },
};

async function page() {
  const client = createClient();
  const posts = await client.getAllByType("blog_post");

  return (
    <>
      <GalaxiesImage position="top" />

      <main
        className="container"
        style={{
          marginTop: "120px",
          marginBottom: "200px",
          display: "grid",
          gap: "80px",
        }}
      >
        <TitleCircle>Todos os Posts</TitleCircle>
        <PostList posts={posts} />
      </main>

      <GalaxiesImage position="bottom" />
    </>
  );
}

export default page;
