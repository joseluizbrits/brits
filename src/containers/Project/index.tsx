"use client";

import { Container, Content } from "./styles";

import Price from "@/components/Price";
import Button from "@/components/Button";
import { useRef } from "react";
import Animation from "./animation";

function Project() {
  const section = useRef(null);

  Animation(section);

  return (
    <Container id="project" ref={section}>
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
