import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  gap: 40px;
`;

export const Content = styled.li<{ $reverse: boolean }>`
  padding: 40px;
  border-radius: 50px;
  border: 1px solid var(--tertiaryClear);

  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  gap: 40px;

  @media screen and (max-width: 1280px) {
    padding: 24px;
    gap: 24px;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }

  @media screen and (max-width: 640px) {
    border-radius: 25px;
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

  @media screen and (max-width: 1440px) {
    aspect-ratio: 16/10;
  }

  @media screen and (max-width: 992px) {
    aspect-ratio: 16/9;
  }

  @media screen and (max-width: 640px) {
    img {
      border-radius: 25px;
    }
  }
`;

export const TextWrapper = styled.div<{ $reverse: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    font-size: clamp(1.875rem, 2.5vw, 4rem);
    line-height: 1.25em;
    text-align: ${({ $reverse }) => ($reverse ? "end" : "start")};
    color: var(--white);
  }

  p {
    font-size: clamp(1.15rem, 1.5vw, 2rem);
    line-height: 1.25;
    text-align: ${({ $reverse }) => ($reverse ? "end" : "start")};
    align-self: ${({ $reverse }) => ($reverse ? "end" : "start")};
    color: var(--primaryLight);
    padding-top: 16px;
    max-width: 26ch;
  }

  > div {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    justify-content: space-between;
    align-items: center;

    position: absolute;
    bottom: 0;
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

  @media screen and (max-width: 1280px) {
    a {
      font-size: 0.875rem;
      padding: 16px 24px;
    }

    p {
      max-width: 35ch;
    }
  }

  @media screen and (max-width: 992px) {
    > div {
      position: initial;
      margin-top: 24px;
    }
  }

  @media screen and (max-width: 640px) {
    a {
      padding: 12px 20px;
    }
  }
`;

export const PostDate = styled.div<{ $reverse: boolean }>`
  color: var(--primaryDark);

  display: flex;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  align-items: center;
  gap: 8px;
`;
