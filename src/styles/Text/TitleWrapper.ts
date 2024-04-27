import styled from "styled-components";

export const TitleWrapper = styled.div<{ $centered?: boolean }>`
  display: grid;
  place-items: ${({ $centered }) => ($centered ? "center" : "start")};
  gap: 12px;

  h2 {
    font-weight: 900;
    font-size: 3.5rem;
    line-height: 1.15em;
    letter-spacing: -0.02em;
    color: var(--white);
    max-width: ${({ $centered }) => ($centered ? "20ch" : "fit-content")};
  }

  h2,
  p {
    text-align: ${({ $centered }) => ($centered ? "center" : "start")};
  }

  p {
    max-width: 40ch;
  }
`;
