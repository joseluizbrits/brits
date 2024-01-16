"use client";

import { Container } from "./styles";
import Link from "next/link";

import GitHub from "@/icons/GitHub";
import Instagram from "@/icons/Instagram";

function Hero() {
  return (
    <Container className="container">
      <span>Desenvolvimento web</span>
      <h1>
        Unindo estética e performance para abrilhantar sua presença online
      </h1>
      <Link href="#">Entrar em contato</Link>
      <div>
        <Link href="#">
          <GitHub />
        </Link>
        <Link href="#">
          <Instagram />
        </Link>
      </div>
    </Container>
  );
}

export default Hero;
