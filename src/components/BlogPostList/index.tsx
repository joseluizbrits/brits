"use client";

import { Container, ImageWrapper, TextWrapper, PostDate } from "./styles";

import { AllDocumentTypes } from "../../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { useRouter } from "next/navigation";
import { ubuntu } from "@/lib/fonts";

import { Paragraph } from "@/styles/Text/Paragraph";
import { formatDate } from "@/utils/formatDate";
import ButtonFilled from "../Buttons/ButtonFilled";
import Calender from "@/icons/Calender";

type BlogPostListProps = {
  posts: AllDocumentTypes[];
  except?: string;
};

function BlogPostList({ posts, except }: BlogPostListProps) {
  const router = useRouter();

  return (
    <Container>
      {posts.map(
        ({ uid, data }, index) =>
          except !== uid && (
            <li key={uid}>
              <ImageWrapper onClick={() => router.push(`/blog/${uid}`)}>
                <PrismicNextImage
                  field={data.blog_post_image}
                  fill
                  sizes="(max-width: 768px) 70vw, (max-width: 1280px) 50vw, 40vw"
                  priority={index === 0}
                />
              </ImageWrapper>

              <TextWrapper>
                <h2
                  className={ubuntu.className}
                  onClick={() => router.push(`/blog/${uid}`)}
                >
                  {data.meta_title}
                </h2>

                <PrismicRichText
                  field={data.hero[0]?.blog_subtitle}
                  components={{
                    paragraph: ({ children }) => (
                      <Paragraph
                        className={ubuntu.className}
                        $color="primary-light"
                        onClick={() => router.push(`/blog/${uid}`)}
                      >
                        {children}
                      </Paragraph>
                    ),
                  }}
                />

                <div>
                  <PostDate>
                    <Calender />
                    {formatDate(data.blog_post_date)}
                  </PostDate>

                  <ButtonFilled href={`/blog/${uid}`} color="light" arrow>
                    Ler mais
                  </ButtonFilled>
                </div>
              </TextWrapper>
            </li>
          )
      )}
    </Container>
  );
}

export default BlogPostList;
