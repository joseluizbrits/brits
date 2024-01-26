import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  height: 160vh;
  padding-top: 240px;
  padding-left: 40px;
  background: var(--gradientTwoToPrimary);

  &::before {
    content: "";
    display: block;
    background: var(--gradientTwoToPrimary);

    width: 60%;
    height: 160vh;
    clip-path: polygon(0 0, 100% 100%, 0 100%);

    position: absolute;
    top: 0;
    left: 40%;
  }
`;

export const Me = styled.div`
  width: clamp(240px, 26vw, 400px);
  height: clamp(240px, 26vw, 400px);
  border-radius: 50%;

  position: relative;

  img {
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const Baloon = styled.div`
  width: max-content;
  height: max-content;
  border-radius: 25px;
  background-color: var(--primaryDark);
  box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  span {
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    line-height: 1.5em;
    color: var(--primaryLight);
  }

  &::before {
    content: "";
    display: block;
    background-color: inherit;
    clip-path: polygon(0% 100%, 100% 100%, 100% 0);

    position: absolute;
  }

  &.baloon-short {
    bottom: 38%;
    left: 80%;
  }

  &.baloon-large {
    top: 60%;
    left: 85%;
  }

  &.baloon-short::before {
    width: 40px;
    height: 32px;

    rotate: 180deg;
    bottom: -32px;
    left: 40px;
  }

  &.baloon-large::before {
    width: 32px;
    height: 48px;

    transform: scaleX(-1);
    rotate: 180deg;
    top: 40px;
    left: -32px;
  }

  &.baloon-short span {
    max-width: 18ch;
    padding: 40px 48px;
  }

  &.baloon-large span {
    max-width: 37ch;
    padding: 48px 56px;
  }

  @media screen and (max-width: 1440px) {
    &.baloon-short span {
      padding: 28px 36px;
    }

    &.baloon-large span {
      padding: 32px 40px;
    }
  }
`;
