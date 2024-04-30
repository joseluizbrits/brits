"use client";

import { CTAContainer } from "./styles";
import Image from "next/image";
import ButtonGradient from "@/components/Buttons/ButtonGradient";

import { TitleWrapper } from "@/styles/Text/TitleWrapper";
import { Label } from "@/styles/Text/Label";
import { Paragraph } from "@/styles/Text/Paragraph";
import useMedia from "@/hooks/useMedia";

function CTA() {
  const mobile = useMedia("(max-width: 992px)");

  return (
    <CTAContainer>
      <div>
        <Image
          src="/vito-corleone.png"
          alt="Imagem de Vito Corleone do filme O Poderoso Chefão"
          fill
          quality={100}
          sizes="(max-width: 992px) 100vw, 50vw"
        />
      </div>

      <div>
        <TitleWrapper $centered={mobile}>
          <h2>Venha fazer um orçamento comigo!</h2>
          <Paragraph $color="gray">
            Eu vou te propor uma <Label>oferta irrecusável</Label>
          </Paragraph>
        </TitleWrapper>

        <ButtonGradient href="https://api.whatsapp.com/send?phone=5521977201981&text=Ola,%20Brits!%20Eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento">
          Entrar em contato
        </ButtonGradient>
      </div>
    </CTAContainer>
  );
}

export default CTA;
