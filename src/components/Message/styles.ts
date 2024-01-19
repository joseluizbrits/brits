import styled from "styled-components";

export const Container = styled.aside`
  max-height: 100vh;
  flex: 1;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 500px;
    height: 160px;
    border-radius: 50px;
    background-color: var(--tertiary);

    position: absolute;
    top: 38%;
    left: 20%;
  }

  &::after {
    content: "";
    display: block;
    width: 200px;
    height: 160px;
    border-radius: 50px 0 0 50px;
    background-color: var(--tertiary);

    position: absolute;
    bottom: 0;
    right: 0;
  }

  a {
    position: relative;
    top: 50%;
    left: 54%;
  }

  span {
    font-size: 3rem;
    color: var(--white);
    max-width: 15ch;
  }

  svg {
    transform: translate(36px, 12px);
  }
`;
