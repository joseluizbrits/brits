"use client";

import { HeroContainer, Content, Media } from "./styles";
import Link from "next/link";

import GitHub from "@/icons/GitHub";
import Instagram from "@/icons/Instagram";

function Hero() {
  return (
    <HeroContainer id="hero" className="container">
      <Content>
        <div className="hero-title">
          <span>Desenvolvimento web</span>
          <h1>
            Unindo estética e performance para abrilhantar sua presença online
          </h1>
          <Link
            href="https://api.whatsapp.com/send?phone=5521977201981&text=Ola,%20Brits!%20Eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
            aria-label="WhatsApp"
          >
            Entrar em contato
          </Link>
        </div>
      </Content>

      <Media className="hero-media">
        <Link
          href="https://github.com/joseluizbrits"
          target="_blank"
          aria-label="Git-hub"
        >
          <GitHub />
        </Link>
        <Link
          href="https://www.instagram.com/joseluizbrits/?igsh=MTIxZTV4YjI2MmN0bQ%3D%3D&utm_source=qr"
          target="_blank"
          aria-label="Instagram"
        >
          <Instagram />
        </Link>
      </Media>
    </HeroContainer>
  );
}

export default Hero;
