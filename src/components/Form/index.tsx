import { Container } from "./styles";
import { useEffect, useState } from "react";

import useForm from "@/hooks/useForm";
import Field from "../Field";

import emailjs from "@emailjs/browser";

function Form() {
  const [loading, setLoading] = useState<"" | "loading">("");
  const [success, setSuccess] = useState(false);
  const name = useForm(false);
  const email = useForm("email");
  const message = useForm("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading("loading");

    if (email.validate() && message.validate()) {
      const templateParams = {
        from_name: name.value,
        email: email.value,
        message: message.value,
      };

      emailjs
        .send(
          "service_ovc51pi",
          "template_ra9q7ua",
          templateParams,
          "s_YA3z6mo4qOe0thA"
        )
        .then(
          () => {
            setLoading("");
            setSuccess(true);
            name.setValue("");
            email.setValue("");
            message.setValue("");
          },
          (err: Error) => {
            console.error("Erro ao enviar o menssagem: " + err);
            setLoading("");
            name.setValue("");
            email.setValue("");
            message.setValue("");
          }
        );
    } else {
      setLoading("");
    }
  }

  useEffect(() => {
    if (name.error || email.error || message.error) setSuccess(false);

    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 10000);
    }
  }, [success, name.error, email.error, message.error]);

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
            <button className={loading}>
              <span>Mandar</span>
            </button>
          ) : (
            <span className="success">Foi! 👍</span>
          )}
        </div>
      </form>
    </Container>
  );
}

export default Form;
