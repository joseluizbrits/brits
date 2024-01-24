import {
  Container,
  Content,
  CardHeader,
  Options,
  Value,
  Observation,
  ButtonShowPrice,
  ButtonBack,
} from "./styles";

import { useState } from "react";
import { ubuntu } from "@/lib/fonts";

import Input from "../Input";
import Back from "@/icons/Back";
import priceSteps from "@/utils/priceSteps";

function Price() {
  const [stepNumber, setStepNumber] = useState(1);
  const [amount, setAmount] = useState(0);

  console.log(amount);

  return (
    <Container>
      {priceSteps.map(({ id, desc, ask, opts }, index) => (
        <Content
          key={id}
          className={id.includes(String(stepNumber)) ? "active" : ""}
        >
          <CardHeader>
            {index > 0 && (
              <ButtonBack
                aria-label="voltar"
                onClick={() => setStepNumber((state) => state - 1)}
              >
                <Back />
                <span className={ubuntu.className}>voltar</span>
              </ButtonBack>
            )}
            <span>
              {index + 1}/{priceSteps.length}
            </span>
          </CardHeader>

          <span className="desc">{desc}</span>
          <p>{ask}</p>

          <Options>
            {opts.map(({ id, name, type, answer, value }) => (
              <li key={id}>
                <Input
                  id={id}
                  name={name}
                  type={type}
                  value={value}
                  setAmount={setAmount}
                  setStepNumber={setStepNumber}
                />
                <label htmlFor={id}>{answer}</label>
              </li>
            ))}
          </Options>

          {opts[index].type === "checkbox" && (
            <ButtonShowPrice
              onClick={() => setStepNumber((state) => state + 1)}
            >
              <span className={ubuntu.className}>Ver preço</span>
            </ButtonShowPrice>
          )}
        </Content>
      ))}

      {stepNumber > priceSteps.length && (
        <Content className="voila">
          <ButtonBack
            aria-label="voltar"
            onClick={() => setStepNumber((state) => state - 1)}
          >
            <Back />
            <span className={ubuntu.className}>voltar</span>
          </ButtonBack>
          <p>VOILA! A pechincha sairia por:</p>

          <Value>
            <p>
              {amount.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </Value>

          <Observation>
            Lembrando que isso é apenas uma estimativa. Se você quiser fazer um
            orçamento mais detalhado, entre em contato comigo que juntos
            descobriremos o valor ideal para o seu projeto,
          </Observation>
        </Content>
      )}
    </Container>
  );
}

export default Price;
