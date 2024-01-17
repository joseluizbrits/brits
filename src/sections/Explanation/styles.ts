import styled from "styled-components";
import note from "../../../public/note.jpg";

export const Container = styled.section`
  background: var(--gradientThree);
  height: 100vh;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 34.9%;
    height: 100vh;
    background: url(${note.src}) 40% center no-repeat;
    background-size: cover;
    opacity: 0.4;

    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: "";
    display: block;
    background: var(--gradientThree);

    width: 35%;
    height: 100vh;
    clip-path: polygon(100% 0, 100% 100%, 0 100%);

    position: absolute;
    top: 0;
    right: 65%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 48px;

  display: grid;
  grid-template-columns: 1fr;

  position: relative;
  z-index: 1;

  > :first-child {
    justify-self: end;
    height: fit-content;

    display: grid;
    gap: 12px;
  }

  > :last-child {
    align-self: end;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h2 {
    font-weight: 400;
    font-size: 5rem;
    line-height: 1.25em;
    text-align: end;
    color: var(--white);
    max-width: 20ch;
  }

  small {
    font-size: 1.25rem;
    letter-spacing: 0.05rem;
    text-transform: lowercase;
    color: var(--primaryLight);
    margin-bottom: -40px;
  }

  ul {
    display: flex;
    gap: 40px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  li span {
    font-size: 0.875rem;
    letter-spacing: 0.05rem;
    text-transform: lowercase;
    color: var(--primaryLight);
  }
`;
