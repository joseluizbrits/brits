import { Container } from "./styles";
import { montserrat } from "@/lib/fonts";
import Shorts from "@/icons/Shorts";

function Logo({ href }: { href: string }) {
  return (
    <Container href={href}>
      <span className={montserrat.className}>BRITS</span>
      <Shorts />
    </Container>
  );
}

export default Logo;
