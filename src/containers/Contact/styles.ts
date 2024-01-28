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

    background-color: var(--tertiary);
    opacity: 0.8;

    position: absolute;
  }

  &::after {
    border-radius: 0 50px 50px 0;

    bottom: 120px;
    left: 0;
  }

  small {
    font-weight: 400;
    font-size: clamp(0.875rem, 1.25vw, 1.5rem);
    color: var(--primaryDark);
  }

  span {
    font-weight: 400;
    font-size: clamp(2.5rem, 4vw, 7rem);
    line-height: 1.25em;
    color: var(--white);
    max-width: 19ch;
  }

  @media screen and (max-width: 1440px) {
    padding-top: 120px;
  }

  @media screen and (max-width: 1024px) {
    padding: 80px 0 120px 120px;

    &::after {
      bottom: 80px;
    }
  }
`;
