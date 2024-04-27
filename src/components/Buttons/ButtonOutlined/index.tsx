import styled from "styled-components";
import Link from "next/link";
import { ReactNode } from "react";
import { ubuntu } from "@/lib/fonts";
import ArrowRight from "@/icons/ArrowRight";
import { OutlinedWrapper } from "./styles";

type ButtonOutlinedProps = {
  children: ReactNode;
  href: string;
  icon?: boolean;
  external?: boolean;
};

function ButtonOutlined({
  children,
  href,
  icon,
  external,
}: ButtonOutlinedProps) {
  return (
    <OutlinedWrapper>
      <Link
        href={href}
        className={ubuntu.className}
        target={external ? "_blank" : "_self"}
      >
        {children}
        {icon && <ArrowRight color={"var(--secondary)"} />}
      </Link>
    </OutlinedWrapper>
  );
}

export default ButtonOutlined;
