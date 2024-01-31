import { ButtonWrapper } from "./styles";
import { montserrat } from "@/lib/fonts";
import Arrow from "@/icons/Arrow";

function ButtonProject({ href, id }: { href: string; id: string }) {
  return (
    <ButtonWrapper id={id} href={href} target="_blank">
      <span className={montserrat.className}>Conhecer projeto</span>
      <Arrow />
    </ButtonWrapper>
  );
}

export default ButtonProject;
