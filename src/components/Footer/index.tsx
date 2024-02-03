"use client";

import { Container } from "./styles";
import { montserrat } from "@/lib/fonts";
import { useParams } from "next/navigation";
import Logo from "../Logo";
import Bars from "@/icons/Bars";
import GitHub from "@/icons/GitHub";
import Instagram from "@/icons/Instagram";

function Footer() {
  const params = useParams<{ slug: string }>();

  return (
    <Container $bg={params.slug}>
      <Logo href="/" />
      <span className={montserrat.className}>
        © Copyright {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
        | BRITS | Todos os Direitos Reservados | Criado por BRITS
      </span>

      <div>
        <a href="https://github.com/joseluizbrits">
          <GitHub />
        </a>
        <a href="https://www.instagram.com/joseluizbrits/?igsh=MTIxZTV4YjI2MmN0bQ%3D%3D&utm_source=qr">
          <Instagram />
        </a>
      </div>

      {params.slug && (
        <>
          <Bars className="top" />
          <Bars className="bottom" />
        </>
      )}
    </Container>
  );
}

export default Footer;
