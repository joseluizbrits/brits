"use client";

import { lato } from "@/lib/fonts";
import { Container } from "./styles";
import { steps } from "@/utils/steps";
import ArrowDraw from "@/icons/ArrowDraw";

function Process() {
  return (
    <Container>
      <h2>Entenda o processo de criação do site</h2>

      <ul>
        {steps.map(({ id, title, desc }, index) => (
          <li key={id}>
            <span>{index + 1}</span>
            <div>
              <h3>{title}</h3>
              <p className={lato.className}>{desc}</p>
            </div>
            {index + 1 < steps.length && <ArrowDraw />}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Process;
