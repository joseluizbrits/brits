"use client";

import { Container } from "./styles";
import { montserrat } from "@/lib/fonts";
import { useParams } from "next/navigation";
import Logo from "../Logo";

function Header() {
  const params = useParams<{ slug: string }>();

  return (
    <Container className="container" $bg={params.slug}>
      <Logo href="/" />
      <nav>
        <ul>
          <li>
            {!params.slug && (
              <a className={montserrat.className} href="#services">
                Services
              </a>
            )}
          </li>
          <li>
            {params.slug ? (
              <a href="https://api.whatsapp.com/send?phone=5521977201981&text=Ola,%20Brits!%20Eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento">
                Contato
              </a>
            ) : (
              <a href="/blog/eu-ainda-serei-um-profissional-relevante-no-futuro">
                Blog
              </a>
            )}
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
