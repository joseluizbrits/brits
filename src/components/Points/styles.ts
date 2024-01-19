import styled from "styled-components";

export const Point = styled.div`
  background-color: var(--tertiary);
  border-radius: 8px;
  position: absolute;

  &#point-1,
  &#point-4,
  &#point-6 {
    width: 20px;
    height: 20px;
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
    left: 21%;
  }

  &#point-2 {
    top: 21%;
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
    top: 75%;
    left: 57%;
  }

  &#point-6 {
    bottom: -10%;
    right: 20%;
    z-index: 1;
  }

  &#point-7 {
    bottom: -30%;
    right: 5%;
    z-index: 1;
  }
`;
