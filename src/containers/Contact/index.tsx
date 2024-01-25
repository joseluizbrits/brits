"use client";

import { Container, Title } from "./styles";
import Form from "@/components/Form";

function Contact() {
  return (
    <Container className="scroll-align">
      <Title>
        <small>Caso você goste de formalidades</small>
        <span>Me envie um e-mail pelo formulário abaixo</span>
      </Title>
      <Form />
    </Container>
  );
}

export default Contact;
