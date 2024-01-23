"use client";

import { Container, Text } from "./styles";
import AccordionList from "../AccordionList";
import { Dispatch, SetStateAction } from "react";

interface ILearnMore {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

function LearnMore({ active, setActive }: ILearnMore) {
  const handleActive = (target: EventTarget) => {
    const element = target as Element;

    if (element.classList.contains("shadow")) {
      document.documentElement.style.overflow = "auto";
      setActive(false);
    }
    return;
  };

  return (
    <Container
      className={active ? "shadow active" : "shadow"}
      onClick={({ target }) => handleActive(target)}
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
