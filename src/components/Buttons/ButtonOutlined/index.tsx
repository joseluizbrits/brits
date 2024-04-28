import Link from "next/link";
import { ReactNode } from "react";
import { ubuntu } from "@/lib/fonts";
import ArrowRight from "@/icons/ArrowRight";
import { ButtonOutlinedWrapper } from "./styles";

type ButtonOutlinedProps = {
  children: ReactNode;
  href: string;
  arrow?: boolean;
  borderless?: boolean;
  external?: boolean;
};

function ButtonOutlined({
  children,
  href,
  arrow,
  borderless,
  external,
}: ButtonOutlinedProps) {
  return (
    <ButtonOutlinedWrapper $borderless={borderless}>
      <Link
        href={href}
        className={ubuntu.className}
        target={external ? "_blank" : "_self"}
      >
        {children}
        {arrow && <ArrowRight color={"var(--secondary)"} />}
      </Link>
    </ButtonOutlinedWrapper>
  );
}

export default ButtonOutlined;
