import { Metadata } from "next";

import TitleCircle from "@/components/TitleCircle";
import GalaxiesImage from "@/components/GalaxiesImage";
import GetBlogPosts from "@/components/GetBlogPosts";

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
        <GetBlogPosts />
      </main>

      <GalaxiesImage position="bottom" />
    </>
  );
}

export default page;
