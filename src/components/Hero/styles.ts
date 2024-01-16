import styled from "styled-components";

export const Container = styled.section`
  height: calc(100vh - 100px);
  padding-top: 80px;
  background: var(--primaryGradient);

  position: relative;

  &::after {
    content: "";
    display: block;
    background: var(--gradientOne);

    width: 30%;
    height: calc(100vh - 100px);
    clip-path: polygon(100% 0, 100% 100%, 0 100%);

    position: absolute;
    top: 0;
    right: 0;
  }

  span {
    color: var(--primaryLight);
    text-transform: lowercase;
    letter-spacing: 0.05rem;
  }

  h1 {
    font-size: 5rem;
    letter-spacing: 0.05rem;
    color: var(--white);
    max-width: 20ch;
    margin-bottom: 48px;
  }

  > a {
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--primaryDark);
    background-color: var(--secondary);
    border-radius: 50px;
    padding: 20px 32px;
  }

  div {
    display: flex;

    position: absolute;
    bottom: 48px;
    right: 120px;

    z-index: 1;
  }

  div a {
    padding: 10px;
    cursor: pointer;
  }
`;
