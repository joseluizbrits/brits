import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--primary);

  display: flex;
  position: relative;

  &::before {
    content: "";
    display: block;
    background: var(--gradientTwo);

    width: 40%;
    height: 100vh;
    clip-path: polygon(0 0, 100% 100%, 0 100%);

    position: absolute;
    top: 0;
    left: 40%;
    z-index: 1;
  }
`;
