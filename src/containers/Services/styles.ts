import styled from "styled-components";

export const ServicesContainer = styled.section`
  margin-top: var(--gap);

  ul {
    margin-top: 80px;
    display: flex;
    gap: 20px;

    > :nth-child(1) {
      background-color: var(--tertiary-light);
    }

    > :nth-child(2) {
      background-color: var(--secondary-light);
    }

    > :nth-child(3) {
      background-color: var(--primary-dark);
    }
  }

  li {
    width: 100%;
    padding: 40px;
    border-radius: 35px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h3 {
    font-size: 2.25rem;
    color: var(--primary-dark);
  }

  span {
    font-size: 1.825rem;
    color: var(--primary-dark-40);
    margin-top: 4px;
    margin-bottom: 20px;

    display: flex;
    place-items: center;
    gap: 6px;
  }

  small {
    font-size: 0.75rem;
  }

  ul > :last-child {
    h3 {
      color: var(--secondary);
    }

    span {
      color: var(--secondary-40);
    }
  }

  a {
    margin-top: 80px;
  }
`;
