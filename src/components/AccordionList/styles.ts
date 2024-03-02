import styled from "styled-components";
import img from "../../../public/universe.webp";

export const Container = styled.ul`
  padding: 40px;
  margin: 64px 0;
  border-radius: 50px;
  background: var(--gradientTwo);

  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    background: url(${img.src}) center center no-repeat;
    background-size: cover;
    border-radius: 50px;
    opacity: 0.2;

    position: absolute;
    top: 0;
    left: 0;
  }

  li {
    display: grid;
    grid-template-columns: 40px 1fr;
    align-items: center;
    gap: 12px;

    position: relative;
  }

  li + li {
    margin-top: 28px;
  }

  @media screen and (max-width: 1440px) {
    margin: 40px 0;

    li + li {
      margin-top: 12px;
    }
  }

  @media screen and (max-width: 1024px) {
    li + li {
      margin-top: 8px;
    }

    li svg {
      scale: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 28px 40px;
    padding-left: 20px;

    li {
      gap: 4px;
    }

    li svg {
      scale: 0.6;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 28px 14px;
    padding-left: 4px;
    margin: 28px 0;
  }
`;

export const Summary = styled.div`
  width: 100%;
  padding: 16px 32px;
  border-radius: 25px;
  background-color: var(--secondary);

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  transition: 0.3s ease;

  h3 {
    font-weight: 400;
    font-size: clamp(1.25rem, 1.5vw, 2rem);
    color: var(--primaryDark);
  }

  svg {
    transition: 0.3s ease;
  }

  &.active {
    opacity: 0.8;
  }

  &.active svg {
    rotate: 180deg;
  }

  @media screen and (max-width: 1024px) {
    padding: 12px 28px;

    h3 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 8px 20px;
  }

  @media screen and (max-width: 480px) {
    margin-left: -6px;
  }
`;

export const Details = styled.div`
  height: 0;
  grid-column: 2;
  transition: 0.3s ease;

  p {
    opacity: 0;
    pointer-events: none;
    transition: 0.3s ease;
  }

  &.active {
    height: 64px;
  }

  &.active p {
    font-size: clamp(1rem, 1.25vw, 1.5rem);
    line-height: 1.5em;
    color: var(--white);

    opacity: 1;
    padding-left: 16px;
    padding-right: 40px;
    align-self: flex-start;
  }

  @media screen and (max-width: 1440px) {
    &.active {
      height: 56px;
    }
  }

  @media screen and (max-width: 1024px) {
    &.active {
      height: 88px;
    }
  }

  @media screen and (max-width: 640px) {
    &.active {
      height: 100px;
    }
  }

  @media screen and (max-width: 560px) {
    &.active {
      height: 150px;
    }
  }

  @media screen and (max-width: 400px) {
    &.active {
      height: 180px;
    }
  }
`;
