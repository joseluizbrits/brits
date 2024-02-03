import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: var(--primary);

  display: grid;
  grid-template-columns: 1fr;

  position: relative;
  overflow-x: hidden;

  > * {
    grid-area: 1/1;
  }

  &::before {
    content: "";
    display: block;
    width: clamp(160px, 33vw, 500px);
    height: clamp(80px, 10vw, 160px);
    border-radius: 0 50px 50px 0;
    background-color: var(--tertiary);
    position: absolute;
    top: 24%;
    left: 45%;

    /* animate */
    transform: var(--aboutDeco);
  }

  @media screen and (max-width: 640px) {
    &::before {
      top: 10%;
      left: -29%;
      opacity: 0.8;
    }
  }
`;
