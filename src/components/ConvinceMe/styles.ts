import styled from "styled-components";
import arrow from "../../../public/arrow.svg";
import img2 from "../../../public/sabichao.png";
import img5 from "../../../public/makeup.png";
import img7 from "../../../public/chorrindo.png";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--tertiaryShadow);

  position: absolute;
  top: 0;
  left: 0;

  z-index: 10;

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
  }

  /* PARA VIRAR COMPONENTE */

  .cm-container {
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
  }

  .cm-card {
    width: 100%;
    margin: 0 120px;
    border-radius: 50px;
    background-color: var(--primaryDark);

    position: relative;
  }

  .cm-text {
    width: max-content;
    padding: 120px 160px;

    position: relative;
    z-index: 1;
  }

  .cm-text p {
    font-weight: 900;
    font-size: 2rem;
    line-height: 1.25em;
    letter-spacing: 0.05rem;
    color: var(--white);
    max-width: 40ch;

    display: grid;
    gap: 40px;

    span {
      font-style: italic;
    }
  }

  .quote-1,
  .quote-2 {
    position: absolute;
  }

  .quote-1 {
    top: 40px;
    left: 48px;
  }

  .quote-2 {
    rotate: 180deg;
    bottom: 64px;
    right: 64px;
  }

  .cm-card a {
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--primaryDark);
    background-color: var(--secondary);
    border-radius: 50px;
    padding: 20px 32px;

    position: absolute;
    bottom: 40px;
    right: 40px;
    z-index: 1;
  }

  /* IMAGENS */

  .cm-card img {
    object-fit: cover;
    border-radius: 25px;
    position: absolute;
  }

  #img-1 {
    rotate: -12deg;
    top: -40px;
    right: -40px;
  }

  #img-3 {
    top: -80px;
    right: -40px;
  }

  #img-4 {
    rotate: 12deg;
    top: -32px;
    right: -40px;
  }

  #img-6 {
    top: -40px;
    right: -40px;
  }

  .cm-card::after {
    content: "";
    display: block;
    width: 40%;
    height: 100%;

    position: absolute;
    top: 0;
  }

  /* img-2 */
  .cm-card-2::after {
    border-radius: 0 50px 50px 0;
    background: url(${img2.src}) center center no-repeat;
    background-size: cover;
    opacity: 0.4;
    right: 0;
  }

  /* img-5 */
  .cm-card-5::after {
    border-radius: 50px 0 0 50px;
    background: url(${img5.src}) center center no-repeat;
    background-size: cover;
    left: 0;
  }

  /* img-7 */
  .cm-card-7::after {
    border-radius: 0 50px 50px 0;
    background: url(${img7.src}) center center no-repeat;
    background-size: cover;
    opacity: 0.8;
    right: 0;
  }
`;
