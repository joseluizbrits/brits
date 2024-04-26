import styled from "styled-components";

export const Container = styled.section`
  background-color: var(--secondary);
  padding-bottom: 160px;

  position: relative;

  &::before {
    content: "";
    width: 100%;
    height: 20vh;
    background-color: var(--blogBody);

    clip-path: polygon(0 0, 100% 100%, 100% 0);

    position: absolute;
    top: 0;
    right: 0;
  }

  h2 {
    font-weight: 400;
    font-size: clamp(2.5rem, 5vw, 7rem);
    max-width: 21ch;
    padding-top: 160px;
    padding-bottom: 80px;
    padding-left: 200px;

    background-image: var(--gradient-1);
    background-clip: text;

    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  ul {
    padding: 0 80px;
    padding-left: 120px;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 64px;
    padding-bottom: 40px;
  }

  li + li {
    border-top: 2px solid var(--primary-darkClear);

    span::after {
      content: "";
      width: 4px;
      height: 120px;
      border-radius: 5px;
      background: var(--tertiary);
      opacity: 0.2;

      position: absolute;
      top: -114px;
      left: -56px;
    }
  }

  li span {
    font-size: clamp(2rem, 3vw, 3.5rem);
    color: var(--primary-dark);

    position: relative;

    &::before {
      content: "";
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--gradient-1);
      /* opacity: 0.4; */

      position: absolute;
      top: 20px;
      left: -64px;
    }
  }

  @media screen and (max-width: 1080px) {
    &::before {
      height: 10vh;
    }

    h2 {
      padding-left: 120px;
    }

    ul {
      padding: 0 64px;
      padding-left: 100px;
    }

    li {
      padding-top: 56px;
      padding-bottom: 32px;
    }

    li svg {
      scale: 0.6;
      margin-right: -12px;
    }

    li span::before {
      top: 10px;
    }

    li + li span::after {
      top: -108px;
      height: 100px;
    }
  }

  @media screen and (max-width: 640px) {
    padding-bottom: 120px;

    h2 {
      max-width: 18ch;
      padding: 120px 20px;
      padding-bottom: 64px;
      margin: 0 auto;
    }

    ul {
      padding: 0 20px;
      padding-left: 56px;
    }

    li {
      padding-top: 36px;
      padding-bottom: 20px;

      span {
        font-size: 1.5rem;
      }
    }

    li span::before {
      width: 12px;
      height: 12px;
      left: -34px;
      top: 9px;
    }

    li + li {
      border-top: 1px solid var(--primary-darkClear);

      span::after {
        width: 2px;
        height: 80px;
        top: -86px;
        left: -29px;
      }
    }

    li svg {
      scale: 0.5;
      margin-right: -16px;
    }
  }
`;
