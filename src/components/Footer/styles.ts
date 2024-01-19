import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 160px;
  background: var(--primaryGradient);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  > span {
    color: var(--white);
    opacity: 0.8;
  }
`;
