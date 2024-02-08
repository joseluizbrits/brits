"use client";

import { Container } from "./styles";
import { montserrat } from "@/lib/fonts";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "../Logo";

function Header() {
  const params = useParams<{ uid: string }>();
  const pathname = usePathname();

  const isBlogPost = params.uid;
  const isBlog = pathname.includes("blog") && !isBlogPost;

  const type = isBlog ? "blog" : isBlogPost ? "blogPost" : "home";

  return (
    <Container className="container" $type={type}>
      <Logo href="/" />
      <nav>
        <ul>
          <li>
            {type === "home" && (
              <a className={montserrat.className} href="#services">
                Services
              </a>
            )}
          </li>
          <li>
            {type === "blog" ? (
              <Link href="https://api.whatsapp.com/send?phone=5521977201981&text=Ola,%20Brits!%20Eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento">
                Contato
              </Link>
            ) : type === "blogPost" ? (
              <Link href="/blog">Blog</Link>
            ) : (
              <a href="/blog">Blog</a>
            )}
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default Header;
