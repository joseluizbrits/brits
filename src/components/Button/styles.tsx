import styled from "styled-components";

export const ButtonWrapper = styled.button<{ $secondary?: boolean }>`
  padding: 20px 32px;
  border-radius: 50px;
  background-color: ${(props) =>
    !props.$secondary ? "var(--secondary)" : "var(--tertiary)"};

  span {
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: ${(props) =>
      !props.$secondary ? "var(--primaryDark)" : "var(--white)"};
  }
`;
