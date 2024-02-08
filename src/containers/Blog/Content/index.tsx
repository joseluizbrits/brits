"use client";

import parse from "html-react-parser";

import ImageBlog from "@/components/ImageBlog";
import { Title } from "@/styles/Blog/Title";
import { Paragraph } from "@/styles/Blog/Paragraph";
import { lato } from "@/lib/fonts";
import { post } from "@/utils/post";
import { Quote } from "@/styles/Blog/Quote";
import { notFound, useParams } from "next/navigation";

function Content() {
  const params = useParams<{ uid: string }>();

  if (params.uid !== post.uid) notFound();

  const elements = post.content;

  return (
    <>
      {elements.map(({ type, text, src, alt }, index) =>
        type === "title" ? (
          <Title key={index}>{text}</Title>
        ) : type === "paragraph" && text ? (
          <Paragraph key={index} className={lato.className}>
            {parse(text)}
          </Paragraph>
        ) : type === "quote" && text ? (
          <Quote key={index} className={lato.className}>
            {text}
          </Quote>
        ) : (
          type === "img" &&
          alt &&
          src && <ImageBlog key={index} alt={alt} src={src} />
        )
      )}
    </>
  );
}

export default Content;
