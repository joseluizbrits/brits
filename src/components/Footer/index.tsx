"use client";

import { Container } from "./styles";
import { montserrat } from "@/lib/fonts";
import { useParams, usePathname } from "next/navigation";
import Logo from "../Logo";
import Bars from "@/icons/Bars";
import GitHub from "@/icons/GitHubFilled";
import Instagram from "@/icons/Instagram";

function Footer() {
  const params = useParams<{ uid: string }>();
  const pathname = usePathname();

  const isBlogPost = params.uid;
  const isBlog = pathname.includes("blog") && !isBlogPost;

  const type = isBlog ? "blog" : isBlogPost ? "blogPost" : "home";

  return (
    <Container $type={type}>
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

      {params.uid && (
        <>
          <Bars className="top" />
          <Bars className="bottom" />
        </>
      )}
    </Container>
  );
}

export default Footer;
