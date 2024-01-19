import { Baloon, Container, ImageWrapper } from "./styles";
import Image from "next/image";
import img from "../../../public/perfil.jpg";

function Apresentation() {
  return (
    <Container>
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
    </Container>
  );
}

export default Apresentation;
