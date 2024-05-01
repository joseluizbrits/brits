"use client";

import { SeeBlogContentContainer } from "./styles";
import { TitleWrapper } from "@/styles/Text/TitleWrapper";
import { Paragraph } from "@/styles/Text/Paragraph";
import { useRef } from "react";

import ButtonOutlined from "@/components/Buttons/ButtonOutlined";
import ElasticUp from "@/animation/ElasticUp";
import PostList from "@/components/Blog/PostList";
import { AllDocumentTypes } from "../../../../prismicio-types";

type SeeBlogProps = {
  post: AllDocumentTypes;
};

function SeeBlogContent({ post }: SeeBlogProps) {
  const container = useRef(null);

  ElasticUp(container, ["#title", "#posts"]);

  return (
    <SeeBlogContentContainer ref={container}>
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

      <PostList posts={[post]} />
    </SeeBlogContentContainer>
  );
}

export default SeeBlogContent;
