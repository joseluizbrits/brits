"use client";

import { PrismicRichText } from "@prismicio/react";
import {
  BlogPostDocumentDataHeroItem,
  Simplify,
} from "../../../../prismicio-types";

import { HeroContainer } from "./styles";
import { ubuntu } from "@/lib/fonts";
import Bars from "@/icons/Bars";

interface HeroProps {
  data: Simplify<BlogPostDocumentDataHeroItem> | undefined;
}

function Hero({ data }: HeroProps) {
  return (
    <HeroContainer>
      <div>
        <PrismicRichText
          field={data?.blog_title}
          components={{
            heading2: ({ children }) => (
              <h1 className={ubuntu.className}>
                {children} <span>{data?.blog_title_emphasis}</span>
              </h1>
            ),
          }}
        />

        <PrismicRichText field={data?.blog_subtitle} />
      </div>

      <Bars className="top" />
      <Bars className="bottom" />
    </HeroContainer>
  );
}

export default Hero;
