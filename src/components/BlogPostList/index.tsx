"use client";

import {
  Container,
  Content,
  ImageWrapper,
  PostDate,
  TextWrapper,
} from "./styles";
import { AllDocumentTypes } from "../../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { lato } from "@/lib/fonts";
import Link from "next/link";

import Calender from "@/icons/Calender";
import ArrowRight from "@/icons/ArrowRight";
import useMedia from "@/hooks/useMedia";
import { formatDate } from "@/utils/formatDate";
import { useRouter } from "next/navigation";

function BlogPostList({
  posts,
  except,
}: {
  posts: AllDocumentTypes[];
  except?: string;
}) {
  const mobile = useMedia("(max-width: 992px)");
  const router = useRouter();

  return (
    <Container>
      {posts.map(
        ({ uid, data }, index) =>
          except !== uid && (
            <Content key={uid} $reverse={!mobile ? index % 2 === 1 : false}>
              <ImageWrapper onClick={() => router.push(`/blog/${uid}`)}>
                <PrismicNextImage
                  field={data.blog_post_image}
                  fill
                  sizes="(max-width: 768px) 70vw, (max-width: 1280px) 50vw, 40vw"
                  priority={index === 0}
                />
              </ImageWrapper>

              <TextWrapper $reverse={!mobile ? index % 2 === 1 : false}>
                <h2 onClick={() => router.push(`/blog/${uid}`)}>
                  {data.meta_title}
                </h2>

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
          )
      )}
    </Container>
  );
}

export default BlogPostList;
