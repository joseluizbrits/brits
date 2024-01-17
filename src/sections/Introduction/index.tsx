"use client";

import Up from "@/icons/Up";
import { Container, Content } from "./styles";
import Button from "@/components/Button";

function Introduction() {
  return (
    <Container>
      <Content className="container">
        <h2>
          Aumente a visibilidade de seus produtos e serviços
          <small>Credibilidade online</small>
        </h2>
        <div>
          <Button>Me convença</Button>
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
    </Container>
  );
}

export default Introduction;
