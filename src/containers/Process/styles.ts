import styled from "styled-components";

export const Container = styled.section`
  margin-top: var(--gap);

  ul {
    margin-top: 80px;
    display: grid;
    gap: 80px;
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

  ul > :first-child,
  ul > :last-child {
    background-color: var(--bg-6);
    border: none;
  }

  li {
    background-color: var(--black-10);
    border: 1px solid var(--secondary-20);
    border-radius: 35px;
    padding: 40px;

    display: flex;
    gap: 28px;
    position: relative;
  }

  li span {
    font-size: 2rem;
    color: var(--tertiary);

    aspect-ratio: 1/1;
    height: clamp(28px, 8vw, 64px);
    background-color: var(--primary-dark);
    border-radius: 50%;

    display: grid;
    place-items: center;
  }

  li div h3 {
    font-weight: 400;
    font-size: 3rem;
    color: var(--secondary);
    margin-bottom: 16px;
  }

  li div p {
    font-size: 1.25rem;
    max-width: 55ch;
  }

  li svg {
    position: absolute;
    top: 80%;
    left: 0;
    z-index: 1;
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
