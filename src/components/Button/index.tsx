"use client";

import { ButtonWrapper } from "./styles";
import { ReactNode, Dispatch, SetStateAction } from "react";
import { ubuntu } from "@/lib/fonts";

interface IButton {
  children: ReactNode;
  secondary?: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

function Button({ children, secondary, setActive }: IButton) {
  const handleActive = () => setActive((state) => !state);

  return (
    <ButtonWrapper $secondary={secondary} onClick={handleActive}>
      <span className={ubuntu.className}>{children}</span>
    </ButtonWrapper>
  );
}

export default Button;
