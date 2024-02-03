import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;

  &.top {
    gap: 12px;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--secondaryClear);
  }

  &.bottom {
    gap: 8px;
    margin-top: 80px;
    padding-top: 40px;
    padding-bottom: 64px;
    border-top: 1px solid var(--secondaryClear);

    place-items: center;
  }

  span {
    color: var(--primaryLight);
  }

  &.bottom span {
    font-weight: 500;
    font-size: clamp(1.5rem, 1.75vw, 2rem);
  }

  div {
    display: flex;
  }

  &.top div {
    margin-left: -4px;
  }

  a {
    display: block;
  }

  &.bottom a {
    padding: 6px;
  }

  &.top svg {
    scale: 0.7;
  }
`;