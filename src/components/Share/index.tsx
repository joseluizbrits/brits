"use client";

import { Wrapper } from "./styles";
import { useParams } from "next/navigation";

import FacebookSquare from "@/icons/FacebookSquare";
import WhatsAppSquare from "@/icons/WhatsAppSquare";
import XTwitterSquare from "@/icons/XTwitterSquare";
import LinkedInSquare from "@/icons/LinkedInSquare";

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
          aria-label="compartilhar no WhatsApp"
        >
          <WhatsAppSquare
            color={
              position === "top" ? "var(--primary-dark)" : "var(--tertiary)"
            }
          />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${link}/&quote=Eu acabei de ler este texto muito legal escrito pelo Brits. Leia você também!`}
          target="_blank"
          aria-label="compartilhar no Facebook"
        >
          <FacebookSquare
            color={
              position === "top" ? "var(--primary-dark)" : "var(--tertiary)"
            }
          />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=Eu acabei de ler um texto muito legal escrito pelo Brits. Dá uma olhada lá pelo link: ${link}`}
          target="_blank"
          aria-label="compartilhar no Twitter"
        >
          <XTwitterSquare
            color={
              position === "top" ? "var(--primary-dark)" : "var(--tertiary)"
            }
          />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${link}&title=Eu ainda serei um profissional relevante no futuro%3F&summary=Eu acabei de ler este texto muito legal escrito pelo Brits. Leia você também!&source=${link}`}
          target="_blank"
          aria-label="compartilhar no LinkedIn"
        >
          <LinkedInSquare
            color={
              position === "top" ? "var(--primary-dark)" : "var(--tertiary)"
            }
          />
        </a>
      </div>
    </Wrapper>
  );
}

export default Share;
