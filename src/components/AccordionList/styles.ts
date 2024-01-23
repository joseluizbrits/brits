import styled from "styled-components";
import img from "../../../public/universe.jpg";

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
    font-size: 1.5rem;
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
    font-size: 1.25rem;
    line-height: 1.5em;
    color: var(--white);

    opacity: 1;
    padding-left: 16px;
    padding-right: 40px;
    align-self: flex-start;
  }
`;
