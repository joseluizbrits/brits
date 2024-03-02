import { Baloon, Container, Me } from "./styles";
import Image from "next/image";
import img from "../../../public/perfil.webp";
import Animation from "./animation";
import { useRef } from "react";

function Apresentation() {
  const comp = useRef(null);

  Animation(comp);

  return (
    <Container ref={comp}>
      <Me id="me">
        <Image
          src={img.src}
          alt="Imagem do Brits sorrindo com o fundo atrás dele em roxo claro"
          fill
          priority
          unoptimized
        />

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
      </Me>
    </Container>
  );
}

export default Apresentation;
