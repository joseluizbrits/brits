import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 160px;
  background-color: var(--primary);

  display: flex;
  justify-content: center;

  form {
    width: 100%;
    padding: 64px;
    margin: 0 120px;
    border-radius: 50px;
    border: 1px solid rgba(181, 118, 245, 0.2);
    background: var(--gradientTwo);
    box-shadow: -1px 1px 6px rgba(0, 0, 0, 0.1);

    position: relative;
  }

  .fields {
    display: grid;
    gap: 40px;
  }

  .fields div {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 40px;
  }

  label {
    font-size: 3rem;
    color: var(--white);
    min-width: 160px;
  }

  input,
  textarea {
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--primaryLightShadow);
    background: var(--gradientOne);

    padding: 20px;
    font-size: 1.25rem;
    color: rgba(65, 247, 236, 0.8);
  }

  input.error,
  textarea.error {
    border: 1px solid var(--warning);
  }

  textarea {
    height: 300px;
  }

  button,
  span.success {
    padding: 20px 32px;
    border-radius: 50px;
    background-color: var(--secondary);

    position: absolute;
    bottom: 64px;
    left: 64px;
  }

  button span,
  span.success {
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    color: var(--primaryDark);
  }

  button {
    transition: 0.3s ease-out;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  span.success {
    text-align: center;
  }

  span.error {
    color: var(--warning);
    margin-top: -20px;

    justify-self: end;
    grid-column: span 2;
  }

  span.failed {
    line-height: 1.25em;
    text-align: end;
    color: var(--warning);
  }

  @media screen and (min-width: 1024px) {
    button:hover {
      background-color: var(--primaryDark);

      span {
        color: var(--secondary);
      }
    }
  }

  @media screen and (max-width: 1440px) {
    form {
      margin: 0 80px;
    }

    .fields,
    .fields div {
      gap: 28px;
    }

    label {
      font-size: 2.5rem;
      min-width: 120px;
    }
  }

  @media screen and (max-width: 1024px) {
    form {
      margin: 0 40px;
    }

    .fields,
    .fields div {
      gap: 20px;
    }

    .fields div {
      grid-template-columns: 1fr;
    }

    label {
      font-size: 2rem;
    }

    button,
    span.success {
      position: initial;
    }

    span.error {
      font-size: 0.875rem;
      margin-top: -8px;

      justify-self: auto;
      grid-column: auto;
    }

    span.failed {
      padding-top: 8px;
      text-align: start;
    }
  }

  @media screen and (max-width: 768px) {
    form {
      padding: 40px;
      margin: 0 20px;
    }

    .fields div {
      gap: 12px;
    }

    label {
      font-size: 1.5rem;
    }

    input,
    textarea {
      padding: 12px;
    }
  }
`;

export const Loading = styled.span`
  color: transparent;
  opacity: 0.8;

  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 6px solid var(--tertiary);
    border-bottom-color: transparent;
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
