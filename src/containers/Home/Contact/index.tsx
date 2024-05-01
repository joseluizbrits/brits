"use client";

import { ContactContainer } from "./styles";
import { TitleWrapper } from "@/styles/Text/TitleWrapper";
import { Paragraph } from "@/styles/Text/Paragraph";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import Form from "@/components/Home/Form";
import ElasticUp from "@/animation/ElasticUp";

function Contact() {
  const container = useRef(null);

  ElasticUp(container, ["#title", "form", "#astronaut"]);

  return (
    <ContactContainer ref={container}>
      <TitleWrapper id="title">
        <h2>Me mande uma mensagem!</h2>
        <Paragraph $color="gray">
          Sinta-se à vontade para me mandar uma mensagem a respeito de qualquer
          dúvida que você tenha. Responderei o quanto antes :)
        </Paragraph>
      </TitleWrapper>

      <div>
        <Form />

        <div id="astronaut">
          <Image
            src="/astronaut-thinking.png"
            alt="Astronauta no espaço sentado em uma rocha"
            fill
            quality={100}
          />

          <Link
            href="https://api.whatsapp.com/send?phone=5521977201981"
            aria-label="Vai para o WhatsApp"
          >
            <Image
              src="/whatsapp.svg"
              alt="Ícone do WhatsApp"
              width={64}
              height={64}
            />
          </Link>
        </div>
      </div>
    </ContactContainer>
  );
}

export default Contact;
