"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { BlogParagraph as P } from "@/styles/Blog/BlogParagraph";
import { lato } from "@/lib/fonts";

export type ParagraphProps = SliceComponentProps<Content.ParagraphSlice>;

const Paragraph = ({ slice }: ParagraphProps): JSX.Element => {
  return (
    <PrismicRichText
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      field={slice.primary.blog_paragraph}
      components={{
        paragraph: ({ children }) => (
          <P className={lato.className}>{children}</P>
        ),
      }}
    />
  );
};

export default Paragraph;
