"use client";

import { Popup, ButtonClose } from "./styles";
import Link from "next/link";
import XClose from "@/icons/XClose";
import Image from "next/image";
import { useEffect, useState } from "react";

function BlogPopup() {
  const [active, setActive] = useState(0);

  const watch = () => {
    const { scrollTop, scrollHeight } = document.documentElement;

    if (scrollHeight - scrollTop < scrollHeight / 2) {
      setActive(1);
    }
  };

  useEffect(() => {
    window.addEventListener("scrollend", watch);
    window.addEventListener("touchend", watch);

    if (active > 0) {
      window.removeEventListener("scrollend", watch);
      window.removeEventListener("touchend", watch);
    }

    return () => {
      window.removeEventListener("scrollend", watch);
      window.removeEventListener("touchend", watch);
    };
  }, [active]);

  return (
    <Popup className={active === 1 ? "active" : ""}>
      <div>
        <span>
          Precisando de <em>um site?</em>
        </span>
        <span>Inicie agora sua presença online comigo</span>
        <Link href="https://api.whatsapp.com/send?phone=5521977201981&text=Ola,%20Brits!%20Eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento">
          Entrar em contato
        </Link>
      </div>

      <ButtonClose aria-label="fechar popup" onClick={() => setActive(2)}>
        <XClose />
      </ButtonClose>

      <Image
        src="/woman.png"
        width={252}
        height={296}
        alt="Silhueta de uma mulher segurando uma lampada e com alguns pontos de luz pelo corpo"
      />
    </Popup>
  );
}

export default BlogPopup;
