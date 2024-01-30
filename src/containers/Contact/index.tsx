"use client";

import { useRef } from "react";
import { Container, Title } from "./styles";
import Form from "@/components/Form";
import Animation from "./animation";

function Contact() {
  const section = useRef(null);

  Animation(section);

  return (
    <Container id="contact" ref={section}>
      <Title>
        <small>Caso você goste de formalidades</small>
        <span>Me envie um e-mail pelo formulário abaixo</span>
      </Title>
      <Form />
    </Container>
  );
}

export default Contact;
