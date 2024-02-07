"use client";

import Image from "next/image";
import img from "../../../public/author.jpg";
import { Text, Wrapper } from "./styles";
import useMedia from "@/hooks/useMedia";
import { DateField } from "@prismicio/client";

function Author({ date }: { date: DateField }) {
  const mobile = useMedia("(max-width: 768px)");

  const dateCut = date?.split("-");
  const year = (dateCut && dateCut[0]) || new Date().getFullYear();
  const month = (dateCut && `${dateCut[1]}/`) || "";
  const day = (dateCut && `${dateCut[2]}/`) || "";

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
        <span>Publicado em {day + month + year}</span>
      </Text>
    </Wrapper>
  );
}

export default Author;
