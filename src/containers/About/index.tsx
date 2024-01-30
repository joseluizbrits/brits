"use client";

import { Container } from "./styles";
import Apresentation from "@/components/Apresentation";
import Message from "@/components/Message";
import { useRef } from "react";
import Animation from "./animation";

function About() {
  const section = useRef(null);

  Animation(section);

  return (
    <Container id="about" ref={section}>
      <Apresentation />
      <Message />
    </Container>
  );
}

export default About;
