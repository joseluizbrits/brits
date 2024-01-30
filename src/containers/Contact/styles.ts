import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: var(--primary);
`;

export const Title = styled.h2`
  padding: 200px 0;
  padding-left: 120px;
  display: grid;
  justify-content: center;

  position: relative;

  &::after {
    content: "";
    display: block;
    width: clamp(120px, 20vw, 240px);
    height: clamp(24px, 4vw, 64px);
    border-radius: 0 50px 50px 0;
    background-color: var(--tertiary);
    opacity: 0.8;

    position: absolute;
    bottom: 120px;
    left: 0;

    /* animate */
    transform: var(--aboutDeco);
  }

  small {
    font-weight: 400;
    font-size: clamp(0.875rem, 1.25vw, 1.5rem);
    color: var(--primaryDark);
  }

  span {
    font-weight: 400;
    font-size: clamp(2rem, 4vw, 7rem);
    line-height: 1.25em;
    color: var(--white);
    max-width: 19ch;
  }

  @media screen and (max-width: 1024px) {
    padding: 160px 0;

    &::after {
      bottom: 80px;
    }
  }
`;
