"use client";

import Bars from "@/icons/Bars";
import { Container, Content } from "./styles";
import {
  BlogPostDocumentDataHeroItem,
  Simplify,
} from "../../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";

interface HeroProps {
  data: Simplify<BlogPostDocumentDataHeroItem> | undefined;
}

function HeroBlog({ data }: HeroProps) {
  return (
    <Container>
      <Content>
        <PrismicRichText
          field={data?.blog_title}
          components={{
            heading2: ({ children }) => (
              <h1>
                {children} <span>{data?.blog_title_emphasis}</span>
              </h1>
            ),
          }}
        />

        <PrismicRichText field={data?.blog_subtitle} />
      </Content>
      <Bars className="top" />
      <Bars className="bottom" />
    </Container>
  );
}

export default HeroBlog;
