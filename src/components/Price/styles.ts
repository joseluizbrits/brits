import styled from "styled-components";
import check from "../../../public/check.svg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--secondary);

  overflow-y: scroll;
  overflow-x: hidden;

  display: grid;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  grid-area: 1/1;

  height: fit-content;
  background-color: var(--primaryDark);
  padding: 64px;
  padding-top: 40px;
  margin: 0 120px;
  border-radius: 50px;

  display: none;

  &.voila,
  &.active {
    display: block;
  }

  .desc {
    font-size: 1.5rem;
    color: var(--primaryLight);
  }

  .desc::after {
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

  animation: sideways 0.3s ease-out forwards;

  @keyframes sideways {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0%);
      opacity: 1;
    }
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
  font-size: 1.25rem;
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
`;
