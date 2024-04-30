import { ReactNode } from "react";
import { ButtonFilledWrapper } from "./styles";
import Link from "next/link";
import Arrow from "@/icons/Arrow";
import { ubuntu } from "@/lib/fonts";

type ButtonFilledProps = {
  children: ReactNode;
  href: string;
  color: "light" | "dark";
  arrow?: boolean;
};

function ButtonFilled({ children, href, color, arrow }: ButtonFilledProps) {
  return (
    <ButtonFilledWrapper $color={color} $arrow={arrow ? true : false}>
      <Link href={href} className={ubuntu.className}>
        {children}
        {arrow && <Arrow color="var(--primary-dark)" />}
      </Link>
    </ButtonFilledWrapper>
  );
}

export default ButtonFilled;
