"use client";

import { Container } from "./styles";
import Animation from "./animation";

import { useRef } from "react";
import { features } from "@/utils/features";

function Features() {
  const section = useRef(null);

  Animation(section, features);

  return (
    <Container id="features" ref={section}>
      <h2>As funcionalidades são diversas </h2>

      <ul>
        {features.map(({ id, name, icon }) => (
          <li key={id} id={id}>
            <span>{name}</span>
            {icon}
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Features;
