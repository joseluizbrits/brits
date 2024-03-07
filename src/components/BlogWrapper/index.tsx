"use client";

import { Content, ProgressBar } from "./styles";
import Animation from "./animation";
import { useRef } from "react";

function BlogWrapper({ children }: { children: React.ReactNode }) {
  const section = useRef(null);

  Animation(section);

  return (
    <article ref={section}>
      <ProgressBar className="progress-bar" />
      <Content>{children}</Content>
    </article>
  );
}

export default BlogWrapper;
