"use client";

import { Container, Content, ImageWrapper, Labels } from "./styles";

import Button from "@/components/Button";
import LearnMore from "@/components/LearnMore";
import Up from "@/icons/Up";
import Animation from "./animation";
import { useRef } from "react";
import Image from "next/image";

function Explanation() {
  const section = useRef(null);

  Animation(section);

  return (
    <Container id="explan" ref={section}>
      <ImageWrapper>
        <Image
          src="/note.jpg"
          alt="Ênfase nos olhos de uma mulher com o rosto coberto de tinta colorida"
          fill
          sizes="75vw"
          unoptimized
        ></Image>
      </ImageWrapper>

      <Content className="container">
        <h2>
          <small>Marketing alavancado</small>
          Um site personalizado e bem projetado eleva a sua marca
        </h2>

        <div>
          <Button secondary popupId={2}>
            Saber mais
          </Button>

          <LearnMore />

          <Labels>
            <li>
              <span>personalidade</span>
              <Up />
            </li>

            <li>
              <span>reconhecimento</span>
              <Up />
            </li>

            <li>
              <span>confiança</span>
              <Up />
            </li>
          </Labels>
        </div>
      </Content>
    </Container>
  );
}

export default Explanation;
