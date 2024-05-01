"use client";

import { FooterContainer } from "./styles";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

import Logo from "@/components/Logo";
import GitHub from "@/icons/GitHubFilled";
import Instagram from "@/icons/Instagram";
import Bars from "@/icons/Bars";

function Footer() {
  const params = useParams<{ uid: string }>();
  const pathname = usePathname();

  const isBlogPost = params.uid;
  const isBlog = pathname.includes("blog") && !isBlogPost;

  const type = isBlog ? "blog" : isBlogPost ? "blogPost" : "home";

  return (
    <FooterContainer $type={type}>
      <Logo href="/" />
      <span>
        © Copyright {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
        | BRITS | Todos os Direitos Reservados | Criado por BRITS
      </span>

      <div>
        <Link
          href="https://github.com/joseluizbrits"
          aria-label="Vai para o GitHub"
          target="_blank"
        >
          <GitHub />
        </Link>
        <Link
          href="https://www.instagram.com/joseluizbrits/?igsh=MTIxZTV4YjI2MmN0bQ%3D%3D&utm_source=qr"
          aria-label="Vai para o Instagram"
          target="_blank"
        >
          <Instagram />
        </Link>
      </div>

      {type !== "blog" && (
        <>
          <Bars className="top" />
          <Bars className="bottom" />
        </>
      )}
    </FooterContainer>
  );
}

export default Footer;
