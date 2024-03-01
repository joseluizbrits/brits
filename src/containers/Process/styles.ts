import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--primary);
  padding-bottom: 200px;

  h2 {
    font-weight: 400;
    font-size: clamp(2.5rem, 6vw, 7rem);
    color: var(--primaryLight);
    max-width: 16ch;
    padding: 160px 0;
    margin: 0 auto;
  }

  ul {
    padding: 0 120px;
    display: grid;
    gap: 120px;
  }

  ul > :nth-child(even) {
    flex-direction: row-reverse;

    h3,
    p {
      text-align: end;
    }

    svg {
      right: 0;
      left: auto;
      transform: scaleX(-1);
    }
  }

  li {
    display: flex;
    gap: 28px;
    position: relative;
  }

  li span {
    font-size: clamp(2.5rem, 4vw, 5rem);
    color: var(--secondary);

    aspect-ratio: 1/1;
    height: clamp(64px, 8vw, 120px);
    background-color: var(--primaryDark);
    border-radius: 50%;

    display: grid;
    place-items: center;
  }

  li div h3 {
    font-weight: 400;
    font-size: clamp(2.5rem, 5vw, 6rem);
    color: var(--blogText);
    padding: 16px 0;
  }

  li div p {
    font-size: clamp(1.25rem, 1.875vw, 2rem);
    line-height: 1.5em;
    color: var(--blogText);
    max-width: 55ch;
    padding: 8px 0;
  }

  li svg {
    position: absolute;
    top: 90%;
    left: 0;
  }

  @media screen and (max-width: 1440px) {
    ul {
      padding: 0 40px;
    }
  }

  @media screen and (max-width: 1080px) {
    h2 {
      padding: 120px 0;
    }

    li div h3 {
      padding: 4px 0;
    }

    li svg {
      top: 50%;
      scale: 0.4;
    }
  }

  @media screen and (max-width: 768px) {
    ul {
      padding: 0 20px;
    }

    li {
      gap: 16px;
    }

    li div p {
      max-width: 50ch;
      padding-right: 20px;
    }

    li svg {
      top: 65%;
      left: -20px;
    }

    ul > :nth-child(even) {
      p {
        padding-right: 0;
        padding-left: 20px;
      }
      svg {
        right: -20px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    h2 {
      padding-bottom: 160px;
    }

    li {
      gap: 12px;
    }

    li span {
      font-size: 2rem;
      height: 40px;

      margin-top: -40px;
      margin-right: -24px;
    }

    li svg {
      scale: 0.3;
      top: 68%;
    }

    ul > :nth-child(even) span {
      transform: translateX(-24px);
    }
  }
`;
