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

  span {
    font-size: 2rem;
    color: var(--tertiary);

    aspect-ratio: 1/1;
    height: 64px;
    background-color: var(--primary-dark);
    border-radius: 50%;

    display: grid;
    place-items: center;
  }

  h3 {
    font-weight: 400;
    font-size: 3rem;
    color: var(--secondary);
    margin-bottom: 16px;
  }

  p {
    font-size: 1.25rem;
    max-width: 55ch;
  }

  svg {
    position: absolute;
    top: 80%;
    left: 0;
    z-index: 1;
  }

  @media screen and (max-width: 1080px) {
    ul {
      gap: 28px;
    }

    svg {
      top: 65%;
      scale: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    li {
      padding: 28px;
      padding-bottom: 48px;
    }

    span {
      font-size: 1.5rem;
      height: 48px;
    }

    li {
      gap: 16px;
    }

    h3 {
      font-size: 2.25rem;
    }

    svg {
      scale: 0.6;
    }
  }

  @media screen and (max-width: 480px) {
    ul {
      gap: 20px;
    }

    li,
    ul > :nth-child(even) {
      flex-direction: column;
    }

    ul > :nth-child(even) {
      align-items: end;
    }

    span {
      width: fit-content;
    }

    svg {
      top: 85%;
    }
  }
`;
