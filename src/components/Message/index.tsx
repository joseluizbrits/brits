import { Container } from "./styles";
import Points from "../Points";
import WhatsApp from "@/icons/WhatsApp";

function Message() {
  return (
    <Container>
      <a href="#">
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
