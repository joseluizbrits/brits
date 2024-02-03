"use client";

import ImageBlog from "../ImageBlog";
import img from "../../../public/rick.jpg";
import { Wrapper } from "./styles";
import { Paragraph } from "@/styles/Blog/Paragraph";
import { lato } from "@/lib/fonts";

function Intro() {
  return (
    <Wrapper>
      <ImageBlog
        src={img}
        alt="Rick do seriado Rick and Morty com a mão no queixo em um semblante pensativo"
      />
      <Paragraph className={lato.className}>
        Tem horas que eu me pego pensando se ainda serei um profissional
        relevante no futuro, se o que faço hoje ainda será valorizado daqui a
        alguns anos pela sociedade — e quando digo “alguns anos” me refiro a não
        mais do que 5 anos somente —, pois a cada dia que passa esse mundo
        caótico fica cada vez mais acelerado.
      </Paragraph>
    </Wrapper>
  );
}

export default Intro;
