"use client";

import { Container, Title, Text, ProjectWrapper, ImageWrapper } from "./styles";
import Image from "next/image";

import projects from "@/utils/projects";
import { useRef } from "react";
import Animation from "./animation";

function Services() {
  const section = useRef(null);

  Animation(section);

  return (
    <Container id="services" ref={section}>
      <Title>
        <h2>
          O que <em>Brits</em> pode te oferecer:
        </h2>
      </Title>

      {projects.map(({ id, title, desc }, index) => (
        <ProjectWrapper key={id} id={id}>
          <Text id={`text-${index + 1}`}>
            <p>
              <strong>{title}</strong> {desc}
            </p>
          </Text>
        </ProjectWrapper>
      ))}
    </Container>
  );
}

export default Services;
