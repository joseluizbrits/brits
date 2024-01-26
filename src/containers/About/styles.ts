import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 160vh;
  background: var(--primary);

  overflow-x: hidden;

  display: flex;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: clamp(160px, 30vw, 500px);
    height: clamp(80px, 10vw, 160px);
    border-radius: 0 50px 50px 0;
    background-color: var(--tertiary);
    position: absolute;
    top: 24%;
    left: 52%;
  }
`;
