import styled from "styled-components";

export const Container = styled.div`
  padding-top: 80px;

  svg {
    position: fixed;
    top: 80px;
    right: 0;
  }

  span {
    color: var(--primaryLight);
    text-transform: lowercase;
    letter-spacing: 0.05rem;
  }

  h1 {
    font-size: 5rem;
    letter-spacing: 0.05rem;
    color: var(--white);
    max-width: 20ch;
    margin-bottom: 48px;
  }

  a {
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--primaryDark);
    background-color: var(--secondary);
    border-radius: 50px;
    padding: 20px 32px;
  }
`;
