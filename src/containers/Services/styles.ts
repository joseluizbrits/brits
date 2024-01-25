import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 10.42% 0;

  h2 {
    font-weight: 400;
    font-size: clamp(2rem, 5vw, 7rem);
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

  &#project-2 p,
  &#project-4 p {
    text-align: end;
  }

  p {
    font-size: clamp(2rem, 5vw, 7rem);
    line-height: 1.25em;
    height: max-content;
    color: var(--primaryDark);
    padding: 20vh 0;

    position: sticky;
    top: 0;
  }

  strong {
    font-weight: normal;
    color: var(--primaryLight);
  }

  @media screen and (max-width: 1024px) {
    &#project-1,
    &#project-3 {
      padding-left: 20px;
    }

    &#project-2,
    &#project-4 {
      padding-right: 20px;
    }

    &#project-4 {
      /* justify-content: initial; */
      gap: 40px;
    }

    p {
      font-size: clamp(2rem, 4vw, 7rem);
    }
  }
`;

export const Text = styled.div`
  position: relative;

  &#text-1 > a,
  &#text-3 > a {
    transform: translateX(45vw);
  }

  &#text-2 > a,
  &#text-4 > a {
    transform: translateX(-12vw);
  }

  @media screen and (max-width: 1024px) {
    &#text-1 > a,
    &#text-3 > a {
      transform: translateX(23vw);
    }

    &#text-2 > a {
      transform: translateX(-8vw);
    }

    &#text-4 > a {
      transform: translateX(-16vw);
    }
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

  @media screen and (max-width: 1024px) {
    width: 80vw;

    &#img-4 {
      width: 40vw;
    }
  }
`;
