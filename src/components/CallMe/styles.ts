import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--gradientTwo);
  padding: 40px;
  border-radius: 5px;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;

  p {
    font-size: clamp(1.15rem, 1.5vw, 1.75rem);
    line-height: 1.5em;
    color: var(--blogText);
  }

  a {
    color: var(--primaryLight);
    transition: 0.3s ease;
  }

  @media screen and (min-width: 1024px) {
    a:hover {
      color: var(--tertiary);
    }
  }

  @media screen and (max-width: 1280px) {
    padding: 24px;
  }
`;
