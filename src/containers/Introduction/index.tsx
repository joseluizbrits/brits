"use client";

import { Container, Content } from "./styles";
import { useState } from "react";

import Button from "@/components/Button";
import ConvinceMe from "@/components/ConvinceMe";
import Up from "@/icons/Up";

function Introduction() {
  const [active, setActive] = useState(false);

  return (
    <Container>
      <Content className="container">
        <h2>
          Aumente a visibilidade de seus produtos e serviços
          <small>Credibilidade online</small>
        </h2>
        <div>
          <Button setActive={setActive}>Me convença</Button>
          <ul>
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
          </ul>
        </div>
      </Content>
      <ConvinceMe active={active} setActive={setActive} />
    </Container>
  );
}

export default Introduction;
