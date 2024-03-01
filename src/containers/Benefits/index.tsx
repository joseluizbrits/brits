"use client";

import { Container } from "./styles";
import Animation from "./animation";

import { useRef } from "react";
import { benefits } from "@/utils/benefits";
import { lato } from "@/lib/fonts";

function Benefits() {
  const section = useRef(null);

  Animation(section, benefits);

  return (
    <Container id="benefits" ref={section}>
      <h2>
        Com <em>Brits</em> você recebe dedicação ao seu projeto
      </h2>

      <ul>
        {benefits.map(({ id, title, desc, icon }) => (
          <li key={id} id={id}>
            {icon}
            <div>
              <h3>{title}</h3>
              <p className={lato.className}>{desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Benefits;
