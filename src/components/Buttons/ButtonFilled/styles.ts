import styled from "styled-components";

export const ButtonFilledWrapper = styled.div<{
  $color: "light" | "dark";
}>`
  a {
    display: block;
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-align: center;
    text-transform: uppercase;
    padding: 12px 6px;
    border-radius: 50px;
    color: ${({ $color }) =>
      $color === "light" ? "var(--primary-dark)" : "var(--tertiary)"};
    background-color: ${({ $color }) =>
      $color === "light" ? "var(--tertiary)" : "var(--primary-dark)"};

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
