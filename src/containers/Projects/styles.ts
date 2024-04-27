import styled from "styled-components";

export const ProjectsContainer = styled.section`
  margin-top: var(--gap);
  overflow: hidden;

  h2 {
    margin-bottom: 80px;
  }

  p {
    margin-top: 20px;
    transition: 0.1s ease-out;
  }

  .swiper {
    position: relative;
    cursor: grab;
  }

  .swiper-wrapper {
    display: flex;
    width: max-content;
  }

  .swiper-slide {
    width: 100%;
    padding: 40px;
    background-color: var(--black-10);
    border: 1px solid var(--secondary-20);
    border-radius: 35px;

    display: grid;
  }

  .swiper-slide > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > :nth-child(2) {
      padding: 12px;
      opacity: 0.6;
      transition: 0.1s ease-out;

      &:hover {
        opacity: 1;
        scale: 1.05;
      }
    }
  }

  .swiper-slide > :nth-child(2) {
    margin-top: 64px;
    align-self: end;
  }

  .swiper-slide > a:hover {
    img {
      scale: 1.05;
    }

    p {
      opacity: 0.7;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 50px;
    height: 80px;
    background: url("/arrow-rounded.svg") no-repeat center center;
    scale: 0.9;
    cursor: pointer;

    position: absolute;
    top: calc(50% - 40px);

    transition: 0.1s ease-out;
  }

  .swiper-button-next {
    right: 0;
    rotate: 180deg;
  }

  .swiper-button-disabled {
    opacity: 0;
    pointer-events: none;
  }

  @media screen and (min-width: 1080px) {
    .swiper-button-prev:hover,
    .swiper-button-next:hover {
      filter: hue-rotate(250deg);
      -webkit-filter: hue-rotate(250deg);
      scale: 1;
    }
  }
`;

export const ImageWrapper = styled.div`
  aspect-ratio: 16 / 9;
  border-radius: 15px;
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;
    transition: 0.1s ease-out;
  }
`;
