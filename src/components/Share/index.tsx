"use client";

import FacebookSquare from "@/icons/FacebookSquare";
import { Wrapper, Media } from "./styles";
import WhatsAppSquare from "@/icons/WhatsAppSquare";
import XTwitterSquare from "@/icons/XTwitterSquare";
import LinkedInSquare from "@/icons/LinkedInSquare";

function Share() {
  return (
    <Wrapper>
      <span>Compartilhe!</span>
      <Media>
        <a href="#">
          <WhatsAppSquare color="var(--primaryDark)" />
        </a>
        <a href="#">
          <FacebookSquare color="var(--primaryDark)" />
        </a>
        <a href="#">
          <XTwitterSquare color="var(--primaryDark)" />
        </a>
        <a href="#">
          <LinkedInSquare color="var(--primaryDark)" />
        </a>
      </Media>
    </Wrapper>
  );
}

export default Share;
