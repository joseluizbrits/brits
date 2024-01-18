import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: var(--gradientOne);

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: 1px solid var(--tertiary);

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
  }

  span {
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    line-height: 1.25em;
    max-width: 5em;
    color: var(--primaryLight);
  }

  svg {
    position: absolute;
    top: 50%;
    left: 70%;
  }
`;
