"use client";

import { Container, Content, ImageWrapper } from "./styles";

import Price from "@/components/Price";
import Button from "@/components/Button";
import { useRef } from "react";
import Animation from "./animation";
import Image from "next/image";

function Project() {
  const section = useRef(null);

  Animation(section);

  return (
    <Container id="project" ref={section}>
      <ImageWrapper>
        <Image
          src="/art.webp"
          alt="Mulher sentada em um banquinho no museu apreciando quadros artísticos"
          fill
          sizes="100vw"
          unoptimized
        ></Image>
      </ImageWrapper>

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
