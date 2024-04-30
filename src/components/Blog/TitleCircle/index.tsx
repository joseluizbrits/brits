"use client";

import styled from "styled-components";

const Styled = styled.h1`
  font-weight: 400;
  font-size: clamp(1rem, 1.25vw, 1.5rem);
  color: var(--primary-light);
  padding: 10px 20px 10px 0;
  border-right: 1px solid var(--primary-dark);
  border-radius: 50px;
  width: fit-content;
`;

function TitleCircle({ children }: { children: React.ReactNode }) {
  return <Styled>{children}</Styled>;
}

export default TitleCircle;
