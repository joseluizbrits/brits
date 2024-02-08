"use client";

import {
  Container,
  Content,
  ImageWrapper,
  PostDate,
  TextWrapper,
} from "./styles";
import { PrismicRichText } from "@prismicio/react";
import { AllDocumentTypes } from "../../../prismicio-types";

import Image from "next/image";
import Link from "next/link";

import Calender from "@/icons/Calender";
import ArrowRight from "@/icons/ArrowRight";
import { formatDate } from "@/utils/formatDate";
import useMedia from "@/hooks/useMedia";
import { lato } from "@/lib/fonts";

function BlogPostList({ posts }: { posts: AllDocumentTypes[] }) {
  const mobile = useMedia("(max-width: 992px)");

  return (
    <Container>
      {posts.map(({ uid, data }, index) => (
        <Content key={uid} $reverse={!mobile ? index % 2 === 1 : false}>
          <ImageWrapper>
            <Image
              src={data.blog_post_image.url ?? ""}
              alt={data.blog_post_image.alt ?? ""}
              fill
              sizes="(max-width: 768px) 70vw, (max-width: 1280px) 50vw, 40vw"
              unoptimized
            />
          </ImageWrapper>

          <TextWrapper $reverse={!mobile ? index % 2 === 1 : false}>
            <h2>{data.meta_title}</h2>

            <PrismicRichText
              field={data.hero[0]?.blog_subtitle}
              components={{
                paragraph: ({ children }) => (
                  <p className={lato.className}>{children}</p>
                ),
              }}
            />

            <div>
              <PostDate $reverse={!mobile ? index % 2 === 1 : false}>
                <Calender />
                {formatDate(data.blog_post_date)}
              </PostDate>

              <Link href={`/blog/${uid}`}>
                Ler mais
                <ArrowRight />
              </Link>
            </div>
          </TextWrapper>
        </Content>
      ))}
    </Container>
  );
}

export default BlogPostList;
