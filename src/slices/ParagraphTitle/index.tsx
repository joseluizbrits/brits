"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Title as H } from "@/styles/Blog/Title";

export type ParagraphTitleProps =
  SliceComponentProps<Content.ParagraphTitleSlice>;

const ParagraphTitle = ({ slice }: ParagraphTitleProps): JSX.Element => {
  return (
    <PrismicRichText
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      field={slice.primary.blog_paragraph_title}
      components={{
        heading2: ({ children }) => <H>{children}</H>,
      }}
    />
  );
};

export default ParagraphTitle;
