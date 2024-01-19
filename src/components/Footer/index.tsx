"use client";

import { Container } from "./styles";
import Logo from "../Logo";
import { montserrat } from "@/lib/fonts";

function Footer() {
  return (
    <Container>
      <Logo href="#" />
      <span className={montserrat.className}>
        © Copyright {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
        | BRITS | Todos os Direitos Reservados | Criado por BRITS
      </span>
    </Container>
  );
}

export default Footer;
