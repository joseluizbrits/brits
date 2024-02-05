import { Metadata } from "next";
import Content from "@/containers/Blog/Content";
import { post } from "@/utils/post";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: post.title.text + " " + post.title.emphasis + " | BRITS Blog",
    description:
      "O que fazer diante de um mundo acelerado? Como se adaptar as constantes mundanças tecnológicas? Será que seremos profissionais relavantes no futuro?",
    openGraph: {
      title: post.title.text + " " + post.title.emphasis + " | BRITS Blog",
      description:
        "O que fazer diante de um mundo acelerado? Como se adaptar as constantes mundanças tecnológicas? Será que seremos profissionais relavantes no futuro?",
    },
  };
}

function page() {
  return <Content />;
}

export default page;
