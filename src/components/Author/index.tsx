"use client";

import { AuthorWrapper } from "./styles";
import { DateField } from "@prismicio/client";
import Image from "next/image";

import useMedia from "@/hooks/useMedia";
import { formatDate } from "@/utils/formatDate";
import { ubuntu } from "@/lib/fonts";

function Author({ date }: { date: DateField }) {
  const mobile = useMedia("(max-width: 768px)");

  return (
    <AuthorWrapper>
      <Image
        width={mobile ? 40 : 64}
        height={mobile ? 40 : 64}
        src="/author.jpg"
        unoptimized
        alt="Imagem do Brits sorrindo com o fundo atrás dele em roxo claro"
      />

      <div>
        <span className={ubuntu.className}>José Luiz Brits</span>
        <span className={ubuntu.className}>
          Publicado em {formatDate(date)}
        </span>
      </div>
    </AuthorWrapper>
  );
}

export default Author;
