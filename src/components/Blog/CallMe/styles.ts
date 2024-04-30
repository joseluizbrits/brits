import styled from "styled-components";

export const CallMeWrapper = styled.div`
  background: var(--gradient-2);
  padding: 40px;
  border-radius: 5px;

  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;

  p {
    font-size: clamp(1.15rem, 1.5vw, 1.75rem);
    line-height: 1.5em;
    color: var(--gray-light);
  }

  a {
    color: var(--primary-light);
    transition: 0.1s ease-out;
  }

  @media screen and (min-width: 1024px) {
    a:hover {
      color: var(--secondary);
    }
  }

  @media screen and (max-width: 1280px) {
    padding: 24px;
  }
`;
