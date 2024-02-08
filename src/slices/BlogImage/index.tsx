"use client";

import { ImageWrapper } from "./styles";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

export type BlogImageProps = SliceComponentProps<Content.BlogImageSlice>;

const BlogImage = ({ slice }: BlogImageProps): JSX.Element => {
  return (
    <ImageWrapper
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage
        field={slice.primary.blog_image}
        fill
        sizes="(max-width: 768px) 70vw, (max-width: 1280px) 50vw, 40vw"
      />
    </ImageWrapper>
  );
};

export default BlogImage;
