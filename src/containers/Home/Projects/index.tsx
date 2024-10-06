"use client";

import { ProjectsContainer, ImageWrapper } from "./styles";
import { TitleWrapper } from "@/styles/Text/TitleWrapper";
import { Paragraph } from "@/styles/Text/Paragraph";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import projects from "@/containers/Home/Projects/projects";
import useMedia from "@/hooks/useMedia";
import ButtonOutlined from "@/components/Buttons/ButtonOutlined";
import ElasticUp from "@/animation/ElasticUp";

function Projects() {
  const mobile = useMedia("(max-width: 1080px)");
  const container = useRef(null);

  ElasticUp(container, ["#title", "#projects"]);

  return (
    <ProjectsContainer ref={container}>
      <TitleWrapper id="title">
        <h2>Conheça os meus projetos!</h2>
      </TitleWrapper>

      <Swiper
        id="projects"
        slidesPerView={mobile ? 1 : 2}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
      >
        {projects.map(({ id, img, alt, desc, href, github }) => (
          <SwiperSlide key={id}>
            <Link href={href} target="_blank">
              <ImageWrapper className="skeleton">
                <Image
                  src={img}
                  alt={alt}
                  fill
                  quality={100}
                  sizes="(max-width: 1080px) 100vw, 50vw"
                />
              </ImageWrapper>

              <Paragraph $color="primary-light">{desc}</Paragraph>
            </Link>

            <div>
              <ButtonOutlined href={href} arrow external>
                Ver projeto
              </ButtonOutlined>

              <Link
                href={github}
                target="_blank"
                aria-label="Vai para o repositório do GitHub"
              >
                <Image
                  src="/github.svg"
                  alt="Ícone do Github"
                  width={29}
                  height={28}
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ProjectsContainer>
  );
}

export default Projects;
