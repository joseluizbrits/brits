import { ButtonWrapper } from "./styles";
import { montserrat, ubuntu } from "@/lib/fonts";
import Arrow from "@/icons/Arrow";

function ButtonProject({ href }: { href: string }) {
  return (
    <ButtonWrapper id="see-project" href={href} target="_blank">
      <span className={montserrat.className}>Conhecer projeto</span>
      <Arrow />
    </ButtonWrapper>
  );
}

export default ButtonProject;
