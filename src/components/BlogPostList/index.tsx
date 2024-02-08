"use client";

import { Content, ImageWrapper, PostDate, TextWrapper } from "./styles";
import { PrismicRichText } from "@prismicio/react";
import { AllDocumentTypes } from "../../../prismicio-types";

import Image from "next/image";
import Link from "next/link";

import Calender from "@/icons/Calender";
import ArrowRight from "@/icons/ArrowRight";
import { formatDate } from "@/utils/formatDate";

function BlogPostList({ posts }: { posts: AllDocumentTypes[] }) {
  return (
    <ul>
      {posts.map(({ uid, data }) => (
        <Content key={uid}>
          <ImageWrapper>
            <Image
              src={data.blog_post_image.url ?? ""}
              alt={data.blog_post_image.alt ?? ""}
              fill
              sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 40vw"
              unoptimized
            />
          </ImageWrapper>

          <TextWrapper>
            <h2>{data.meta_title}</h2>

            <PrismicRichText field={data.hero[0]?.blog_subtitle} />

            <div>
              <PostDate>
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
    </ul>
  );
}

export default BlogPostList;
