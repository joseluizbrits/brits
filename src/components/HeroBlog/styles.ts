import styled from "styled-components";

export const Container = styled.section`
  height: calc(100vh - 100px);

  display: flex;
  align-items: center;

  position: relative;

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
`;

export const Content = styled.div`
  width: 100%;
  margin-left: 280px;
  margin-top: -80px;

  display: grid;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: clamp(2rem, 5vw, 6rem);
    margin-top: calc(clamp(2rem, 5vw, 6rem) * -1);
    background-color: var(--primaryLight);

    grid-area: 2/1;
    animation: fromRight ease-out 1.3s forwards;
  }

  h1 {
    font-weight: 500;
    font-size: clamp(2rem, 5vw, 6rem);
    color: var(--white);
    max-width: 18ch;
  }

  h1 span {
    display: block;
    color: var(--primaryDark);
    position: relative;
  }

  p {
    font-size: clamp(1rem, 1.5vw, 1.75rem);
    line-height: 1.25em;
    max-width: 18ch;
    color: var(--primaryLight);
    margin-right: 120px;
    margin-top: 12px;

    justify-self: end;
  }

  @keyframes fromRight {
    from {
      translate: 100%;
    }
    to {
      translate: 0%;
    }
  }
`;
