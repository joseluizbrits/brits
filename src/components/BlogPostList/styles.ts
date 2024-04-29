import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  gap: 40px;

  > :nth-child(even) {
    grid-template-columns: 5fr 7fr;

    > :last-child {
      order: -1;

      h2 {
        text-align: end;
      }

      p {
        text-align: end;
        align-self: end;
      }

      > div {
        flex-direction: row-reverse;
      }
    }
  }

  li {
    padding: 40px;
    background-color: var(--black-10);
    border-radius: 50px;
    border: 1px solid var(--secondary-20);

    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    display: grid;
    grid-template-columns: 7fr 5fr;
    gap: 40px;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 35px;
  aspect-ratio: 16/9;
  cursor: pointer;

  overflow: hidden;
  position: relative;

  img {
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 35px;
    transition: 0.3s ease;
  }

  @media screen and (min-width: 1080px) {
    &:hover img {
      scale: 1.05;
    }
  }

  @media screen and (max-width: 1440px) {
    aspect-ratio: 16/10;
  }

  @media screen and (max-width: 992px) {
    aspect-ratio: 16/9;
  }

  @media screen and (max-width: 640px) {
    border-radius: 15px;

    img {
      border-radius: 15px;
    }
  }
`;

export const TextWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    font-size: clamp(1.875rem, 2.5vw, 4rem);
    line-height: 1.15em;
    color: var(--white);
    cursor: pointer;

    transition: 0.3s ease;
  }

  p {
    margin-top: 16px;
    max-width: 26ch;
    cursor: pointer;
  }

  > div {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    bottom: 0;
  }

  @media screen and (min-width: 1080px) {
    h2:hover {
      color: var(--gray);
    }
  }

  @media screen and (max-width: 1280px) {
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
`;

export const PostDate = styled.div`
  color: var(--primary);

  display: flex;
  align-items: center;
  gap: 8px;
`;
