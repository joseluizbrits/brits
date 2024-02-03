"use client";

import Image from "next/image";
import img from "../../../public/author.jpg";
import { Text, Wrapper } from "./styles";

function Author() {
  return (
    <Wrapper>
      <Image
        width={64}
        height={64}
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
