import styled from "styled-components";

export const Container = styled.aside`
  width: 45%;
  justify-self: end;

  position: relative;

  &::after {
    content: "";
    display: block;
    width: clamp(20px, 10vw, 160px);
    height: clamp(80px, 10vw, 160px);
    border-radius: 50px 0 0 50px;
    background-color: var(--tertiary);

    position: absolute;
    bottom: 18%;
    right: 0;
  }

  a {
    width: max-content;
    margin: auto;
    display: flex;

    position: relative;
    top: 35%;
  }

  span {
    font-size: clamp(1.5rem, 3vw, 4rem);
    line-height: 1.5em;
    color: var(--white);

    display: block;
    max-width: 12.5ch;
  }

  svg {
    align-self: end;
    transform: translate(-64px, -6px);
  }

  @media screen and (max-width: 1440px) {
    span {
      font-size: 2rem;
    }

    svg {
      transform: translate(-78px, 7px);
      scale: 0.7;
    }
  }

  @media screen and (max-width: 1024px) {
    a {
      top: 51%;
    }

    span {
      font-size: 1.5rem;
    }

    svg {
      transform: translate(-48px, 7px);
      scale: 0.7;
    }
  }

  @media screen and (max-width: 640px) {
    width: 55%;
    display: grid;
    place-items: center;

    &::after {
      opacity: 0.8;
      bottom: 2%;
    }

    a {
      position: initial;
    }

    a span {
      font-size: 1.25rem;
      color: var(--primaryLight);
    }

    a svg {
      transform: translate(-112px, 30px);
      scale: 0.4;
      border-radius: 50%;
    }
  }
`;
