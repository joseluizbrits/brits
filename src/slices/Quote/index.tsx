"use client";

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Quote as P } from "@/styles/Blog/Quote";

export type QuoteProps = SliceComponentProps<Content.QuoteSlice>;

const Quote = ({ slice }: QuoteProps): JSX.Element => {
  return (
    <PrismicRichText
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      field={slice.primary.blog_quote}
      components={{
        paragraph: ({ children }) => <P>{children}</P>,
      }}
    />
  );
};

export default Quote;
