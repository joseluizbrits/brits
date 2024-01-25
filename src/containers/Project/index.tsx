"use client";

import { Container, Content } from "./styles";
import { useState } from "react";

import Button from "@/components/Button";
import Price from "@/components/Price";

function Project() {
  const [active, setActive] = useState(false);

  return (
    <Container className="scroll-align">
      <Content className="container">
        <h2>
          Cada projeto é uma oportunidade para nos reinventarmos e superar
          expectativas
        </h2>
        <Button setActive={setActive}>Simular preço</Button>
        <Price active={active} setActive={setActive} />
      </Content>
    </Container>
  );
}

export default Project;
