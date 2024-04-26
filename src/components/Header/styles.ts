import styled from "styled-components";

export const HeaderContainer = styled.header<{
  $type: "blog" | "blogPost" | "home";
}>`
  padding-top: 20px;
  padding-bottom: 20px;
  height: 80px;
  background: ${({ $type }) =>
    $type === "blog" ? "var(--gradient-1)" : "transparent"};

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .navlink {
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--white);
    padding: 20px;

    transition: 0.1s ease-out;
  }

  @media screen and (min-width: 1024px) {
    .navlink:hover {
      color: var(--tertiary);
    }
  }

  @media screen and (max-width: 768px) {
    height: 64px;

    .navlink {
      display: none;
    }
  }
`;
