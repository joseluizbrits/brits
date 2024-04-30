"use client";

import { Container } from "./styles";
import { ubuntu } from "@/lib/fonts";
import parse from "html-react-parser";

import { TitleWrapper } from "@/styles/Text/TitleWrapper";
import { Paragraph } from "@/styles/Text/Paragraph";
import { steps } from "@/utils/steps";
import ArrowDraw from "@/icons/ArrowDraw";

function Process() {
  return (
    <Container id="process">
      <TitleWrapper $centered>
        <h2>Como funciona o processo?</h2>
        <Paragraph $color="gray" $strong="primary-light">
          O meu serviço é altamente personalizado e{" "}
          <strong>dedicado ao tipo do seu negócio</strong>. No final você recebe
          um site profissional, original, com beleza estética, alta performance
          e de fácil usabilidade.
        </Paragraph>
      </TitleWrapper>

      <ul>
        {steps.map(({ id, title, desc }, index) => (
          <li key={id} id={id}>
            <span className={ubuntu.className}>{index + 1}</span>
            <div>
              <h3 className={ubuntu.className}>{title}</h3>
              <Paragraph $color="gray" $strong="primary-light">
                {parse(desc)}
              </Paragraph>
            </div>
            {index + 1 < steps.length && <ArrowDraw />}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Process;
