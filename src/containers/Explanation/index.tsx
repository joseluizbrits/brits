"use client";

import { Container, Content, Labels } from "./styles";
import { useState } from "react";

import Button from "@/components/Button";
import Up from "@/icons/Up";
import LearnMore from "@/components/LearnMore";

function Explanation() {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Content>
        <h2>
          <small>Marketing alavancado</small>
          Um site personalizado e bem projetado eleva a sua marca
        </h2>
        <div>
          <Button secondary setActive={setActive}>
            Saber mais
          </Button>
          <LearnMore active={active} setActive={setActive} />
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
