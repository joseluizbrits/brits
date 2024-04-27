import styled from "styled-components";

export const Paragraph = styled.p<{
  $color: "gray" | "gray-light" | "primary-light" | "primary-dark";
  $strong?: "primary-light" | "tertiary";
}>`
  font-size: 1.15rem;
  line-height: 1.25em;
  color: ${({ $color }) => `var(--${$color})`};

  strong {
    color: ${({ $strong }) => `var(--${$strong})`};
  }
`;
