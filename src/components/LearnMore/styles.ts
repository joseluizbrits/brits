import styled from "styled-components";

export const Container = styled.div`
  opacity: 0;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: all;
  }

  width: 100%;
  height: 100vh;
  background-color: var(--primaryDark);

  overflow-y: scroll;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  > div {
    margin: 160px;
    padding: 64px;
    border-radius: 50px;
    background: var(--gradientThree);
  }

  p {
    font-size: 2rem;
    line-height: 1.5em;
    color: var(--primaryDark);
  }
`;

export const Text = styled.div`
  display: grid;
  gap: 20px;

  p {
    font-size: 2rem;
    line-height: 1.5em;
    color: var(--white);
  }
`;
