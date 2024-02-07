"use client";

import { Wrapper } from "./styles";
import { useParams } from "next/navigation";

import FacebookSquare from "@/icons/FacebookSquare";
import WhatsAppSquare from "@/icons/WhatsAppSquare";
import XTwitterSquare from "@/icons/XTwitterSquare";
import LinkedInSquare from "@/icons/LinkedInSquare";

// https://www.linkedin.com/shareArticle/?mini=true&url=https:https://www.brits.com.br/blog/eu-ainda-serei-um-profissional-relevante-no-futuro&title=Eu%20ainda%20serei%20um%20profissional%20relevante%20no%20futuro%3F&summary=Eu%20acabei%20de%20ler%20este%20texto%20muito%20legal%20escrito%20pelo%20Brits.%20Leia%20voc%C3%AA%20tamb%C3%A9m!&source=https://www.brits.com.br/blog/eu-ainda-serei-um-profissional-relevante-no-futuro

function Share({ position }: { position: "top" | "bottom" }) {
  const params = useParams<{ uid: string }>();
  const link = `https://www.brits.com.br/blog/${params.uid}`;

  return (
    <Wrapper className={position}>
      <span>Compartilhe!</span>
      <div>
        <a
          href={`https://api.whatsapp.com/send?text=Eu acabei de ler um texto muito legal escrito pelo Brits. Dá uma olhada lá pelo link: ${link}`}
          target="_blank"
        >
          <WhatsAppSquare
            color={
              position === "top" ? "var(--primaryDark)" : "var(--tertiary)"
            }
          />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${link}/&quote=Eu acabei de ler este texto muito legal escrito pelo Brits. Leia você também!`}
          target="_blank"
        >
          <FacebookSquare
            color={
              position === "top" ? "var(--primaryDark)" : "var(--tertiary)"
            }
          />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=Eu acabei de ler um texto muito legal escrito pelo Brits. Dá uma olhada lá pelo link: ${link}`}
          target="_blank"
        >
          <XTwitterSquare
            color={
              position === "top" ? "var(--primaryDark)" : "var(--tertiary)"
            }
          />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${link}&title=Eu ainda serei um profissional relevante no futuro%3F&summary=Eu acabei de ler este texto muito legal escrito pelo Brits. Leia você também!&source=${link}`}
          target="_blank"
        >
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
