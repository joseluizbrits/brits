"use client";

import { IntroductionContainer } from "./styles";
import { Paragraph } from "@/styles/Text/Paragraph";
import { Label } from "@/styles/Text/Label";

import { montserrat, ubuntu } from "@/lib/fonts";
import Image from "next/image";

function Introduction() {
  return (
    <IntroductionContainer>
      <div>
        <span className={ubuntu.className}>O que eu faço?</span>
        <h2 className={montserrat.className}>
          Desenvolvo para você um site profissional
        </h2>
        <Label>moderno, bonito e performático</Label>
      </div>

      <div>
        <div>
          <Image
            src="/2-circles-triangle.svg"
            alt="Ícone com 2 círculos e um triângulo"
            width={48}
            height={46}
          />
          <h3 className={ubuntu.className}>Estética e performance</h3>
          <Paragraph $color="gray-light">
            Os meus sites são criados através da concepção de um design original
            e de codificação com tecnologias modernas.
          </Paragraph>
        </div>

        <div>
          <Image
            src="/2-triangles-circle.svg"
            alt="Ícone com 2 triângulos e um círculo"
            width={48}
            height={46}
          />
          <h3>Processo simples e ágil</h3>
          <Paragraph $color="gray-light">
            Ofereço um serviço pouco burocrático e altamente personalizado que
            facilita a criação de um site profissional para aqueles que possuem
            um pequeno negócio.
          </Paragraph>
        </div>
      </div>
    </IntroductionContainer>
  );
}

export default Introduction;
