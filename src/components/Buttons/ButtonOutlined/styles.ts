import styled from "styled-components";

export const OutlinedWrapper = styled.div`
  a {
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--secondary);

    padding: 12px 24px;
    border-radius: 50px;
    background-color: none;
    border: 1px solid var(--secondary);

    display: flex;
    align-items: center;
    gap: 8px;
  }

  a,
  svg {
    transition: ease-out 0.1s;
  }

  @media screen and (min-width: 1024px) {
    a:hover {
      box-shadow: 0 0 10px 1px var(--secondary-20);

      svg {
        transform: translateX(4px);
      }
    }
  }
`;
