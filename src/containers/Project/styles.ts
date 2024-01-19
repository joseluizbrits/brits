import styled from "styled-components";
import img from "../../../public/art-desktop.jpg";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  position: relative;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: url(${img.src}) no-repeat center center;
    background-size: cover;
    opacity: 0.3;

    position: absolute;
    top: 0;
  }

  &::after {
    content: "";
    display: block;
    background: var(--gradientOne);

    width: 40%;
    height: 100vh;
    clip-path: polygon(0 0, 100% 100%, 0 100%);

    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const Content = styled.div`
  height: 100%;
  padding-top: 120px;
  padding-bottom: 48px;
  display: grid;

  position: relative;
  z-index: 1;

  h2 {
    font-weight: 400;
    font-size: 5rem;
    color: var(--white);
    line-height: 1.25em;
    max-width: 18ch;
  }

  button {
    height: fit-content;
    justify-self: end;
    align-self: end;
  }
`;