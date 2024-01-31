import styled from "styled-components";
import arrow from "../../../public/arrow.svg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--primaryDarkShadow);

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  clip-path: circle(0 at 0 100%);
  pointer-events: none;
  transition: 0.6s ease-out;

  &.active {
    clip-path: circle(150% at 0 100%);
    pointer-events: all;
  }

  .swiper {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  .swiper-wrapper {
    display: flex;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      opacity: 0;
      transform: translate(-200px, -200px);
      transition: 0.6s ease-out;
      transition-delay: 1s;
    }

    .cm-card::after {
      filter: opacity(0);
      transition: 0.6s ease-out;
      transition-delay: 1s;
    }
  }

  .swiper-slide-active {
    img {
      opacity: 1;
      transform: translate(0, 0);
    }

    .cm-card::after {
      filter: opacity(1);
    }
  }

  .swiper-pagination {
    position: absolute;
    bottom: 0;
  }

  .swiper-button-next {
    width: clamp(48px, 10vw, 100px);
    height: clamp(48px, 10vw, 100px);
    background: url(${arrow.src}) center center no-repeat;
    background-size: cover;
    cursor: pointer;

    position: absolute;
    bottom: 180px;
    right: 160px;

    transition: 0.3s ease-out;
  }

  .swiper-button-disabled {
    opacity: 0;
    pointer-events: none;
  }

  .swiper-pagination {
    padding: 8px;
    margin: 12px;
    border-radius: 8px;
    color: var(--primaryLight);
    border: 1px solid var(--primaryLightShadow);
  }

  @media screen and (min-width: 1024px) {
    .swiper-button-next:hover {
      transform: translateX(12px);
      scale: 0.9;
      opacity: 0.7;
    }
  }

  @media screen and (max-width: 1024px) {
    .swiper-button-next {
      right: 80px;
    }
  }

  @media screen and (max-width: 640px) {
    .swiper-button-next {
      bottom: 112px;
      right: 64px;
    }
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;

  svg {
    transition: 0.3s ease-out;
  }

  @media screen and (min-width: 1024px) {
    &:hover svg {
      scale: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;
