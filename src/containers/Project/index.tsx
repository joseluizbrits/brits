"use client";

import { Container, Content, ImageWrapper } from "./styles";

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
      </Content>
    </Container>
  );
}

export default Project;
