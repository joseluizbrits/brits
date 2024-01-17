"use client";

import { ButtonWrapper } from "./styles";
import { ubuntu } from "@/lib/fonts";
import { ReactNode } from "react";

function Button({ children }: { children: ReactNode }) {
  return (
    <ButtonWrapper>
      <span className={ubuntu.className}>{children}</span>
    </ButtonWrapper>
  );
}

export default Button;
