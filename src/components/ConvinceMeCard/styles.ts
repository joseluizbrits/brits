import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;

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

  /* IMAGENS */

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

  position: relative;

  /* -------------- IMAGES -------------- */

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
`;

export const Text = styled.div`
  width: max-content;
  padding: 120px 160px;

  position: relative;
  z-index: 1;

  p {
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
`;
