import { Dispatch, SetStateAction } from "react";

interface IInput {
  id: string;
  name: string;
  type: string;
  value: number;
  setAmount: Dispatch<SetStateAction<number>>;
  setStepNumber: Dispatch<SetStateAction<number>>;
}

function Input({ id, name, type, value, setAmount, setStepNumber }: IInput) {
  const handleChange = (target: EventTarget) => {
    const input = target as HTMLInputElement;

    if (input.checked) {
      setAmount((state) => state + value);
    } else {
      setAmount((state) => state - value);
    }

    if (type === "checkbox") return;

    setTimeout(() => {
      setStepNumber((state) => state + 1);
    }, 200);
  };

  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={({ target }) => handleChange(target)}
    />
  );
}

export default Input;
