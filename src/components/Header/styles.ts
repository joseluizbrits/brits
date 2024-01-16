import styled from "styled-components";

export const Container = styled.header`
  padding: 20px 120px;
  height: 100px;
  background-color: var(--primaryGradient);

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  li a {
    text-transform: uppercase;
    color: var(--white);
    padding: 20px;
  }

  ul :last-child a {
    font-weight: 700;
    letter-spacing: 0.05rem;

    background-color: var(--tertiary);
    padding: 12px 24px;
    border-radius: 50px;
  }
`;

export const Logo = styled.a`
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
