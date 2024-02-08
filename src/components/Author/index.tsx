"use client";

import { Text, Wrapper } from "./styles";
import { DateField } from "@prismicio/client";
import Image from "next/image";

import useMedia from "@/hooks/useMedia";
import { formatDate } from "@/utils/formatDate";

function Author({ date }: { date: DateField }) {
  const mobile = useMedia("(max-width: 768px)");

  return (
    <Wrapper>
      <Image
        width={mobile ? 40 : 64}
        height={mobile ? 40 : 64}
        src="/author.jpg"
        unoptimized
        alt="Imagem do Brits sorrindo com o fundo atrás dele em roxo claro"
      />
      <Text>
        <span>José Luiz Brits</span>
        <span>Publicado em {formatDate(date)}</span>
      </Text>
    </Wrapper>
  );
}

export default Author;
