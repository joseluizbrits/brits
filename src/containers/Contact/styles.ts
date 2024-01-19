import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--gradientTwoReverse);

  position: relative;

  &::before {
    content: "";
    display: block;
    background: var(--primary);

    width: 20%;
    height: 100vh;

    position: absolute;
    top: 0;
    right: 0;
  }

  &::after {
    content: "";
    display: block;
    background: var(--gradientTwoReverse);

    width: 40%;
    height: 100vh;
    clip-path: polygon(0 0, 100% 100%, 0 100%);

    position: absolute;
    top: 0;
    left: 79.99%;
  }
`;
