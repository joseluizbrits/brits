import styled from "styled-components";

export const ButtonFilledWrapper = styled.div<{
  $color: "light" | "dark";
  $arrow: boolean;
}>`
  a {
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-align: center;
    padding: 12px 24px;
    border-radius: 50px;
    color: ${({ $color }) =>
      $color === "light" ? "var(--primary-dark)" : "var(--tertiary)"};
    background-color: ${({ $color }) =>
      $color === "light" ? "var(--tertiary)" : "var(--primary-dark)"};

    display: grid;
    grid-template-columns: ${({ $arrow }) => ($arrow ? "auto 1fr" : "1fr")};
    place-items: center;
    gap: 8px;

    transition: 0.1s ease-out;
  }

  @media screen and (min-width: 1080px) {
    a:hover {
      color: var(--primary-dark);
      background-color: ${({ $color }) =>
        $color === "light" ? "var(--secondary)" : "var(--primary-light)"};
    }
  }
`;
