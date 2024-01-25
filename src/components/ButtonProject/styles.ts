import styled from "styled-components";

export const ButtonWrapper = styled.a`
  width: clamp(160px, 15vw, 220px);
  height: clamp(160px, 15vw, 220px);
  border-radius: 50%;
  background: var(--gradientOne);

  outline: 1px solid var(--tertiaryClear);
  outline-offset: -20px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 50%;
  z-index: 1;

  span {
    font-size: clamp(1rem, 1.5vw, 1.5rem);
    letter-spacing: 0.05rem;
    line-height: 1.25em;
    max-width: 5em;
    color: var(--primaryLight);
  }

  svg {
    scale: 0.6;
    opacity: 0.3;

    position: absolute;
    top: 52%;
    left: 64%;
  }
`;
