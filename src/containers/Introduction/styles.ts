import styled from "styled-components";
import img from "../../../public/eye.jpg";

export const Container = styled.section`
  background: var(--gradientTwo);
  height: 100vh;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 69.9%;
    height: 100vh;
    background: url(${img.src}) 30% 40%;
    background-size: cover;
    opacity: 0.4;

    clip-path: polygon(0 0, 100.1% 0%, 50.1% 100%, 0% 100%);

    position: absolute;
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    &::before {
      background: url(${img.src}) 34% center no-repeat;
      background-size: cover;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 48px;

  display: grid;
  grid-template-columns: 1fr;

  position: relative;

  h2 {
    font-weight: 400;
    font-size: clamp(2.5rem, 6vw, 9rem);
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
    font-size: clamp(0.875rem, 1.25vw, 1.5rem);
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

  @media screen and (max-width: 1024px) {
    gap: 20px;

    li {
      gap: 4px;
    }

    svg {
      scale: 0.7;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
