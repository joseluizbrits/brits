"use client";

import { HeroContainer, Media } from "./styles";
import { montserrat } from "@/lib/fonts";
import Link from "next/link";

import Instagram from "@/icons/Instagram";
import Image from "next/image";
import { Paragraph } from "@/styles/Text/Paragraph";
import ButttonGradient from "../../components/Buttons/ButtonGradient";
import GitHubFilled from "@/icons/GitHubFilled";

function Hero() {
  return (
    <HeroContainer>
      <div>
        <Image
          src="/my-head.png"
          alt="Rosto do Brits sorrindo"
          fill
          priority
          unoptimized
          quality={100}
        />
      </div>

      <div>
        <h1 className={montserrat.className}>Olá, eu me chamo Brits!</h1>

        <Paragraph $color="gray" $strong="primary-light">
          Um <strong>desenvolvedor web front-end</strong> que utiliza da arte e
          da filosofia como inspiração para entregar algo de{" "}
          <strong>único e original</strong> em cada projeto.
        </Paragraph>

        <div>
          <ButttonGradient href="https://api.whatsapp.com/send?phone=5521977201981&text=Ola,%20Brits!%20Eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento">
            Entrar em contato
          </ButttonGradient>

          <Media>
            <Link href="https://github.com/joseluizbrits" target="_blank">
              <GitHubFilled />
            </Link>

            <Link
              href="https://www.instagram.com/joseluizbrits/?igsh=MTIxZTV4YjI2MmN0bQ%3D%3D&utm_source=qr"
              target="_blank"
            >
              <Instagram />
            </Link>
          </Media>
        </div>
      </div>
    </HeroContainer>
  );
}

export default Hero;
