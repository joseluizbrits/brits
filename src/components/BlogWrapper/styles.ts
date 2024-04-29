import styled from "styled-components";

export const BlogContent = styled.article`
  padding: 40px 400px 120px 400px;

  @media screen and (max-width: 1440px) {
    padding: 40px 240px 120px 240px;
  }

  @media screen and (max-width: 1024px) {
    padding: 40px 160px 120px 160px;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 40px 120px 40px;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 20px 120px 20px;
  }
`;

export const ProgressBar = styled.div`
  height: 10px;
  background-color: var(--secondary);

  position: sticky;
  top: 0;
  z-index: 100;
`;
