import styled from "styled-components";

export const Container = styled.section`
  height: calc(100vh - 100px);
  background: var(--primaryGradient);
  overflow-x: hidden;

  position: relative;

  &::after {
    content: "";
    display: block;
    background: var(--gradientOne);

    width: var(--triangleWidth);
    height: calc(100vh - 100px);
    clip-path: polygon(100% 0, 100% 100%, 0 100%);

    position: absolute;
    top: 0;
    right: 0;
  }

  @media screen and (max-width: 768px) {
    &,
    &::after {
      height: calc(100vh - 80px);
    }
  }
`;

export const Content = styled.div`
  height: 100%;

  display: grid;
  align-items: center;

  position: relative;
  z-index: 1;

  .hero-title {
    /* animate */
    opacity: 0;
  }

  span {
    color: var(--primaryLight);
    text-transform: lowercase;
    letter-spacing: 0.05rem;
  }

  h1 {
    font-size: clamp(4rem, 5vw, 9rem);
    letter-spacing: 0.05rem;
    color: var(--white);
    max-width: 20ch;
    margin-bottom: 48px;
  }

  a {
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--primaryDark);

    background-color: var(--secondary);
    border-radius: 50px;
    padding: 20px 32px;
  }

  @media screen and (min-width: 1680px) {
    span {
      font-size: 1.5rem;
    }

    h1 {
      font-size: clamp(2rem, 7vw, 9rem);
    }
  }

  @media screen and (max-width: 1024px) {
    h1 {
      margin-bottom: 36px;
    }

    a {
      font-size: 0.875rem;
      padding: 18px 28px;
    }
  }

  @media screen and (max-width: 768px) {
    div {
      margin-top: -120px;
    }

    span {
      font-size: 0.75rem;
    }

    h1 {
      font-size: clamp(2.5rem, 7vw, 9rem);
      line-height: 1.25em;
      margin-top: 4px;
      margin-bottom: 28px;
    }

    a {
      font-size: 0.75rem;
      padding: 14px 24px;
    }
  }
`;

export const Media = styled.div`
  display: flex;

  position: absolute;
  bottom: 48px;
  right: 120px;

  z-index: 1;

  &.hero-media {
    /* animate */
    opacity: 0;
  }

  a {
    padding: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 1440px) {
    right: 80px;
  }

  @media screen and (max-width: 1024px) {
    right: 40px;
  }

  @media screen and (max-width: 768px) {
    right: 10px;

    a {
      scale: 0.7;
      padding: 4px;
    }
  }
`;
