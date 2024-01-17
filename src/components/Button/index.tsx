"use client";

import { ButtonWrapper } from "./styles";
import { ReactNode } from "react";
import { ubuntu } from "@/lib/fonts";

interface IButton {
  children: ReactNode;
  secondary?: boolean;
}

function Button({ children, secondary }: IButton) {
  return (
    <ButtonWrapper $secondary={secondary}>
      <span className={ubuntu.className}>{children}</span>
    </ButtonWrapper>
  );
}

export default Button;
