"use client";

import { Container, Content, Labels } from "./styles";

import ConvinceMe from "@/components/ConvinceMe";
import Button from "@/components/Button";
import Up from "@/icons/Up";

function Introduction() {
  return (
    <Container>
      <Content className="container">
        <h2>
          <small>Credibilidade online</small>
          Aumente a visibilidade de seus produtos e serviços
        </h2>

        <div>
          <Button popupId={1}>Me convença</Button>

          <ConvinceMe />

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
