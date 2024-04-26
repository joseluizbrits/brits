"use client";

import { AboutContainer } from "./styles";
import { useRef } from "react";
import Animation from "./animation";

function About() {
  const section = useRef(null);

  Animation(section);

  return <AboutContainer id="about" ref={section}></AboutContainer>;
}

export default About;
