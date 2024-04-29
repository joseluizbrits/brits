"use client";

import { ProjectsContainer, ImageWrapper } from "./styles";
import { TitleWrapper } from "@/styles/Text/TitleWrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Image from "next/image";
import projects from "@/utils/projects";
import { Paragraph } from "@/styles/Text/Paragraph";
import ButtonOutlined from "@/components/Buttons/ButtonOutlined";
import Link from "next/link";

function Projects() {
  return (
    <ProjectsContainer id="projects">
      <TitleWrapper>
        <h2>Conheça os meus projetos!</h2>
      </TitleWrapper>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
      >
        {projects.map(({ id, img, alt, desc, href, github }) => (
          <SwiperSlide key={id}>
            <Link href={href} target="_blank">
              <ImageWrapper>
                <Image src={img} alt={alt} fill quality={100} unoptimized />
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
