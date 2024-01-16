"use client";

import { Wrapper } from "./styles";
import { PropsWithChildren } from "react";

type IButtonLink = PropsWithChildren<HTMLButtonElement>;

function ButtonLink({ children }: IButtonLink) {
  return <Wrapper>{children}</Wrapper>;
}

export default ButtonLink;
