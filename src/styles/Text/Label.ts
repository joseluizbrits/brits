import styled from "styled-components";

export const Label = styled.span`
  color: var(--primary);
  background-color: var(--bg-3);
  padding: 8px;
  border-radius: 8px;

  @media screen and (max-width: 400px) {
    font-size: 0.875rem;
  }
`;
