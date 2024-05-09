import styled from "styled-components";

export const ImageWrapper = styled.div`
  max-width: 780px;
  aspect-ratio: 16/9;
  margin: 0 auto;
  margin-top: 40px;

  position: relative;

  img {
    border-radius: 5px;
    object-fit: cover;
  }
`;
