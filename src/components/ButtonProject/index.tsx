import Arrow from "@/icons/Arrow";
import { ButtonWrapper } from "./styles";
import { montserrat } from "@/lib/fonts";

function ButtonProject({ href }: { href: string }) {
  return (
    <ButtonWrapper>
      <a href={href} target="_blank">
        <span className={montserrat.className}>Conhecer projeto</span>
        <Arrow />
      </a>
    </ButtonWrapper>
  );
}

export default ButtonProject;
