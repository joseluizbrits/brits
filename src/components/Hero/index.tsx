"use client";

import { Container, Content, Media } from "./styles";
import Link from "next/link";

import GitHub from "@/icons/GitHub";
import Instagram from "@/icons/Instagram";

function Hero() {
  return (
    <Container className="container">
      <Content>
        <div>
          <span>Desenvolvimento web</span>
          <h1>
            Unindo estética e performance para abrilhantar sua presença online
          </h1>
          <Link href="#">Entrar em contato</Link>
        </div>
      </Content>

      <Media>
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
