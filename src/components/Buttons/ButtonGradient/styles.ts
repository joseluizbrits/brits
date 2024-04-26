import styled from "styled-components";

export const ButttonGradientWrapper = styled.div`
  a {
    display: block;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--tertiary);
    background: var(--primary-gradient);
    border-radius: 10px;
    padding: 16px 80px;
    width: max-content;

    transition: 0.1s ease-out;
  }

  @media screen and (min-width: 1080px) {
    a:hover {
      filter: brightness(110%);
      -webkit-filter: brightness(110%);
    }
  }
`;
