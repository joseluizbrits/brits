"use client";

import { montserrat, ubuntu } from "@/lib/fonts";
import { ServicesContainer } from "./styles";
import { Paragraph } from "@/styles/Text/Paragraph";
import { TitleWrapper } from "@/styles/Text/TitleWrapper";
import ButtonFilled from "@/components/Buttons/ButtonFilled";

function Services() {
  return (
    <ServicesContainer id="services">
      <TitleWrapper $centered>
        <h2 className={montserrat.className}>
          Que tipo de site eu posso criar para você?
        </h2>
        <Paragraph $color="gray">
          Os meus serviços envolvem a criação de sites institucionais, landing
          pages e portfólios.
        </Paragraph>
      </TitleWrapper>

      <ul>
        <li>
          <div>
            <h3 className={montserrat.className}>Site Institucional</h3>
            <span className={ubuntu.className}>
              R$ 1199<small>a partir</small>
            </span>

            <Paragraph $color="primary-dark">
              Se você quer fortalecer a imagem da sua empresa, passar mais
              credibilidade e expor seus serviços e produtos de maneira
              profissional este é o tipo de site ideal para você.
            </Paragraph>
          </div>

          <ButtonFilled
            href="https://api.whatsapp.com/send?phone=5521977201981&text=Ola,%20Brits!%20Eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
            color="dark"
          >
            Quero esse
          </ButtonFilled>
        </li>

        <li>
          <div>
            <h3 className={montserrat.className}>Landing Page</h3>
            <span className={ubuntu.className}>
              R$ 799<small>a partir</small>
            </span>

            <Paragraph $color="primary-dark">
              Se você precisa de algo mais simples, focado apenas na sua oferta
              central e com o objetivo de gerar mais leads, uma página de
              captura irá te cair como uma luva.
            </Paragraph>
          </div>

          <ButtonFilled
            href="https://api.whatsapp.com/send?phone=5521977201981&text=Ola,%20Brits!%20Eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
            color="light"
          >
            Quero esse
          </ButtonFilled>
        </li>

        <li>
          <div>
            <h3 className={montserrat.className}>Portfólio</h3>
            <span className={ubuntu.className}>
              R$ 999<small>a partir</small>
            </span>

            <Paragraph $color="gray">
              Se você é apenas um profissional que quer expor os seus melhores
              trabalhos online de maneira visual, então um portfólio pode ser a
              melhor pedida.
            </Paragraph>
          </div>

          <ButtonFilled
            href="https://api.whatsapp.com/send?phone=5521977201981&text=Ola,%20Brits!%20Eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
            color="light"
          >
            Quero esse
          </ButtonFilled>
        </li>
      </ul>
    </ServicesContainer>
  );
}

export default Services;
