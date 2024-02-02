import styled from "styled-components";

export const Container = styled.header<{ $bg: string }>`
  padding-top: 20px;
  padding-bottom: 20px;
  height: 100px;
  background: ${({ $bg }) => ($bg ? "transparent" : "var(--primaryGradient)")};

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  li a {
    text-transform: uppercase;
    color: var(--white);
    padding: 20px;

    transition: 0.3s ease-out;
  }

  ul :last-child a {
    font-weight: 700;
    letter-spacing: 0.05rem;

    padding: 12px 24px;
    border-radius: 50px;
    background-color: var(--tertiary);
    box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 1024px) {
    li a:hover {
      color: var(--primaryLight);
    }

    ul :last-child a:hover {
      background-color: var(--primary);
      color: var(--primaryLight);
    }
  }

  @media screen and (max-width: 768px) {
    height: 80px;

    ul > :nth-child(1) {
      display: none;
    }

    ul :last-child a {
      font-size: 0.75rem;
      padding: 10px 20px;
    }
  }
`;
