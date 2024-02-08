"use client";

import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: var(--blogBody);

  position: relative;

  img {
    object-fit: cover;
  }
`;

function GalaxiesImage({ position }: { position: "top" | "bottom" }) {
  return (
    <Wrapper>
      <Image
        fill
        src="/galaxies.png"
        alt="Imagem do universo com algumas estrelas e galaxias à vista"
        style={{ rotate: position === "bottom" ? "180deg" : "0deg" }}
        priority
      />
    </Wrapper>
  );
}

export default GalaxiesImage;
