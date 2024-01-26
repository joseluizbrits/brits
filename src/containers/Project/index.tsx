"use client";

import { Container, Content } from "./styles";
import { useState } from "react";

import Price from "@/components/Price";
import Button from "@/components/Button";

function Project() {
  const [active, setActive] = useState(false);

  return (
    <Container>
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
