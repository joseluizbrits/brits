import styled from "styled-components";

export const AboutContainer = styled.section`
  margin-top: 20px;
  border-radius: 35px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  > :nth-child(1) {
    background-color: var(--bg-3);
    padding: 160px 80px;
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
    position: relative;
    aspect-ratio: 4/5;

    img {
      object-fit: cover;
      border-radius: 35px;
    }
  }
`;
