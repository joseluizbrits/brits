"use client";

import { CallMeWrapper } from "./styles";
import { ubuntu } from "@/lib/fonts";
import Talk from "@/icons/Talk";
import Link from "next/link";

function CallMe() {
  return (
    <CallMeWrapper>
      <Talk />
      <p className={ubuntu.className}>
        E aí, o que achou do assunto? Me manda uma DM lá no{" "}
        <Link href="https://www.instagram.com/joseluizbrits/?igsh=MTIxZTV4YjI2MmN0bQ%3D%3D&utm_source=qr">
          Instagram
        </Link>{" "}
        e me conta qual é a sua opinião :)
      </p>
    </CallMeWrapper>
  );
}

export default CallMe;
