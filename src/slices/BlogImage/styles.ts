import styled from "styled-components";

export const ImageWrapper = styled.div`
  max-width: 780px;
  aspect-ratio: 16/9;
  margin: 0 80px;
  margin-top: 40px;

  position: relative;

  img {
    border-radius: 5px;
    object-fit: cover;
  }

  @media screen and (min-width: 1680px) {
    margin: 0 auto;
    margin-top: 40px;
  }

  @media screen and (max-width: 1024px) {
    margin: 0;
    margin-top: 40px;
  }
`;
