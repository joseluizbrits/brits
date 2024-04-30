"use client";

import { PostContent, ProgressBar } from "./styles";
import { useRef } from "react";

import BarProgress from "@/animation/BarProgress";

function Post({ children }: { children: React.ReactNode }) {
  const container = useRef(null);

  BarProgress(container);

  return (
    <article ref={container}>
      <ProgressBar className="progress-bar" />
      <PostContent>{children}</PostContent>
    </article>
  );
}

export default Post;
