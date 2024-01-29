"use client";

import { Container, Content, Media } from "./styles";
import Link from "next/link";

import GitHub from "@/icons/GitHub";
import Instagram from "@/icons/Instagram";
import Animation from "./animation";

function Hero() {
  Animation();

  return (
    <Container id="hero" className="container">
      <Content>
        <div className="hero-title">
          <span>Desenvolvimento web</span>
          <h1>
            Unindo estética e performance para abrilhantar sua presença online
          </h1>
          <Link href="#">Entrar em contato</Link>
        </div>
      </Content>

      <Media className="hero-media">
        <Link href="#">
          <GitHub />
        </Link>
        <Link href="#">
          <Instagram />
        </Link>
      </Media>
    </Container>
  );
}

export default Hero;
