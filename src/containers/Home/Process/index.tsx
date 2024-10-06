"use client";

import { ProcessContainer } from "./styles";
import { TitleWrapper } from "@/styles/Text/TitleWrapper";
import { Paragraph } from "@/styles/Text/Paragraph";

import parse from "html-react-parser";
import { useRef } from "react";
import { ubuntu } from "@/lib/fonts";

import { process } from "@/containers/Home/Process/process";
import ElasticUp from "@/animation/ElasticUp";

function Process() {
  const container = useRef(null);

  ElasticUp(container, ["#title", ...process.map(({ id }) => `#${id}`)]);

  return (
    <ProcessContainer ref={container}>
      <TitleWrapper $centered id="title">
        <h2>Como funciona o processo?</h2>
        <Paragraph $color="gray" $strong="primary-light">
          O meu serviço é altamente personalizado e{" "}
          <strong>dedicado ao tipo do seu negócio</strong>. No final você recebe
          um site profissional, original, com beleza estética, alta performance
          e de fácil usabilidade.
        </Paragraph>
      </TitleWrapper>

      <ul>
        {process.map(({ id, title, desc }, index) => (
          <li key={id} id={id}>
            <span className={ubuntu.className}>{index + 1}</span>
            <div>
              <h3 className={ubuntu.className}>{title}</h3>
              <Paragraph $color="gray" $strong="primary-light">
                {parse(desc)}
              </Paragraph>
            </div>
            {/* {index + 1 < steps.length && <ArrowDraw />} */}
          </li>
        ))}
      </ul>
    </ProcessContainer>
  );
}

export default Process;
