import {
  Container,
  Content,
  CardHeader,
  Options,
  Value,
  Observation,
  ButtonShowPrice,
  ButtonBack,
  ButtonClose,
} from "./styles";

import { Dispatch, SetStateAction, useState } from "react";
import { ubuntu } from "@/lib/fonts";

import Input from "../Input";
import Back from "@/icons/Back";

import priceSteps from "@/utils/priceSteps";
import { toCurrencyBRL } from "@/utils/toCurrencyBRL";
import Close from "@/icons/Close";

interface IPrice {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

function Price({ active, setActive }: IPrice) {
  const [stepNumber, setStepNumber] = useState(1);
  const [amount, setAmount] = useState<number[]>([]);
  const [animetionDirection, setAnimetionDirection] = useState("right");

  console.log(amount);

  const handleActive = (target: EventTarget) => {
    const element = target as HTMLElement;

    if (element.classList.contains("close")) {
      document.documentElement.style.overflow = "auto";
      setActive(false);
    }
    return;
  };

  const handleBack = (target: EventTarget & HTMLButtonElement) => {
    if (target.id) setAmount((amount) => amount.slice(1));
    setStepNumber((step) => step - 1);
    setAnimetionDirection("left");
  };

  const handlePrice = () => {
    setStepNumber((step) => step + 1);
    setAnimetionDirection("right");
  };

  return (
    <Container
      className={active ? "close active" : "close"}
      onClick={({ target }) => handleActive(target)}
    >
      {priceSteps.map(({ id, desc, ask, opts }, index) => (
        <Content
          key={id}
          className={id.includes(String(stepNumber)) ? "active" : ""}
          $animetionDirection={animetionDirection}
        >
          <CardHeader>
            {index > 0 && (
              <ButtonBack
                aria-label="voltar"
                id="by-step"
                onClick={({ currentTarget }) => handleBack(currentTarget)}
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
                  setAnimationDirection={setAnimetionDirection}
                />
                <label htmlFor={id}>{answer}</label>
              </li>
            ))}
          </Options>

          {opts[index].type === "checkbox" && (
            <ButtonShowPrice onClick={handlePrice}>
              <span className={ubuntu.className}>Ver preço</span>
            </ButtonShowPrice>
          )}
        </Content>
      ))}

      {stepNumber > priceSteps.length && (
        <Content className="voila" $animetionDirection={animetionDirection}>
          <ButtonBack
            aria-label="voltar"
            onClick={({ currentTarget }) => handleBack(currentTarget)}
          >
            <Back />
            <span className={ubuntu.className}>voltar</span>
          </ButtonBack>
          <p>VOILA! A pechincha sairia por:</p>

          <Value>
            {
              <p>
                {toCurrencyBRL(
                  Math.ceil(amount.reduce((acc, value) => acc + value, 0))
                )}
              </p>
            }
          </Value>

          <Observation>
            Lembrando que isso é apenas uma estimativa. Se você quiser fazer um
            orçamento mais detalhado, entre em contato comigo que juntos
            descobriremos o valor ideal para o seu projeto,
          </Observation>
        </Content>
      )}
      <ButtonClose
        aria-label="fechar"
        className="close"
        onClick={({ currentTarget }) => handleActive(currentTarget)}
      >
        <Close />
      </ButtonClose>
    </Container>
  );
}

export default Price;
