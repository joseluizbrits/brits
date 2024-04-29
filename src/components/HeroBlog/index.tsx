"use client";

import { PrismicRichText } from "@prismicio/react";
import {
  BlogPostDocumentDataHeroItem,
  Simplify,
} from "../../../prismicio-types";

import { HeroBlogContainer } from "./styles";
import { ubuntu } from "@/lib/fonts";
import Bars from "@/icons/Bars";

interface HeroBlogProps {
  data: Simplify<BlogPostDocumentDataHeroItem> | undefined;
}

function HeroBlog({ data }: HeroBlogProps) {
  return (
    <HeroBlogContainer>
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
    </HeroBlogContainer>
  );
}

export default HeroBlog;
