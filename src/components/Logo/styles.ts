import styled from "styled-components";

export const LogoWrapper = styled.div`
  &,
  a {
    display: flex;
    align-items: center;
  }

  span {
    font-style: italic;
    font-weight: 900;
    font-size: 2.5rem;
    text-shadow: -1px 1px 1px rgba(0, 0, 0, 0.1);

    background-image: var(--gradient-3);
    background-clip: text;

    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    padding-right: 20px;
  }

  @media screen and (max-width: 1440px) {
    span {
      font-size: 2rem;
      padding-right: 12px;
    }

    svg {
      scale: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    span {
      font-size: 1.5rem;
      padding: 3px;
    }

    svg {
      scale: 0.6;
    }
  }
`;
