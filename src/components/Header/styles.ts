import styled from "styled-components";

export const Container = styled.header`
  padding: 20px 120px;
  height: 100px;
  background-color: var(--primaryGradient);

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
  }

  ul :last-child a {
    font-weight: 700;
    letter-spacing: 0.05rem;

    background-color: var(--tertiary);
    padding: 12px 24px;
    border-radius: 50px;
  }
`;
