"use client";

import Image from "next/image";
import img from "../../../public/author.jpg";
import { Text, Wrapper } from "./styles";
import useMedia from "@/hooks/useMedia";

function Author() {
  const mobile = useMedia("(max-width: 768px)");

  return (
    <Wrapper>
      <Image
        width={mobile ? 40 : 64}
        height={mobile ? 40 : 64}
        src={img.src}
        unoptimized
        alt="Imagem do Brits sorrindo com o fundo atrás dele em roxo claro"
      />
      <Text>
        <span>José Luiz Brits</span>
        <span>Publicado em 01/02/2024</span>
      </Text>
    </Wrapper>
  );
}

export default Author;
