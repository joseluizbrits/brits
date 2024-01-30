"use client";

import { Title, Text, ProjectWrapper, ImageWrapper } from "./styles";
import Image from "next/image";

import ButtonProject from "@/components/ButtonProject";
import projects from "@/utils/projects";
import { useRef } from "react";
import Animation from "./animation";

function Services() {
  const section = useRef(null);

  Animation(section, projects);

  return (
    <section id="services" ref={section}>
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

            <ButtonProject id={`see-project-${index + 1}`} href={href} />
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
