import styled from "styled-components";
import check from "../../../public/check.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--secondary);

  overflow-y: scroll;

  display: grid;

  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  grid-area: 1/1;

  height: fit-content;
  background-color: var(--primaryDark);
  padding: 64px;
  margin: 120px;
  border-radius: 50px;

  span {
    font-size: 1.5rem;
    color: var(--primaryLight);
  }

  span::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    margin-top: 40px;
    border-radius: 2px;
    background-color: var(--primaryLightShadow);
  }

  p {
    font-size: 5rem;
    color: var(--white);
    padding-top: 40px;
    padding-bottom: 48px;
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
    font-size: 1.25rem;
    color: var(--white);
    padding-left: 16px;
    cursor: pointer;
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
    font-size: 6rem;
    padding: 0;

    background-image: var(--gradientTwo);
    background-clip: text;

    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

export const Observation = styled.span`
  display: flex;
  flex-direction: column-reverse;

  position: relative;

  &.obs {
    font-size: 1.25rem;
    line-height: 1.5em;
  }

  &::before {
    content: "*";
    display: block;
    width: inherit;
    height: inherit;
    opacity: 0.4;

    position: absolute;
    top: 74px;
    left: -12px;
  }

  &::after {
    margin-bottom: 40px;
  }
`;
