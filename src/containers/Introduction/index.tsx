"use client";

import { Container, Content, ImageWrapper, Labels } from "./styles";

import ConvinceMe from "@/components/ConvinceMe";
import Button from "@/components/Button";
import Up from "@/icons/Up";
import Animation from "./animation";
import { useRef } from "react";
import Image from "next/image";

function Introduction() {
  const section = useRef(null);

  Animation(section);

  return (
    <Container id="intro" ref={section}>
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
