"use client";

import { ubuntu } from "@/lib/fonts";
import { AboutContainer } from "./styles";
import { Paragraph } from "@/styles/Text/Paragraph";
import Image from "next/image";
import { useRef } from "react";
import Animation from "@/styles/animation";

function About() {
  const container = useRef(null);

  Animation(container, ["#about-text", "#about-image"]);

  return (
    <AboutContainer id="about" ref={container}>
      <div id="about-text">
        <h2 className={ubuntu.className}>Quem é Brits?</h2>
        <Paragraph $color="gray" $strong="tertiary">
          Sou um <strong>desenvolvedor web front-end</strong> que por pouco não
          se tornou um engenheiro civil.
        </Paragraph>

        <Paragraph $color="gray" $strong="tertiary">
          Além de tecnologia, gosto muito de arte, ciência e filosofia — são
          combustíveis que me fazem estar sempre{" "}
          <strong>buscando uma nova maneira criativa</strong> de desenvolver as
          coisas.
        </Paragraph>

        <Paragraph $color="gray" $strong="tertiary">
          Hoje o meu foco profissional é desenvolver sites modernos, bonitos e
          performáticos para aqueles que desejam{" "}
          <strong>entrar de maneira impactante na internet</strong>.
        </Paragraph>
      </div>

      <div id="about-image">
        <Image
          src="/crazy-image.png"
          alt="Arte colagem maluca com o rosto de Brits de lado com donuts gigantes colocados em sua cabeça por uma mão gigante"
          sizes="(max-width: 1080px) 100vw, 50vw"
          fill
        />
      </div>
    </AboutContainer>
  );
}

export default About;
