"use client";

import { Container } from "./styles";
import { montserrat } from "@/lib/fonts";
import Logo from "../Logo";

function Header() {
  return (
    <Container className="container">
      <Logo href="/" />
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
