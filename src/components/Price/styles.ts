import styled from "styled-components";
import check from "../../../public/check.svg";

export const Container = styled.div`
  clip-path: circle(0 at 100% 100%);
  pointer-events: none;
  transition: 0.6s ease-out;

  &.active {
    clip-path: circle(150% at 100% 100%);
    pointer-events: all;
  }

  width: 100%;
  height: 100vh;
  background-color: var(--primaryDarkShadow);

  overflow-x: hidden;

  display: grid;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div<{ $animetionDirection: string }>`
  grid-area: 1/1;

  height: fit-content;
  padding: 64px;
  padding-top: 40px;
  margin: 0 120px;
  border-radius: 50px;
  background-color: var(--primaryDark);
  box-shadow: -3px 3px 6px rgba(0, 0, 0, 0.1);

  display: none;

  &.voila,
  &.active {
    display: block;
  }

  span.desc {
    font-size: clamp(1rem, 1.5vw, 2rem);
    line-height: 1.25em;
    color: var(--primaryLight);
  }

  span.desc::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    margin-top: 40px;
    border-radius: 2px;
    background-color: var(--primaryLightShadow);
  }

  p {
    font-size: clamp(2rem, 5vw, 5rem);
    line-height: 1.25em;
    color: var(--white);
    padding-top: 40px;
    padding-bottom: 48px;
  }

  animation: ${({ $animetionDirection }) => $animetionDirection} 0.3s ease-out
    forwards;

  @keyframes left {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes right {
    from {
      transform: translateX(50%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 40px;
    margin: 40px;
  }

  @media screen and (max-width: 768px) {
    margin: 20px;

    span.desc::after {
      margin-top: 28px;
      height: 1px;
    }

    p {
      padding-top: 32px;
      padding-bottom: 40px;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 40px 28px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  span {
    flex: 1;
    text-align: end;
    color: var(--primaryLight);
    opacity: 0.4;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 28px;
  }
`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding-right: 16px;

  span {
    color: var(--primaryLight);
    opacity: 0.4;
  }
`;

export const Options = styled.ul`
  li {
    padding-left: 40px;
    display: flex;
    align-items: center;
  }

  li + li {
    padding-top: 20px;
  }

  input[type="radio"],
  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: transparent;
    cursor: pointer;

    width: 1em;
    height: 1em;
    margin-top: 2px;
    border: 1px solid var(--primaryLight);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type="radio"] {
    border-radius: 50%;
  }

  input[type="radio"]::after {
    content: "";
    display: block;
    width: 0.6em;
    height: 0.6em;
    background-color: var(--primaryLight);
    border-radius: 50%;

    scale: 0;
    transition: 0.3s ease;
  }

  input[type="checkbox"]::after {
    content: "";
    display: block;
    width: 0.8em;
    height: 0.8em;
    background: url(${check.src}) center center no-repeat;
    background-size: cover;

    scale: 0;
    transition: 0.3s ease;
  }

  input[type="radio"]:checked::after,
  input[type="checkbox"]:checked::after {
    scale: 1;
  }

  label {
    font-size: clamp(1rem, 1.25vw, 1%.25rem);
    color: var(--white);
    padding-left: 16px;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    li {
      padding-left: 12px;
    }
  }
`;

export const ButtonShowPrice = styled.button`
  padding: 20px 32px;
  border-radius: 50px;
  background-color: var(--secondary);

  position: absolute;
  bottom: 40px;
  right: 64px;

  span {
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--primaryDark);
  }

  @media screen and (max-width: 1024px) {
    bottom: 24px;
    right: 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 16px 24px;

    span {
      font-size: 0.875rem;
    }
  }

  @media screen and (max-width: 480px) {
    bottom: -64px;
    right: 12px;
  }
`;

export const Value = styled.div`
  width: fit-content;
  padding: 40px;
  background-color: var(--white);
  border-radius: 50px;
  margin: 0 auto;
  margin-bottom: 40px;

  p {
    font-size: clamp(2rem, 6vw, 6rem);
    padding: 0;

    background-image: var(--gradientTwo);
    background-clip: text;

    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  @media screen and (max-width: 1024px) {
    padding: 28px;
    margin-bottom: 0;
  }
`;

export const Observation = styled.span`
  font-size: clamp(0.875rem, 1.25vw, 1.25rem);
  line-height: 1.5em;
  color: var(--primaryLight);
  opacity: 0.8;

  position: relative;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    margin-top: 80px;
    margin-bottom: 40px;
    border-radius: 2px;
    background-color: var(--primaryLightShadow);
  }

  &::after {
    content: "*";
    display: block;
    width: inherit;
    height: inherit;
    opacity: 0.4;

    position: absolute;
    top: 40px;
    left: -13px;
  }

  @media screen and (max-width: 1024px) {
    &::before {
      margin-top: 56px;
      margin-bottom: 24px;
    }

    &::after {
      top: 24px;
    }
  }

  @media screen and (max-width: 768px) {
    &::before {
      height: 1px;
      margin-top: 48px;
      margin-bottom: 20px;
    }

    &::after {
      top: 20px;
    }
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;

  svg {
    transition: 0.3s ease-out;
  }

  @media screen and (min-width: 1024px) {
    &:hover svg {
      scale: 0.8;
    }
  }

  @media screen and (max-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;
