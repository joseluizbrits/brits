import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding-bottom: 200px;
  background-color: var(--blogBody);

  overflow: hidden;
  position: relative;

  h2 {
    padding: 160px 0;
    font-weight: 400;
    font-size: clamp(2.25rem, 5vw, 7rem);

    background-image: var(--gradientOne);
    background-clip: text;

    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;

    margin: 0 auto;
    max-width: 21ch;
  }

  h2 em {
    font-style: normal;
    color: var(--secondary);
    -webkit-text-fill-color: var(--secondary);
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin: 0 auto;
    padding: 0 40px;

    position: relative;
    z-index: 1;
  }

  li {
    display: flex;
    gap: 40px;
    border: 1px solid var(--tertiaryClear);
    border-radius: 50px;
    padding: 24px;
    min-width: 600px;
  }

  li div h3 {
    font-weight: 400;
    font-size: clamp(1.75rem, 2.5vw, 2.5rem);
    color: var(--primaryLight);
  }

  li div p {
    font-size: clamp(1.15rem, 1.25vw, 1.5rem);
    line-height: 1.5em;
    color: var(--blogText);
    max-width: 30ch;
    padding-top: 16px;
  }

  @media screen and (max-width: 992px) {
    li {
      min-width: 520px;
      gap: 20px;
    }

    li svg {
      scale: 0.8;
    }

    li div p {
      padding-top: 12px;
    }
  }

  @media screen and (max-width: 640px) {
    h2 {
      padding: 100px 40px;
    }

    li {
      min-width: fit-content;
      padding: 24px 16px;
      border-radius: 25px;
      gap: 0px;
    }

    li svg {
      scale: 0.6;
    }

    li div p {
      padding-top: 12px;
      padding-right: 24px;
    }
  }

  @media screen and (max-width: 480px) {
    ul {
      padding: 0 20px;
      gap: 20px;
    }

    li svg {
      scale: 0.5;
      margin-left: -20px;
      margin-top: -20px;
      width: 140px;
    }

    li div p {
      padding-top: 12px;
    }
  }
`;
