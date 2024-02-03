import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 40px;

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
    font-size: clamp(1rem, 1.15vw, 1.25rem);
    color: var(--primaryLight);
  }

  :nth-child(2) {
    font-size: clamp(0.875rem, 1vw, 1.15rem);
    color: var(--primaryDark);
  }
`;
