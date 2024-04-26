import styled from "styled-components";

export const ButtonWrapper = styled.button<{ $secondary?: boolean }>`
  padding: 20px 32px;
  border-radius: 50px;
  box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.1);
  background-color: ${(props) =>
    !props.$secondary ? "var(--secondary)" : "var(--tertiary)"};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  transition: 0.3s ease-out;

  span {
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: ${(props) =>
      !props.$secondary ? "var(--primary-dark)" : "var(--white)"};
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      background-color: ${(props) =>
        !props.$secondary ? "var(--primary-dark)" : "var(--primary)"};

      span {
        color: ${(props) =>
          !props.$secondary ? "var(--secondary)" : "var(--primary-light)"};
      }

      svg path {
        fill: ${(props) =>
          !props.$secondary ? "var(--secondary)" : "var(--primary-light)"};
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding: 16px 24px;

    span {
      font-size: 0.875rem;
    }
  }
`;
