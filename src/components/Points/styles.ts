import styled from "styled-components";

export const Point = styled.div`
  background-color: var(--tertiary);
  border-radius: 8px;
  position: absolute;

  &#point-1,
  &#point-4,
  &#point-6 {
    width: clamp(8px, 2vw, 20px);
    height: clamp(8px, 2vw, 20px);
  }

  &#point-2,
  &#point-5 {
    width: 28px;
    height: 28px;
  }

  &#point-3,
  &#point-7 {
    width: 40px;
    height: 40px;
  }

  &#point-1 {
    top: 7%;
  }

  &#point-2 {
    top: 16%;
    left: 46%;
  }

  &#point-3 {
    top: 10%;
    right: 12%;
  }

  &#point-4 {
    top: 42%;
    right: 10%;
  }

  &#point-5 {
    top: 67%;
    left: 45%;
  }

  &#point-6 {
    bottom: 12%;
    right: 34%;
  }

  &#point-7 {
    bottom: 0%;
    right: 5%;
  }

  @media screen and (max-width: 1024px) {
    border-radius: 50%;

    &#point-1,
    &#point-4,
    &#point-6 {
      width: 12px;
      height: 12px;
    }

    &#point-2,
    &#point-5 {
      width: 20px;
      height: 20px;
    }

    &#point-3,
    &#point-7 {
      width: 32px;
      height: 32px;
    }
  }

  @media screen and (max-width: 480px) {
    &#point-1,
    &#point-4,
    &#point-6 {
      width: 8px;
      height: 8px;
    }

    &#point-2,
    &#point-5 {
      width: 12px;
      height: 12px;
    }

    &#point-3,
    &#point-7 {
      width: 24px;
      height: 24px;
    }
  }
`;
