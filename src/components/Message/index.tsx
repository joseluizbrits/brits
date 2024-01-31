import { Container } from "./styles";
import Points from "../Points";
import WhatsApp from "@/icons/WhatsApp";
import Animation from "./animation";
import { useRef } from "react";

function Message() {
  const comp = useRef(null);

  Animation(comp);

  return (
    <Container ref={comp}>
      <a
        href="https://api.whatsapp.com/send?phone=5521977201981&text=Ola,%20Brits!%20Eu%20gostaria%20de%20fazer%20um%20or%C3%A7amento"
        id="send-message"
      >
        <span>
          Me mande uma
          <br />
          mensagem
        </span>
        <WhatsApp />
      </a>
      <Points />
    </Container>
  );
}

export default Message;
