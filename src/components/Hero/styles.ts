import styled from "styled-components";

export const Container = styled.section`
  height: calc(100vh - 100px);
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
`;

export const Content = styled.div`
  height: 100%;

  display: grid;
  align-items: center;

  position: relative;
  z-index: 1;

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
    width: fit-content;

    align-self: start;
  }

  @media screen and (min-width: 1680px) {
    h1 {
      font-size: clamp(4rem, 8vw, 9rem);
    }
  }
`;

export const Media = styled.div`
  display: flex;

  position: absolute;
  bottom: 48px;
  right: 120px;

  z-index: 1;

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
`;
