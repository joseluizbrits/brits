"use client";

import Bars from "@/icons/Bars";
import { Container, Content } from "./styles";

function HeroBlog() {
  return (
    <Container>
      <Content>
        <h1>
          Eu ainda serei um profissional relevante <span>no futuro?</span>
        </h1>
        <p>
          Uma reflexão sobre a evolução das IAs e seus impactos no mercado de
          trabalho
        </p>
      </Content>
      <Bars className="top" />
      <Bars className="bottom" />
    </Container>
  );
}

export default HeroBlog;
