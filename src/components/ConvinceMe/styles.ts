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
    width: 100px;
    height: 100px;
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
`;
