import styled from "styled-components";

export const Quote = styled.i`
  display: block;
  padding: 32px;
  margin: 28px;
  margin-bottom: 0;
  border-left: 6px solid var(--secondary);
  border-radius: 5px;
  background-color: var(--primaryDark);

  font-style: italic;
  font-size: clamp(1.15rem, 1.5vw, 1.75rem);
  line-height: 1.5em;
  color: var(--blogText);

  @media screen and (max-width: 1280px) {
    padding: 24px;
  }
`;
