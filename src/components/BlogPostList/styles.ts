import styled from "styled-components";

export const Content = styled.li`
  padding: 40px;
  border-radius: 50px;
  border: 1px solid var(--tertiaryClear);

  display: grid;
  grid-template-columns: 1.25fr 1fr;
  gap: 40px;

  h2 {
    font-size: clamp(2rem, 2.5vw, 2.5rem);
    line-height: 1.25em;
    color: var(--white);
  }

  p {
    font-size: clamp(1.15rem, 1.5vw, 1.5rem);
    line-height: 1.25;
    color: var(--primaryLight);
    padding-top: 16px;
    max-width: 26ch;
  }

  a {
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--primaryDark);

    padding: 20px 32px;
    border-radius: 50px;
    background-color: var(--secondary);
    box-shadow: -1px 1px 3px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
  }

  a svg {
    scale: 0.9;
  }

  a,
  a svg path {
    transition: 0.3s ease-out;
  }

  @media screen and (min-width: 1024px) {
    a:hover {
      background-color: var(--primaryDark);
      color: var(--secondary);
    }

    a:hover svg path {
      stroke: var(--secondary);
    }
  }

  @media screen and (max-width: 768px) {
    a {
      font-size: 0.875rem;
      padding: 16px 24px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16/9;

  position: relative;

  img {
    object-fit: cover;
    border-radius: 50px;
  }
`;

export const TextWrapper = styled.div`
  position: relative;

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    bottom: 0;
  }
`;

export const PostDate = styled.div`
  color: var(--primaryDark);

  display: flex;
  align-items: center;
  gap: 8px;
`;
