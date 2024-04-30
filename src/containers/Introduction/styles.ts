import styled from "styled-components";

export const IntroContainer = styled.section`
  padding: 80px;
  background-color: var(--bg-6);
  border-radius: 35px;

  margin-top: 120px;

  display: grid;
  grid-template-columns: 7fr 5fr;

  > :nth-child(1) > :first-child {
    font-size: 1.15rem;
    color: var(--secondary);
  }

  h2 {
    font-weight: 700;
    font-size: clamp(2rem, 3vw, 3rem);
    line-height: 1.15em;
    letter-spacing: -0.02em;
    color: var(--white);
    max-width: 18ch;
    margin-top: 8px;
    margin-bottom: 28px;
  }

  > :nth-child(2) {
    display: grid;
    gap: 40px;
  }

  h3 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.1em;
    letter-spacing: -0.02em;
    color: var(--secondary);
    margin-top: 20px;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 1080px) {
    padding: 56px;
    grid-template-columns: 1fr;
    gap: 80px;

    > :nth-child(2) {
      gap: 48px;
    }
  }

  @media screen and (max-width: 640px) {
    padding: 48px 28px;
    grid-template-columns: 1fr;
  }
`;
