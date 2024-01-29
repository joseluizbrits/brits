import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;

  img {
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
`;

export const Content = styled.div<{ $src: string }>`
  width: 100%;
  margin: 0 120px;
  border-radius: 50px;
  background-color: var(--primaryDark);
  box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.1);

  position: relative;

  /* -------------- IMAGES -------------- */

  img {
    object-fit: cover;
    border-radius: 25px;
    position: absolute;
    box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.1);
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

  /* -------------- BG IMAGES -------------- */

  &::after {
    content: "";
    display: block;
    width: 40%;
    height: 100%;
    background: url(${({ $src }) => $src});
    background-size: cover;

    position: absolute;
    top: 0;
  }

  /* IMG 2 */

  &#cm-card-2::after {
    border-radius: 0 50px 50px 0;
    opacity: 0.4;
    right: 0;
  }

  /* IMG 5 */

  &#cm-card-5::after {
    border-radius: 50px 0 0 50px;
    left: 0;
  }

  /* IMG 7 */

  &#cm-card-7::after {
    border-radius: 0 50px 50px 0;
    opacity: 0.8;
    right: 0;
  }

  a {
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

  @media screen and (max-width: 1440px) {
    img {
      scale: 0.7;
    }

    #img-1 {
      right: -100px;
    }

    #img-3 {
      right: -120px;
      rotate: 20deg;
    }

    #img-6 {
      right: -100px;
      rotate: 20deg;
    }

    &#cm-card-7::after {
      width: 50%;
      right: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    margin: 0 52px;

    img {
      scale: 0.55;
    }

    #img-3 {
      top: -100px;
      right: -112px;
    }

    #img-4 {
      top: -80px;
      right: -76px;
    }

    &#cm-card-5::after {
      width: 60%;
    }

    #img-6 {
      top: -80px;
      right: -80px;
    }
  }

  @media screen and (max-width: 768px) {
    margin: 0 20px;

    img {
      scale: 0.55;
    }

    #img-1 {
      top: -140px;
      right: -40px;
    }

    #img-3 {
      top: -140px;
      right: -80px;
    }

    #img-6 {
      top: -120px;
    }
  }

  @media screen and (max-width: 640px) {
    #img-1,
    #img-3 {
      top: -170px;
    }

    #img-4 {
      top: -180px;
    }

    #img-6 {
      top: -140px;
    }

    &#cm-card-2::after,
    &#cm-card-5::after,
    &#cm-card-7::after {
      width: 100%;
      border-radius: 50px;
      background-position: 17%;
    }

    a {
      bottom: 20px;
      right: 20px;
    }
  }
`;

export const Text = styled.div`
  width: max-content;
  padding: 120px 160px;

  position: relative;
  z-index: 1;

  p {
    font-weight: 900;
    font-size: clamp(1.25rem, 2vw, 3rem);
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

  svg.quote-1,
  svg.quote-2 {
    position: absolute;
  }

  svg.quote-1 {
    top: 40px;
    left: 48px;
  }

  svg.quote-2 {
    rotate: 180deg;
    bottom: 64px;
    right: 64px;
  }

  @media screen and (max-width: 1024px) {
    padding: 80px 100px;

    p {
      line-height: 1.5em;
    }

    svg {
      scale: 0.4;
    }

    svg.quote-1 {
      top: 20px;
      left: 20px;
    }

    svg.quote-2 {
      bottom: 28px;
      right: 50px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 64px 64px;

    p {
      line-height: 1.5em;
      max-width: 35ch;
    }

    svg {
      scale: 0.3;
    }

    svg.quote-1 {
      top: -12px;
    }

    svg.quote-2 {
      bottom: 12px;
    }
  }

  @media screen and (max-width: 640px) {
    padding: 64px 48px;

    p {
      max-width: 20ch;
    }

    svg.quote-1 {
      left: 0;
    }

    svg.quote-2 {
      right: -24px;
    }
  }
`;
