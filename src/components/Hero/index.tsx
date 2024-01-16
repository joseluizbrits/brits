"use client";

import Link from "next/link";
import { Container } from "./styles";
import FoldShort from "@/icons/FoldShort";

function Hero() {
  return (
    <Container className="container">
      <span>Desenvolvimento web</span>
      <h1>
        Unindo estética e performance para abrilhantar sua presença online
      </h1>
      <Link href="#">Entrar em contato</Link>
      <FoldShort />
    </Container>
  );
}

export default Hero;
