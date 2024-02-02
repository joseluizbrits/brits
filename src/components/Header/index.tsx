"use client";

import { Container } from "./styles";
import { montserrat } from "@/lib/fonts";
import Logo from "../Logo";
import { useParams } from "next/navigation";

function Header() {
  const params = useParams<{ slug: string }>();

  return (
    <Container className="container" $bg={params.slug}>
      <Logo href="/" />
      <nav>
        <ul>
          <li>
            {params.slug ? (
              <a className={montserrat.className} href={`/`}>
                home
              </a>
            ) : (
              <a className={montserrat.className} href={`/blog/1`}>
                blog
              </a>
            )}
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
