import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding-left: 40px;
  background: var(--gradient-2ToPrimary);
  clip-path: var(--middleTriangleBottom);

  display: flex;
  align-items: center;

  @media screen and (max-width: 640px) {
    background: none;
    clip-path: none;
  }
`;

export const Me = styled.div`
  width: clamp(120px, 20vw, 240px);
  height: clamp(120px, 20vw, 240px);
  border-radius: 50%;

  position: relative;

  img {
    object-fit: cover;
    border-radius: 50%;
    clip-path: var(--me);
  }
`;

export const Baloon = styled.div`
  width: max-content;
  height: max-content;
  border-radius: 25px;
  background-color: var(--primary-dark);
  box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  span {
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    line-height: 1.5em;
    color: var(--primary-light);
  }

  &::before {
    content: "";
    display: block;
    background-color: inherit;
    clip-path: polygon(0% 100%, 100% 100%, 100% 0);

    position: absolute;
  }

  &.baloon-short {
    bottom: 70%;
    left: 80%;
  }

  &.baloon-large {
    top: 18%;
    left: 110%;
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
    &.baloon-short {
      bottom: 54%;
      left: 80%;
    }

    &.baloon-large {
      top: 45%;
      left: 100%;
    }

    &.baloon-short span {
      padding: 28px 36px;
    }

    &.baloon-large span {
      padding: 32px 40px;
    }
  }

  @media screen and (max-width: 1024px) {
    &.baloon-short {
      bottom: 80%;
      left: 72%;
    }

    &.baloon-large {
      top: 55%;
      left: 50%;
    }
  }

  @media screen and (max-width: 768px) {
    &.baloon-short {
      bottom: 140%;
    }

    &.baloon-large {
      top: 70%;
    }

    &.baloon-short::before {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      clip-path: none;

      bottom: -20px;
      left: 25px;
    }

    &.baloon-short::after {
      content: "";
      display: block;
      background-color: inherit;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      clip-path: none;

      position: absolute;
      bottom: -32px;
      left: 20px;
    }

    &.baloon-large::before {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      clip-path: none;

      top: -12px;
      left: 0;
    }

    &.baloon-large::after {
      content: "";
      display: block;
      background-color: inherit;
      width: 6px;
      height: 6px;
      border-radius: 50%;

      position: absolute;
      top: -24px;
      left: -8px;
    }
  }

  @media screen and (max-width: 480px) {
    &.baloon-large {
      left: 5%;
    }

    &.baloon-large::before {
      top: -20px;
      left: 24px;
    }

    &.baloon-large::after {
      top: -36px;
      left: 32px;
    }
  }
`;
