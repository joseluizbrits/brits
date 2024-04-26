import styled from "styled-components";

export const Container = styled.div`
  clip-path: circle(0 at 0 100%);
  pointer-events: none;
  transition: 0.6s ease-out;

  &.active {
    clip-path: circle(150% at 0 100%);
    pointer-events: all;
  }

  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);

  overflow-y: scroll;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  > div {
    margin: 120px 160px;
    padding: 64px;
    border-radius: 50px;
    background: var(--gradient-3);
    box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: clamp(1rem, 2vw, 2rem);
    line-height: 1.5em;
    color: var(--primary-dark);
  }

  @media screen and (max-width: 1440px) {
    > div {
      margin: 120px 80px;
    }
  }

  @media screen and (max-width: 1024px) {
    > div {
      margin: 120px 40px;
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

  svg {
    transition: 0.3s ease-out;
  }

  @media screen and (min-width: 1024px) {
    &:hover svg {
      scale: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;
