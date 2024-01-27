"use client";

import { Container, Content } from "./styles";

import Price from "@/components/Price";
import Button from "@/components/Button";

function Project() {
  return (
    <Container>
      <Content className="container">
        <h2>
          Cada projeto é uma oportunidade para nos reinventarmos e superar
          expectativas
        </h2>

        <Button popupId={3}>Simular preço</Button>

        <Price />
      </Content>
    </Container>
  );
}

export default Project;
