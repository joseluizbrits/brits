"use client";

import { ButtonWrapper } from "./styles";
import { ReactNode } from "react";
import { ubuntu } from "@/lib/fonts";
import usePopup from "@/hooks/usePopup";
import Popup from "@/icons/Popup";

interface IButton {
  children: ReactNode;
  secondary?: boolean;
  popupId: number;
}

function Button({ children, secondary, popupId }: IButton) {
  const { setPopup } = usePopup();

  const handlePopup = () => {
    setPopup(popupId, "show");
    document.documentElement.style.overflow = "hidden";
  };

  return (
    <ButtonWrapper $secondary={secondary} onClick={handlePopup}>
      <span className={ubuntu.className}>{children}</span>
      <Popup secondary={secondary} />
    </ButtonWrapper>
  );
}

export default Button;
