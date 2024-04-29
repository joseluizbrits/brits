import styled from "styled-components";

export const FooterContainer = styled.footer<{
  $type: "blog" | "blogPost" | "home";
}>`
  width: 100%;
  padding: 40px;
  background: ${({ $type }) =>
    $type === "blog" ? "var(--gradient-2)" : "var(--primary-dark)"};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  overflow: hidden;
  position: relative;

  > span {
    font-size: 1rem;
    line-height: 1.25rem;
    text-align: center;
    color: var(--gray-light);
    opacity: 0.8;
  }

  > :nth-child(3) a {
    padding: 12px;
    padding-left: 0;

    svg {
      transition: 0.1s ease-out;
    }
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
    > :nth-child(3) a svg:hover {
      scale: 1.1;
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
