import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 200px 0;

  h2 {
    font-weight: 400;
    font-size: 4rem;
    color: var(--white);
  }

  em {
    font-style: normal;

    background-image: var(--gradientThree);
    background-clip: text;

    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 200px;

  &#project-1,
  &#project-3 {
    padding-left: 40px;

    img {
      border-radius: 50px 0 0 50px;
    }

    p {
      max-width: 17ch;
    }
  }

  &#project-2,
  &#project-4 {
    padding-right: 40px;
    flex-direction: row-reverse;

    img {
      border-radius: 0 50px 50px 0;
    }

    p {
      max-width: 16ch;
    }
  }

  &#project-4 {
    justify-content: initial;
    gap: 80px;
  }

  &#project-2 p {
    text-align: end;
  }

  p {
    font-size: 5rem;
    line-height: 1.25em;
    height: max-content;
    color: var(--primaryDark);
    padding: 120px 0;

    position: sticky;
    top: 0;
  }

  strong {
    font-weight: normal;
    color: var(--primaryLight);
  }
`;

export const Text = styled.div`
  position: relative;

  > div {
    position: sticky;
    top: 65%;
    z-index: 1;
  }

  &#text-1 > div,
  &#text-3 > div {
    transform: translateX(45vw);
  }

  &#text-2 > div,
  &#text-4 > div {
    transform: translateX(-12vw);
  }
`;

export const ImageWrapper = styled.div`
  width: 45vw;
  height: 1500px;

  position: relative;

  &#img-3 {
    height: 1092px;
  }

  &#img-4 {
    width: 25vw;
    margin-left: 200px;
  }

  img {
    object-fit: cover;
    object-position: top center;
  }

  &#img-3 img {
    object-position: 10% 0%;
  }

  &#img-4 img {
    border-radius: 50px;
  }
`;
