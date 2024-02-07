"use client";

import Talk from "@/icons/Talk";
import { Wrapper } from "./styles";

function CallMe() {
  return (
    <Wrapper>
      <Talk />
      <p>
        E aí, o que achou do assunto? Me manda uma DM lá no{" "}
        <a href="https://www.instagram.com/joseluizbrits/?igsh=MTIxZTV4YjI2MmN0bQ%3D%3D&utm_source=qr">
          Instagram
        </a>{" "}
        e me conta qual é a sua opnião :)
      </p>
    </Wrapper>
  );
}

export default CallMe;
