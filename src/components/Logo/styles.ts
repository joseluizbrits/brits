import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  align-items: center;

  span {
    font-style: italic;
    font-weight: 900;
    font-size: 2.5rem;

    background-image: var(--gradientThree);
    background-clip: text;

    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    padding-right: 20px;
  }
`;
