import styled from "styled-components";

export const AboutContainer = styled.section`
  margin-top: 20px;
  border-radius: 35px;
  aspect-ratio: 15 / 9;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  > :nth-child(1) {
    padding: 160px 80px;
    background-color: var(--bg-3);
    border-radius: 35px;
    border: 1px solid var(--secondary-20);
  }

  h2 {
    font-size: 3rem;
    color: var(--white);
    margin-bottom: 20px;
  }

  p {
    font-size: 1.25rem;
  }

  p + p {
    margin-top: 40px;
  }

  > :nth-child(2) {
    border-radius: 35px;
    position: relative;

    img {
      border-radius: 35px;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 1080px) {
    grid-template-columns: 1fr;

    > :nth-child(1) {
      padding: 80px 40px;
    }

    > :nth-child(2) {
      order: -1;
      aspect-ratio: 4 / 5;
    }

    p {
      font-size: 1.15rem;
    }
  }

  @media screen and (max-width: 640px) {
    > :nth-child(1) {
      padding: 64px 28px;
      padding-bottom: 80px;
    }

    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.15rem;
    }
  }
`;
