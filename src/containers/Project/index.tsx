"use client";

import { Container, Content } from "./styles";
import Button from "@/components/Button";

function Project() {
  return (
    <Container>
      <Content className="container">
        <h2>
          Cada projeto é uma oportunidade para nos reinventarmos e superar
          expectativas
        </h2>
        <Button>Simular preço</Button>
      </Content>
    </Container>
  );
}

export default Project;
