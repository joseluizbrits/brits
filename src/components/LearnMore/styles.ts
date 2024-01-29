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
  background-color: var(--primaryDarkShadow);

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
    box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: clamp(1rem, 2vw, 2rem);
    line-height: 1.5em;
    color: var(--primaryDark);
  }

  @media screen and (max-width: 1440px) {
    > div {
      margin: 160px 80px;
    }
  }

  @media screen and (max-width: 1024px) {
    > div {
      margin: 140px 40px;
    }
  }

  @media screen and (max-width: 768px) {
    > div {
      margin: 120px 20px;
      padding: 40px;
    }
  }

  @media screen and (max-width: 480px) {
    > div {
      padding: 40px 20px;
    }
  }
`;

export const Text = styled.div`
  display: grid;
  gap: 20px;

  p {
    font-size: clamp(1rem, 2vw, 2rem);
    line-height: 1.5em;
    color: var(--white);
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;

  @media screen and (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;
