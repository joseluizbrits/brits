import styled from "styled-components";

export const CTAContainer = styled.div`
  margin-top: 160px;
  margin-bottom: 200px;
  padding: 64px;
  padding-bottom: 0;
  background-color: var(--bg-7);
  border-radius: 35px;

  display: grid;
  grid-template-columns: 5fr 7fr;

  > :nth-child(1) {
    max-width: 600px;
    aspect-ratio: 6 / 5;
    position: relative;
    mix-blend-mode: lighten;
  }

  > :nth-child(2) {
    margin-top: -40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    margin-top: 12px;
  }

  a {
    margin-top: 40px;
  }
`;
