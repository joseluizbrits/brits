"use client";

import { Container, Content, Labels } from "./styles";
import { useState } from "react";

import Button from "@/components/Button";
import ConvinceMe from "@/components/ConvinceMe";
import Up from "@/icons/Up";

function Introduction() {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Content>
        <h2>
          Aumente a visibilidade de seus produtos e serviços
          <small>Credibilidade online</small>
        </h2>
        <div>
          <Button setActive={setActive}>Me convença</Button>
          <ConvinceMe active={active} setActive={setActive} />
          <Labels>
            <li>
              <span>clientes</span>
              <Up />
            </li>
            <li>
              <span>vendas</span>
              <Up />
            </li>
            <li>
              <span>faturameto</span>
              <Up />
            </li>
          </Labels>
        </div>
      </Content>
    </Container>
  );
}

export default Introduction;
