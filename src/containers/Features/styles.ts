import styled from "styled-components";

export const FeaturesContainer = styled.section`
  > :nth-child(2) {
    margin-top: 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    > :nth-child(1) {
      background-color: var(--bg-4);
    }

    > :nth-child(2) {
      background-color: var(--bg-3);
    }

    > :nth-child(3) {
      background-color: var(--bg-1);
    }

    > :nth-child(4) {
      background-color: var(--bg-5);
    }
  }

  > :nth-child(2) > div {
    padding: 40px;
    border-radius: 35px;

    display: flex;
    flex-direction: column;

    div {
      flex: 1;
      align-self: end;
      margin-top: 20px;
      margin-right: 64px;

      display: flex;
      align-items: end;
    }
  }

  h3 {
    font-weight: 900;
    font-size: 2rem;
    line-height: 1em;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: var(--secondary);
    margin-bottom: 16px;
  }
`;
