import styled from "styled-components";

export const ShareWrapper = styled.div`
  display: grid;

  &.top {
    gap: 12px;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--tertiary-20);
  }

  &.bottom {
    gap: 8px;
    margin-top: 80px;
    padding-top: 40px;
    padding-bottom: 64px;
    border-top: 1px solid var(--tertiary-20);

    place-items: center;
  }

  span {
    color: var(--primary-light);
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

  &.top svg,
  &.bottom svg {
    transition: 0.3s ease-out;
  }

  &.top svg {
    scale: 0.7;
  }

  @media screen and (min-width: 1024px) {
    &.top a:hover svg {
      scale: 0.8;
      filter: contrast(150%);
    }

    &.bottom a:hover svg {
      filter: contrast(150%);
    }
  }
`;
