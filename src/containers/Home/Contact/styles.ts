import styled from "styled-components";

export const ContactContainer = styled.section`
  margin-top: var(--gap);
  margin-bottom: var(--gap);

  > :nth-child(2) {
    margin-top: 40px;
    display: grid;
    grid-template-columns: minmax(240px, 640px) minmax(400px, 640px);
    justify-content: space-between;
    gap: 40px;
  }

  > :nth-child(2) > div {
    width: 100%;
    aspect-ratio: 7 / 5;
    position: relative;

    > img {
      object-fit: cover;
    }

    > :last-child {
      position: absolute;
      top: 31%;
      left: 16%;

      transition: 0.1s ease-out;
    }
  }

  @media screen and (min-width: 1080px) {
    > :nth-child(2) > div > :last-child:hover {
      scale: 1.05;
    }
  }

  @media screen and (max-width: 1080px) {
    > :nth-child(2) {
      grid-template-columns: 1fr;
      gap: 80px;
    }
  }

  @media screen and (max-width: 640px) {
    > :nth-child(2) > div > :last-child {
      scale: 0.8;
      top: 28%;
    }
  }

  @media screen and (max-width: 480px) {
    > :nth-child(2) > div > :last-child {
      scale: 0.6;
      top: 25%;
    }
  }
`;
