"use client";

import Button from "@/components/Button";
import { Container, Content } from "./styles";
import Up from "@/icons/Up";

function Explanation() {
  return (
    <Container>
      <Content className="container">
        <h2>
          <small>Marketing alavancado</small>
          Um site personalizado e bem projetado eleva a sua marca
        </h2>
        <div>
          <Button secondary>Saber mais</Button>
          <ul>
            <li>
              <span>personalidade</span>
              <Up />
            </li>
            <li>
              <span>reconhecimento</span>
              <Up />
            </li>
            <li>
              <span>confiança</span>
              <Up />
            </li>
          </ul>
        </div>
      </Content>
    </Container>
  );
}

export default Explanation;
