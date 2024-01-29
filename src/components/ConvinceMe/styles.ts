import styled from "styled-components";
import arrow from "../../../public/arrow.svg";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--tertiaryShadow);

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;

  opacity: 0;
  pointer-events: none;

  &.active {
    opacity: 1;
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
  }

  .swiper-button-disabled {
    opacity: 0;
    pointer-events: none;
  }

  .swiper-pagination {
    padding: 8px;
    margin: 12px;
    border-radius: 8px;
    color: var(--primaryDark);
    background-color: var(--primaryLight);
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

  @media screen and (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;
