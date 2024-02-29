"use client";

import { benefits } from "@/utils/benefits";
import { Container, Mesh } from "./styles";
import { lato } from "@/lib/fonts";

function Benefits() {
  return (
    <Container>
      <h2>
        Com <em>Brits</em> você recebe dedicação ao seu projeto
      </h2>

      <Mesh style={{ top: "40%", right: "15%" }} />
      <Mesh style={{ top: "80%", left: "15%" }} />

      <ul>
        {benefits.map(({ id, title, desc, icon }) => (
          <li key={id}>
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
