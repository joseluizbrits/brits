"use client";

import { Wrapper } from "./styles";
import FacebookSquare from "@/icons/FacebookSquare";
import WhatsAppSquare from "@/icons/WhatsAppSquare";
import XTwitterSquare from "@/icons/XTwitterSquare";
import LinkedInSquare from "@/icons/LinkedInSquare";

function Share({ position }: { position: "top" | "bottom" }) {
  return (
    <Wrapper className={position}>
      <span>Compartilhe!</span>
      <div>
        <a href="#">
          <WhatsAppSquare
            color={
              position === "top" ? "var(--primaryDark)" : "var(--tertiary)"
            }
          />
        </a>
        <a href="#">
          <FacebookSquare
            color={
              position === "top" ? "var(--primaryDark)" : "var(--tertiary)"
            }
          />
        </a>
        <a href="#">
          <XTwitterSquare
            color={
              position === "top" ? "var(--primaryDark)" : "var(--tertiary)"
            }
          />
        </a>
        <a href="#">
          <LinkedInSquare
            color={
              position === "top" ? "var(--primaryDark)" : "var(--tertiary)"
            }
          />
        </a>
      </div>
    </Wrapper>
  );
}

export default Share;
