import { Metadata } from "next";

import TitleCircle from "@/components/Blog/TitleCircle";
import GalaxiesImage from "@/components/Blog/GalaxiesImage";
import GetPosts from "@/components/Blog/GetPosts";

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
          marginTop: "120px",
          marginBottom: "200px",
          display: "grid",
          gap: "80px",
        }}
      >
        <TitleCircle>Todos os Posts</TitleCircle>
        <GetPosts />
      </main>

      <GalaxiesImage position="bottom" />
    </>
  );
}

export default page;
