"use client";

import { TitleWrapper } from "@/styles/Text/TitleWrapper";
import { ContactContainer } from "./styles";
import Form from "@/components/Form";
import { Paragraph } from "@/styles/Text/Paragraph";
import Image from "next/image";
import Link from "next/link";

function Contact() {
  return (
    <ContactContainer id="contact">
      <TitleWrapper>
        <h2>Me mande uma mensagem!</h2>
        <Paragraph $color="gray">
          Sinta-se à vontade para me mandar uma mensagem a respeito de qualquer
          dúvida que você tenha. Responderei o quanto antes :)
        </Paragraph>
      </TitleWrapper>

      <div>
        <Form />

        <div>
          <Image
            src="/astronaut-thinking.png"
            alt="Astronauta no espaço sentado em uma rocha"
            fill
            quality={100}
          />

          <Link
            href="https://api.whatsapp.com/send?phone=5521977201981"
            aria-label="Vai para o WhatsApp"
            target="_blank"
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
