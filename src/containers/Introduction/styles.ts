import styled from "styled-components";
import eye from "../../../public/eye.jpg";

export const Container = styled.section`
  background: var(--gradientTwo);
  height: 100vh;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 70%;
    height: 100vh;
    background: url(${eye.src}) 30% 40%;
    background-size: cover;
    opacity: 0.4;

    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: "";
    display: block;
    background: var(--gradientTwo);

    width: 35%;
    height: 100vh;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);

    position: absolute;
    top: 0;
    right: 30%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 48px;

  display: grid;
  grid-template-columns: 1fr;

  position: relative;
  z-index: 1;

  h2 {
    font-weight: 400;
    font-size: clamp(2rem, 6vw, 9rem);
    line-height: 1.25em;
    text-align: end;
    color: var(--white);
    max-width: 18ch;

    justify-self: end;
    align-self: center;
    height: fit-content;

    display: grid;
    gap: 12px;
  }

  small {
    font-size: clamp(1rem, 1.25vw, 1.5rem);
    letter-spacing: 0.05rem;
    text-transform: lowercase;
    color: var(--primaryLight);
    margin-bottom: -7%;
  }

  > div {
    display: flex;
    justify-content: space-between;
    height: fit-content;
    align-self: end;
  }

  @media screen and (max-width: 1024px) {
    padding-top: 80px;
  }
`;

export const Labels = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  span {
    font-size: clamp(0.875rem, 1vw, 1.25rem);
    letter-spacing: 0.05rem;
    text-transform: lowercase;
    color: var(--primaryLight);
  }
`;
