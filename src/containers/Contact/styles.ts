import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background: var(--primary);
`;

export const Title = styled.h2`
  display: grid;
  justify-content: center;

  position: relative;

  &::before,
  &::after {
    content: "";
    display: block;
    width: 200px;
    height: 64px;

    background-color: var(--tertiary);
    opacity: 0.8;

    position: absolute;
  }

  &::before {
    border-radius: 0 50px 50px 0;

    bottom: -80px;
    left: 0;
  }

  &::after {
    border-radius: 50px 0 0 50px;

    top: 0;
    right: 0;
  }

  small {
    font-weight: 400;
    font-size: 1.25rem;
    color: var(--primaryDark);
  }

  span {
    font-weight: 400;
    font-size: 4rem;
    line-height: 1.25em;
    color: var(--white);
    max-width: 19ch;
  }
`;
