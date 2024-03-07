import styled from "styled-components";

export const Popup = styled.div`
  width: 460px;
  border-radius: 50px 50px 0 0;
  background: var(--gradientTwo);
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

  div {
    padding: 56px 40px;
    padding-bottom: 40px;
    display: grid;

    position: relative;
    z-index: 1;
  }

  div > :nth-child(1) {
    font-weight: 500;
    font-size: 2.5rem;
    color: var(--white);

    em {
      display: block;
      font-style: normal;
      color: var(--primaryDark);
      background-color: var(--primaryLight);
    }
  }

  div > :nth-child(2) {
    color: var(--primaryLight);
    display: block;
    max-width: 18ch;
    padding-top: 8px;
  }

  a {
    justify-self: end;
    font-weight: 700;
    font-size: 0.875rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--secondary);
    padding: 16px 24px;
    border-radius: 50px;
    border: 1px solid var(--secondary);
    transition: 0.3s ease;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
  }

  @media screen and (min-width: 1080px) {
    a:hover {
      background-color: var(--secondary);
      color: var(--primaryDark);
    }
  }

  @media screen and (max-width: 640px) {
    width: 320px;
    border-radius: 25px 25px 0 0;

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

    a {
      font-size: 0.75rem;
    }
  }
`;

export const ButtonClose = styled.button`
  padding: 10px 13px;
  background: var(--primaryDark);
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
