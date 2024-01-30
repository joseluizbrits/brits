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
      <a href="#" id="send-message">
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
