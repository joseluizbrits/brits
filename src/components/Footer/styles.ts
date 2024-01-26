import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 160px;
  padding: 0 40px;
  background: var(--primaryGradient);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  > span {
    line-height: 1.25rem;
    text-align: center;
    color: var(--white);
    opacity: 0.8;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 8px;

    > span {
      font-size: 0.875rem;
    }
  }
`;
