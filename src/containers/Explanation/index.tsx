"use client";

import { Container, Content, Labels } from "./styles";

import Button from "@/components/Button";
import LearnMore from "@/components/LearnMore";
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
          <Button secondary popupId={2}>
            Saber mais
          </Button>

          <LearnMore />

          <Labels>
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
          </Labels>
        </div>
      </Content>
    </Container>
  );
}

export default Explanation;
