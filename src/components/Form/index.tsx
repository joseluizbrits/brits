import { useEffect, useState } from "react";
import { ubuntu } from "@/lib/fonts";

import { FormWrapper, Loading } from "./styles";
import FormField from "../FormField";
import useForm from "@/hooks/useForm";
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
    <FormWrapper onSubmit={handleSubmit}>
      <div className="fields">
        <FormField label="Seu nome" type="text" name="name" {...name} />
        <FormField label="Seu email" type="email" name="email" {...email} />
        <FormField
          label="Sua mensagem"
          type="textarea"
          name="message"
          {...message}
        />

        {!success ? (
          <button aria-label="botão enviar" disabled={loading}>
            {loading ? (
              <Loading />
            ) : (
              <span className={ubuntu.className}>Mandar</span>
            )}
          </button>
        ) : (
          <span className="success">Mensagem enviada com sucesso!</span>
        )}
        {error && (
          <span className="failed">
            Oops! Ocorreu algum erro ao enviar a mensagem
          </span>
        )}
      </div>
    </FormWrapper>
  );
}

export default Form;
