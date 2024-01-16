"use client";

import { Container, Logo } from "./styles";
import { montserrat } from "@/lib/fonts";
import Shorts from "@/icons/Shorts";

function Header() {
  return (
    <Container>
      <Logo href="/">
        <span className={montserrat.className}>BRITS</span>
        <Shorts />
      </Logo>
      <nav>
        <ul>
          <li>
            <a className={montserrat.className} href="#services">
              Serviços
            </a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
