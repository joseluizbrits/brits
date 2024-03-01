"use client";

import { features } from "@/utils/features";
import { Container } from "./styles";

function Features() {
  return (
    <Container>
      <h2>As funcionalidades são diversas </h2>

      <ul>
        {features.map(({ id, name, icon }) => (
          <li key={id}>
            <span>{name}</span>
            {icon}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Features;
