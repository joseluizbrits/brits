"use client";

import { BlogContent, ProgressBar } from "./styles";
import Animation from "./animation";
import { useRef } from "react";

function BlogWrapper({ children }: { children: React.ReactNode }) {
  const section = useRef(null);

  Animation(section);

  return (
    <article ref={section}>
      <ProgressBar className="progress-bar" />
      <BlogContent>{children}</BlogContent>
    </article>
  );
}

export default BlogWrapper;
