"use client";

import { Title, Text, ProjectWrapper, ImageWrapper } from "./styles";
import Image from "next/image";

import ButtonProject from "@/components/ButtonProject";
import projects from "@/utils/projects";

function Services() {
  return (
    <section id="services">
      <Title>
        <h2>
          O que <em>Brits</em> pode te oferecer:
        </h2>
      </Title>

      {projects.map(({ id, title, desc, img, alt, href }, index) => (
        <ProjectWrapper key={id} id={id}>
          <Text id={`text-${index + 1}`}>
            <p>
              <strong>{title}</strong> {desc}
            </p>

            <ButtonProject href={href} />
          </Text>

          <ImageWrapper id={`img-${index + 1}`}>
            <Image
              src={img}
              alt={alt}
              sizes="(max-width: 1024px) 85vw, 50vw"
              fill
              priority
              unoptimized
            ></Image>
          </ImageWrapper>
        </ProjectWrapper>
      ))}
    </section>
  );
}

export default Services;
