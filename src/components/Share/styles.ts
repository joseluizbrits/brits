import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 32px;
  border-bottom: 1px solid var(--secondaryClear);

  display: grid;
  gap: 12px;

  span {
    color: var(--primaryLight);
  }
`;

export const Media = styled.div`
  display: flex;
  margin-left: -4px;

  a {
    display: block;
  }

  a svg {
    scale: 0.7;
  }
`;
