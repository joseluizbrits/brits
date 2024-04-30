"use client";

import { SeeBlogContainer } from "./styles";
import { TitleWrapper } from "@/styles/Text/TitleWrapper";
import { Paragraph } from "@/styles/Text/Paragraph";

import ButtonOutlined from "@/components/Buttons/ButtonOutlined";
import GetBlogPosts from "@/components/GetBlogPosts";
import { useRef } from "react";
import Animation from "@/styles/animation";

function SeeBlog() {
  const container = useRef(null);

  Animation(container, ["#title", "#posts"]);

  return (
    <SeeBlogContainer ref={container}>
      <TitleWrapper id="title">
        <h2>Confira o meu blog!</h2>
        <Paragraph $color="gray">
          Como um amante da arte, ciência e filosofia escrevo com muito carinho
          no meu blog trazendo reflexões sobre a vida, questões sociais e
          profissionais atuais.
        </Paragraph>
      </TitleWrapper>

      <ButtonOutlined href="/blog" borderless arrow>
        Todos os posts
      </ButtonOutlined>

      <GetBlogPosts onlyFirst />
    </SeeBlogContainer>
  );
}

export default SeeBlog;
