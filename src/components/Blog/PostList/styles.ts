import styled from "styled-components";

export const PostListContainer = styled.ul`
  display: grid;
  gap: 40px;

  li {
    padding: 40px;
    background-color: var(--black-10);
    border: 1px solid var(--secondary-20);
    border-radius: 35px;

    display: grid;
    grid-template-columns: 7fr 5fr;
    gap: 40px;
  }

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

  @media screen and (max-width: 1080px) {
    li,
    > :nth-child(even) {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    > :nth-child(even) > :last-child {
      order: 2;

      h2 {
        text-align: start;
      }

      p {
        text-align: start;
        align-self: start;
      }

      > div {
        flex-direction: row;
      }
    }
  }

  @media screen and (max-width: 480px) {
    li {
      padding: 24px;
    }
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
    transition: 0.3s ease;
  }

  @media screen and (min-width: 1080px) {
    &:hover img {
      scale: 1.05;
    }
  }

  @media screen and (max-width: 1080px) {
    max-height: 400px;
    border-radius: 15px;
  }
`;

export const TextWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    font-size: clamp(1.75rem, 2.5vw, 4rem);
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

  @media screen and (max-width: 1080px) {
    margin-top: 0;

    > div {
      position: initial;
      margin-top: 64px;
    }
  }
`;

export const PostDate = styled.time`
  color: var(--primary);

  display: flex;
  align-items: center;
  gap: 8px;
`;
