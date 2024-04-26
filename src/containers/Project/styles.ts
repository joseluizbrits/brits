import styled from "styled-components";
import desktop from "../../../../public/art-desktop.jpg";
import tablet from "../../../../public/art-tablet.jpg";

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  position: relative;

  &::after {
    content: "";
    display: block;
    background: var(--gradient-1);

    width: 40%;
    height: 100vh;

    clip-path: var(--shortTriangle);

    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.3;

  position: absolute;
  top: 0;

  img {
    object-fit: cover;
  }
`;

export const Content = styled.div`
  height: 100%;
  padding-bottom: 48px;

  display: grid;
  align-items: end;

  position: relative;
  z-index: 1;

  h2 {
    font-weight: 400;
    font-size: clamp(2.5rem, 6vw, 9rem);
    color: var(--white);
    line-height: 1.25em;
    max-width: 18ch;
  }

  button {
    height: fit-content;
    justify-self: end;
    align-self: end;
  }
`;
