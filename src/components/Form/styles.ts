import styled from "styled-components";

export const FormWrapper = styled.form`
  .fields {
    margin-top: 20px;
    display: grid;
    gap: 16px;
  }

  .fields div {
    display: grid;
    gap: 8px;
  }

  input,
  textarea {
    font-size: 1rem;
    color: var(--white);

    width: 100%;
    padding: 12px 24px;
    background-color: var(--black-10);
    border-radius: 10px;
    border: 1px solid var(--secondary-20);

    transition: box-shadow 0.3s ease;
  }

  input::placeholder,
  textarea::placeholder {
    color: var(--gray);
    letter-spacing: 0.05rem;
  }

  input:hover,
  textarea:hover {
    border: 1px solid var(--secondary-40);
  }

  input:focus,
  textarea:focus {
    border: 1px solid var(--secondary);
  }

  textarea {
    height: 240px;
  }

  input.error,
  textarea.error {
    border: 1px solid var(--warning);
  }

  button {
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-align: center;
    text-transform: uppercase;
    color: var(--tertiary);
    background-color: var(--primary-dark);
    padding: 12px 0;
    margin-top: 8px;
    border-radius: 50px;
    transition: 0.1s ease-out;
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  span.error {
    font-size: 0.75rem;
    color: var(--warning);
  }

  span.success {
    font-size: 1rem;
    letter-spacing: 0.05rem;
    color: var(--tertiary-light);
    padding-top: 8px;
  }

  span.failed {
    font-size: 0.875rem;
    color: var(--warning);
    padding-top: 8px;
  }

  @media screen and (min-width: 1080px) {
    input:hover,
    textarea:hover {
      box-shadow: 0 0 5px 5px var(--primary-light-10);
    }

    button:hover {
      color: var(--primary-dark);
      background-color: var(--tertiary);
    }

    button:disabled:hover {
      background-color: var(--primary-dark);
    }
  }

  @media screen and (max-width: 1280px) {
    border-radius: 25px;
  }

  @media screen and (max-width: 768px) {
    padding: 28px;
  }

  @media screen and (max-width: 640px) {
    &::after {
      display: none;
    }

    input,
    textarea {
      padding: 10px 20px;
      border: 1px solid transparent;
    }

    input:focus,
    textarea:focus {
      border: 1px solid var(--secondary-light);
    }

    input.error,
    textarea.error {
      border: 1px solid var(--warning);
    }

    button {
      padding: 10px 0;
      margin-top: 8px;
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
    border: 6px solid var(--white);
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
