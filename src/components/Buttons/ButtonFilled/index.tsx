import { ReactNode } from "react";
import { ButtonFilledWrapper } from "./styles";
import Link from "next/link";

type ButtonFilledProps = {
  children: ReactNode;
  href: string;
  color: "light" | "dark";
};

function ButtonFilled({ children, href, color }: ButtonFilledProps) {
  return (
    <ButtonFilledWrapper $color={color}>
      <Link href={href}>{children}</Link>
    </ButtonFilledWrapper>
  );
}

export default ButtonFilled;
