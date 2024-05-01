import { ReactNode } from "react";
import { ubuntu } from "@/lib/fonts";
import { ButttonGradientWrapper } from "./styles";
import Link from "next/link";

type ButtonGradientProps = {
  children: ReactNode;
  href: string;
};

function ButtonGradient({ children, href }: ButtonGradientProps) {
  return (
    <ButttonGradientWrapper className={ubuntu.className}>
      <Link href={href}>{children}</Link>
    </ButttonGradientWrapper>
  );
}

export default ButtonGradient;
