import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 200px 0;
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

  span.error {
    color: var(--warning);
    margin-top: -24px;

    justify-self: end;
    grid-column: span 2;
  }
`;