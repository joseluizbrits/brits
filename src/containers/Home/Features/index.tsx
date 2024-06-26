"use client";

import { FeaturesContainer } from "./styles";
import { TitleWrapper } from "@/styles/Text/TitleWrapper";
import { Paragraph } from "@/styles/Text/Paragraph";

import { useRef } from "react";
import { montserrat } from "@/lib/fonts";

import Image from "next/image";
import ElasticUp from "@/animation/ElasticUp";

function Features() {
  const container = useRef(null);

  ElasticUp(container, [
    "#title",
    "#feature-1",
    "#feature-2",
    "#feature-3",
    "#feature-4",
  ]);

  return (
    <FeaturesContainer ref={container}>
      <TitleWrapper id="title">
        <h2>Por que escolher Brits?</h2>
        <Paragraph $color="gray">
          Comigo você tem um processo pouco burocrático e com custo bastante
          otimizado, pois eu só te entrego aquilo que é estritamente necessário.
        </Paragraph>
      </TitleWrapper>

      <div>
        <div id="feature-1">
          <h3 className={montserrat.className}>Design Profissional</h3>
          <Paragraph $color="gray-light" $strong="primary-light">
            O layout é desenhado e pensado única e exclusivamente às suas
            necessidades, buscando reforçar a{" "}
            <strong>credibilidade de sua marca</strong> no mercado. Você terá
            orgulho em divulgar o endereço do seu site.
          </Paragraph>

          <div>
            <Image src="/bulb.svg" alt="Ícone de uma lâmpada" fill />
          </div>
        </div>

        <div id="feature-2">
          <h3 className={montserrat.className}>Alta Performance</h3>
          <Paragraph $color="gray-light" $strong="primary-light">
            A tecnologia utilizada{" "}
            <strong>reduz expressivamente as taxas de carregamento</strong>,
            tornando a navegação do seu site quase que instantânea. Desempenho
            não será um problema.
          </Paragraph>

          <div>
            <Image src="/speedometer.svg" alt="Ícone de um velocímetro" fill />
          </div>
        </div>

        <div id="feature-3">
          <h3 className={montserrat.className}>Site Seguro</h3>
          <Paragraph $color="gray-light" $strong="primary-light">
            A segurança é garantida com{" "}
            <strong>certificado SSL e criptografia</strong> (em https://),
            exibindo assim a mensagem “Site Seguro” na barra de navegação. Isso
            passa um ar de confiança para o seu cliente.
          </Paragraph>

          <div>
            <Image src="/lock.svg" alt="Ícone de uma fechadura" fill />
          </div>
        </div>

        <div id="feature-4">
          <h3 className={montserrat.className}>Hospedagem Cloud</h3>
          <Paragraph $color="gray-light" $strong="primary-light">
            Seu site ficará hospedado em um dos serviços de nuvem mais modernos
            que gera várias otimizações e aprimora mais ainda a{" "}
            <strong>performance e velocidade de carregamento</strong>.
          </Paragraph>

          <div>
            <Image src="/cloud.svg" alt="Ícone de uma nuvem" fill />
          </div>
        </div>
      </div>
    </FeaturesContainer>
  );
}

export default Features;
