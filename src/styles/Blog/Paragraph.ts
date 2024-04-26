import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: clamp(1.15rem, 1.5vw, 1.75rem);
  line-height: 1.5em;
  color: var(--blogText);
  margin-top: 28px;

  strong {
    font-weight: 700;
    color: var(--primary-light);
  }
`;
