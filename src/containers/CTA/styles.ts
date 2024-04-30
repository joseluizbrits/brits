import styled from "styled-components";

export const CTAContainer = styled.div`
  margin-top: 160px;
  margin-bottom: 200px;
  padding: 64px;
  padding-bottom: 0;
  background-color: var(--bg-7);
  border-radius: 35px;

  display: grid;
  grid-template-columns: 5fr 7fr;

  > :nth-child(1) {
    aspect-ratio: 6 / 5;
    position: relative;
    mix-blend-mode: lighten;
  }

  > :nth-child(2) {
    margin-top: -40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    margin-top: 12px;
  }

  a {
    margin-top: 40px;
  }

  @media screen and (max-width: 1280px) {
    h2 {
      font-size: 2.25rem;
    }
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    padding: 40px;

    > :nth-child(1) {
      width: 400px;
      justify-self: center;
    }

    > :nth-child(2) {
      margin-top: 20px;
    }

    h2 {
      font-size: 2.25rem;
      text-align: center;
    }

    a {
      width: 100%;
    }
  }

  @media screen and (max-width: 640px) {
    padding: 28px;
    padding-bottom: 32px;

    > :nth-child(1) {
      width: 240px;
    }

    h2 {
      font-size: 2rem !important;
    }

    p {
      display: grid;
      justify-content: center;
      gap: 8px;
    }
  }
`;
