"use client";

import { HeaderContainer } from "./styles";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "../Logo";
import { ubuntu } from "@/lib/fonts";
import ButtonOutlined from "../Buttons/ButtonOutlined";

function Header() {
  const params = useParams<{ uid: string }>();
  const pathname = usePathname();

  const isBlogPost = params.uid;
  const isBlog = pathname.includes("blog") && !isBlogPost;

  const type = isBlog ? "blog" : isBlogPost ? "blogPost" : "home";

  return (
    <HeaderContainer className="container" $type={type}>
      <Logo href="/" />
      <nav>
        <ul>
          <li>
            {type === "home" && (
              <Link href="#services" className="navlink">
                Serviços
              </Link>
            )}
          </li>
          <li>
            {type === "blog" ? (
              <Link
                className={ubuntu.className}
                href="https://api.whatsapp.com/send?phone=5521977201981&text=Ola,%20Brits!%20Eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
              >
                Contato
              </Link>
            ) : (
              <ButtonOutlined href="/blog">Blog</ButtonOutlined>
            )}
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
