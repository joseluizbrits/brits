import { Dispatch, SetStateAction } from "react";

interface IInput {
  id: string;
  name: string;
  type: string;
  value: number;
  setAmount: Dispatch<SetStateAction<number[]>>;
  setStepNumber: Dispatch<SetStateAction<number>>;
  setAnimationDirection: Dispatch<SetStateAction<string>>;
}

function Input({
  id,
  name,
  type,
  value,
  setAmount,
  setStepNumber,
  setAnimationDirection,
}: IInput) {
  const handleChange = (target: EventTarget & HTMLInputElement) => {
    if (target.checked) {
      setAmount((amount) =>
        type === "checkbox" ? [...amount, value] : [value, ...amount]
      );
    } else {
      setAmount((amount) => amount.filter((item) => item !== value));
    }

    if (type === "checkbox") return;

    setTimeout(() => {
      setStepNumber((step) => step + 1);
      setAnimationDirection("right");
      target.checked = false;
    }, 200);
  };

  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={({ currentTarget }) => handleChange(currentTarget)}
    />
  );
}

export default Input;
