import styled from "styled-components";

export const HeroContainer = styled.section`
  height: calc(100vh - 80px);
  background-color: var(--primary-dark);

  display: flex;
  align-items: center;

  overflow: hidden;
  position: relative;

  > :first-child {
    width: 100%;
    margin-left: 280px;
    margin-top: -80px;

    display: grid;
  }

  > :first-child::before {
    content: "";
    display: block;
    width: 100%;
    height: clamp(4rem, 5vw, 6rem);
    margin-top: calc(clamp(2rem, 5vw, 6rem) * -1);
    background-color: var(--primary-light);

    grid-area: 2/1;
    animation: fromRight ease-out 1.3s forwards;
  }

  h1 {
    font-weight: 500;
    font-size: clamp(4rem, 5vw, 6rem);
    color: var(--white);
    max-width: 18ch;
    padding-right: 20px;
  }

  h1 span {
    display: block;
    color: var(--primary-dark);
    position: relative;
  }

  p {
    font-size: clamp(1rem, 1.25vw, 1.5rem);
    line-height: 1.25em;
    max-width: 18ch;
    color: var(--primary-light);
    margin-right: 120px;
    margin-top: 12px;
    justify-self: end;

    opacity: 0;
    animation: fadeRight 0.6s ease-out forwards;
    animation-delay: 1.3s;
  }

  .bars.top {
    position: absolute;
    top: 0;
    right: 0;
    rotate: 180deg;
  }

  .bars.bottom {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  @keyframes fromRight {
    from {
      translate: 100%;
    }
    to {
      translate: 0%;
    }
  }

  @keyframes fadeRight {
    from {
      translate: 40px;
      opacity: 0;
    }
    to {
      translate: 0;
      opacity: 1;
    }
  }

  @media screen and (max-width: 1440px) {
    > :first-child {
      margin-left: 200px;

      &::before {
        transform: translateY(-6px);
      }
    }

    p {
      margin-right: 80px;
      margin-top: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    > :first-child {
      margin-left: 120px;

      &::before {
        height: 3rem;
      }
    }

    h1 {
      font-size: 3rem;
    }

    p {
      margin-right: 40px;
    }

    .bars.top {
      scale: 0.6;
      right: -40px;
    }

    .bars.bottom {
      scale: 0.6;
      left: -40px;
    }
  }

  @media screen and (max-width: 768px) {
    height: calc(100vh - 64px);

    > :first-child {
      margin-left: 80px;

      &::before {
        transform: translateY(-16px);
      }
    }

    p {
      margin-right: 20px;
      margin-top: -8px;
    }

    .bars {
      display: none;
    }
  }

  @media screen and (max-width: 640px) {
    height: 60vh;

    > :first-child {
      margin-left: 20px;
      margin-top: 0;
    }
  }
`;
