import styled from "styled-components";

export const Container = styled.footer<{ $bg: string }>`
  width: 100%;
  height: 160px;
  padding: 0 40px;
  background: ${({ $bg }) => ($bg ? "transparent" : "var(--primaryGradient)")};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  overflow: hidden;
  position: relative;

  > span {
    line-height: 1.25rem;
    text-align: center;
    color: var(--white);
    opacity: 0.8;
  }

  > div {
    margin-left: -8px;
  }

  > div a svg {
    scale: 0.6;
    transition: 0.3s ease;
  }

  .bars {
    position: absolute;
    scale: 0.6;
  }

  .bars.top {
    top: -30px;
    right: -40px;
    rotate: 180deg;
  }
  .bars.bottom {
    bottom: -30px;
    left: -40px;
  }

  @media screen and (min-width: 1024px) {
    > div a svg:hover {
      scale: 0.7;
    }
  }

  @media screen and (max-width: 1280px) {
    .bars.top {
      scale: 0.4;
      right: -56px;
    }

    .bars.bottom {
      scale: 0.4;
      left: -56px;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 8px;

    > span {
      font-size: 0.875rem;
    }
  }

  @media screen and (max-width: 768px) {
    .bars {
      display: none;
    }
  }
`;
