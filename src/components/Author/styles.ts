import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 64px;

  display: flex;
  gap: 16px;

  img {
    border-radius: 50%;
  }
`;

export const Text = styled.div`
  display: grid;
  align-items: center;

  :nth-child(1) {
    color: var(--primaryLight);
    font-size: 1.25rem;
  }

  :nth-child(2) {
    color: var(--primaryDark);
  }
`;
