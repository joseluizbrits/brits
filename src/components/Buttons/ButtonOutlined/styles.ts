import styled from "styled-components";

export const ButtonOutlinedWrapper = styled.div<{ $borderless?: boolean }>`
  a {
    display: block;
    width: max-content;

    font-weight: 700;
    letter-spacing: 0.05rem;
    color: var(--secondary);

    padding: ${({ $borderless }) => ($borderless ? "12px 0" : "12px 24px")};
    border-radius: 50px;
    border: ${({ $borderless }) =>
      $borderless ? "none" : "1px solid var(--secondary)"};

    display: flex;
    align-items: center;
    gap: 8px;
  }

  a,
  svg {
    transition: 0.1s ease-out;
  }

  @media screen and (min-width: 1024px) {
    a:hover {
      opacity: ${({ $borderless }) => ($borderless ? "0.8" : "auto")};
      box-shadow: ${({ $borderless }) =>
        $borderless ? "none" : "0 0 10px 1px var(--secondary-20)"};

      svg {
        transform: translateX(4px);
      }
    }
  }
`;
