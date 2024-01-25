"use client";

import { Container, Content, Text } from "./styles";
import { montserrat } from "@/lib/fonts";

import Link from "next/link";
import Image from "next/image";
import Quotes from "@/icons/Quotes";

interface IConvinceMeCard {
  id: string;
  text: string[];
  img: {
    id: string;
    src: string;
    width?: number;
    height?: number;
    alt?: string;
  };
  link: boolean;
}

function ConvinceMeCard({ id, text, img, link }: IConvinceMeCard) {
  return (
    <Container className="close">
      <Content id={id} $src={!img.alt ? img.src : ""}>
        <Text>
          <p>
            {text.map((txt) => (
              <span key={txt} className={montserrat.className}>
                {txt}
              </span>
            ))}
          </p>
          <Quotes className="quote-1" />
          <Quotes className="quote-2" />
        </Text>
        {img.alt && (
          <Image
            id={img.id}
            src={img.src}
            width={img.width}
            height={img.height}
            alt={img.alt}
          />
        )}
        {link && <Link href="#">Dar um alô</Link>}
      </Content>
    </Container>
  );
}

export default ConvinceMeCard;
