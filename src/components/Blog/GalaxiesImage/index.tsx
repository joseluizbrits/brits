"use client";

import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div<{ $position: "top" | "bottom" }>`
  width: 100%;
  height: 240px;
  background-color: var(--bg-2);

  position: fixed;
  ${({ $position }) => ($position === "top" ? "top: 0;" : "bottom: 0;")};
  left: 0;
  z-index: -1;

  img {
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    height: 160px;
  }
`;

function GalaxiesImage({ position }: { position: "top" | "bottom" }) {
  return (
    <Wrapper $position={position}>
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
