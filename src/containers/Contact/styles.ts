import styled from "styled-components";

export const ContactContainer = styled.section`
  margin-top: var(--gap);
  margin-bottom: var(--gap);

  > :nth-child(2) {
    margin-top: 40px;
    display: grid;
    grid-template-columns: minmax(auto, 640px) minmax(400px, 640px);
    justify-content: space-between;
    gap: 20px;
  }

  > :nth-child(2) > div {
    max-width: 640px;
    position: relative;

    > img {
      object-fit: cover;
    }

    :last-child {
      position: absolute;
      top: 31%;
      left: 16%;

      transition: 0.1s ease-out;
    }

    :last-child:hover {
      scale: 1.05;
    }
  }
`;
