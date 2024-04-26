import styled from "styled-components";

export const ButtonWrapper = styled.a`
  width: clamp(140px, 15vw, 220px);
  height: clamp(140px, 15vw, 220px);
  border-radius: 50%;
  background: var(--gradient-1);
  background-size: 200% 200%;
  box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.2);

  outline: 1px solid var(--tertiaryClear);
  outline-offset: -1.5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 50%;
  z-index: 1;

  transition: 0.3s ease-out;
  animation: gradientAnimation 2s ease-out infinite;

  span {
    font-size: clamp(0.875rem, 1.5vw, 1.5rem);
    letter-spacing: 0.05rem;
    line-height: 1.25em;
    max-width: 5em;
    color: var(--primary-light);

    transition: 0.3s ease-out;
  }

  svg {
    scale: 0.6;
    opacity: 0.3;

    position: absolute;
    top: 52%;
    left: 64%;

    transition: 0.3s ease-out;
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      outline: 1px solid var(--primary-lightShadow);

      span {
        color: white;
      }

      svg {
        opacity: 0.6;
        scale: 0.7;
        transform: translate(10px, -6px);
      }
    }
  }

  @media screen and (max-width: 768px) {
    outline-offset: -14px;
  }
`;
