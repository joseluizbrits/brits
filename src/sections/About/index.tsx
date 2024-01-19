"use client";

import { Container, Apresentation, ImageWrapper, Baloon } from "./styles";
import Image from "next/image";
import img from "../../../public/perfil.jpg";

function About() {
  return (
    <Container>
      <Apresentation>
        <ImageWrapper>
          <Image
            src={img.src}
            alt="Imagem do Brits sorrindo com o fundo atrás dele em roxo claro"
            fill
            priority
            unoptimized
          />
        </ImageWrapper>
        <Baloon className="baloon-short">
          <span>Olá, eu me chamo Brits!</span>
        </Baloon>
        <Baloon className="baloon-large">
          <span>
            Sou profissional em conversa fiada e especializado em reflexões
            filosóficas sobre a vida. Também costumo desenvolver websites nas
            horas vagas.
          </span>
        </Baloon>
      </Apresentation>
    </Container>
  );
}

export default About;
