import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--gradientTwo);
  padding: 40px;
  border-radius: 5px;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;

  p {
    font-size: clamp(1.25rem, 1.5vw, 1.75rem);
    line-height: 1.5em;
    color: var(--blogText);
  }

  a {
    color: var(--primaryLight);
  }
`;
