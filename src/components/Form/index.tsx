import { Container, Loading } from "./styles";
import { useEffect, useState } from "react";

import Field from "../Field";
import useForm from "@/hooks/useForm";

import { ubuntu } from "@/lib/fonts";
import { sendEmail } from "@/utils/sendEmail";

function Form() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const name = useForm(false);
  const email = useForm("email");
  const message = useForm("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    sendEmail({
      name,
      email,
      message,
      setLoading,
      setSuccess,
      setError,
    });
  }

  useEffect(() => {
    if (name.error || email.error || message.error) setSuccess(false);

    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 10000);
    }

    if (error) {
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }, [success, error, name.error, email.error, message.error]);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="fields">
          <Field label="Nome: " type="text" name="name" {...name} />
          <Field label="Email: " type="email" name="email" {...email} />
          <Field
            label="Menssagem: "
            type="textarea"
            name="message"
            {...message}
          />

          {!success ? (
            <button aria-label="enviar" disabled={loading}>
              {loading ? (
                <Loading />
              ) : (
                <span className={ubuntu.className}>Mandar</span>
              )}
            </button>
          ) : (
            <span className="success">Foi! 👍</span>
          )}
          {error && (
            <span className="failed">
              Ops! Ocorreu um erro ao enviar a mensagem!
            </span>
          )}
        </div>
      </form>
    </Container>
  );
}

export default Form;
