import styled from "styled-components";

export const PopupWrapper = styled.div`
  width: 460px;
  border-radius: 15px 15px 0 0;
  background: var(--gradient-2);
  box-shadow: -3px -3px 10px rgba(0, 0, 0, 0.3);

  position: fixed;
  bottom: 0;
  right: 20px;
  z-index: 100;

  transform: translateY(105%);
  transition: 0.3s ease-in-out;

  &.active {
    transform: translateY(0%);
  }

  > div {
    padding: 48px 40px;
    padding-bottom: 32px;
    display: grid;

    position: relative;
    z-index: 1;
  }

  > div > :nth-child(1) {
    font-weight: 500;
    font-size: 2.5rem;
    color: var(--white);

    em {
      display: block;
      font-style: normal;
      color: var(--primary-dark);
      background-color: var(--primary-light);
    }
  }

  div > :nth-child(2) {
    color: var(--primary-light);
    display: block;
    max-width: 18ch;
    padding-top: 8px;
  }

  > div > :last-child {
    justify-self: end;
    font-weight: 700;
    font-size: 0.875rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--primary-dark);
    background-color: var(--tertiary);
    padding: 16px 24px;
    border-radius: 50px;
    transition: 0.1s ease-out;
  }

  img {
    position: absolute;
    top: 0px;
    right: 0;
  }

  @media screen and (min-width: 1080px) {
    > div > :last-child:hover {
      color: var(--tertiary);
      background-color: var(--primary-dark);
    }
  }

  @media screen and (max-width: 640px) {
    width: 320px;

    div {
      padding: 40px 28px;
      padding-bottom: 28px;
    }

    div > :nth-child(1) {
      font-size: 2rem;
    }

    div > :nth-child(2) {
      font-size: 0.75rem;
    }

    > div > :last-child {
      font-size: 0.75rem;
      padding: 12px 20px;
    }
  }
`;

export const ButtonClose = styled.button`
  padding: 10px 13px;
  background: var(--primary-dark);
  border-radius: 50%;
  box-shadow: -1px -1px 6px rgba(0, 0, 0, 0.3);

  position: absolute;
  top: -8px;
  left: -12px;
  z-index: 1;

  transition: 0.3s ease;

  @media screen and (min-width: 1080px) {
    &:hover {
      scale: 0.9;
      filter: contrast(120%);
    }
  }

  @media screen and (max-width: 640px) {
    padding: 10px 13px;
    top: -8px;
    left: -12px;

    svg {
      scale: 0.6;
    }
  }
`;
