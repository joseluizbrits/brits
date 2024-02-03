"use client";

import { ImageWrapper } from "./styles";
import Image, { StaticImageData } from "next/image";

function ImageBlog({
  src,
  alt,
  className,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) {
  return (
    <ImageWrapper>
      <Image
        className={className}
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 40vw"
      />
    </ImageWrapper>
  );
}

export default ImageBlog;
