"use client";

import { Container, Text } from "./styles";
import AccordionList from "../AccordionList";
import usePopup from "@/hooks/usePopup";

function LearnMore() {
  const { getPopup, setPopup } = usePopup();

  const popup = getPopup(2);

  const handlePopup = (target: EventTarget) => {
    const element = target as HTMLElement;

    if (element.classList.contains("close")) {
      setPopup(2, "close");
      document.documentElement.style.overflow = "auto";
    }

    return;
  };

  return (
    <Container
      className={popup ? "close active" : "close"}
      onClick={({ target }) => handlePopup(target)}
      data-lenis-prevent
    >
      <div>
        <Text>
          <p>
            Há muitos sites visualmente genéricos na internet. Tenho certeza que
            você gostaria de algo mais impactante e belo para que sua marca se
            sobressaia.
          </p>
          <p>
            Por este motivo eu ataco três aspectos cruciais para fazer o seu
            site andar de terno:
          </p>
        </Text>
        <AccordionList />
        <p>
          Ao equilibrar esses três elementos, temos um site visualmente
          atraente, funcional e otimizado para oferecer uma experiência única
          aos visitantes.
        </p>
      </div>
    </Container>
  );
}

export default LearnMore;
