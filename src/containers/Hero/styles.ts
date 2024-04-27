import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 80px;

  > :nth-child(1) {
    width: 1200px;
    aspect-ratio: 1/1;
    margin-left: -40px;

    position: relative;
  }

  > :nth-child(2) {
    margin-top: -64px;
    margin-left: -64px;

    position: relative;
    z-index: 1;
  }

  h1 {
    font-size: clamp(4rem, 6.5vw, 9rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 0.9em;
    color: var(--white);
    max-width: 10ch;
    margin-bottom: 12px;
  }

  p {
    margin-bottom: 28px;
  }

  > :nth-child(2) > div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const Media = styled.div`
  display: flex;
  align-items: center;

  a {
    padding: 8px;
    opacity: 0.5;

    transition: 0.1s ease-out;
  }

  @media screen and (min-width: 1080px) {
    a:hover {
      opacity: 1;
      scale: 1.05;
    }
  }
`;
