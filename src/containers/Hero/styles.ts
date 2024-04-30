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

  > :nth-child(2) > div {
    display: grid;
    grid-template-columns: max-content auto;
    align-items: center;
    gap: 20px;
  }

  h1 {
    font-size: clamp(3rem, 6.5vw, 6.5rem);
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

  @media screen and (max-width: 992px) {
    margin-top: 8px;
    flex-direction: column;
    gap: 12px;

    > :nth-child(1) {
      width: 200px;
      margin-left: 16px;
    }

    > :nth-child(2) {
      margin-top: 0;
      margin-left: 0;

      display: flex;
      flex-direction: column;
      align-items: center;
    }

    > :nth-child(2) > div {
      grid-template-columns: 1fr auto;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    p {
      text-align: center;
      max-width: 45ch;
      margin-bottom: 32px;
    }
  }

  @media screen and (max-width: 640px) {
    > :nth-child(2) > div {
      width: 100%;
    }
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
