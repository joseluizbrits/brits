import { Container } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import img1 from "../../../public/velhota.jpg";
import img3 from "../../../public/google.jpg";
import img4 from "../../../public/drake.jpg";

import { montserrat } from "@/lib/fonts";
import Quotes from "@/icons/Quotes";
import Image from "next/image";

function ConvinceMe() {
  return (
    <Container>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="cm-container">
            <div className="cm-card">
              <div className="cm-text">
                <p>
                  <span className={montserrat.className}>
                    Você precisa de um site, independentemente de quem você seja
                    ou do seu propósito.
                  </span>
                  <span className={montserrat.className}>
                    Vem comigo que eu vou te mostrar...
                  </span>
                </p>
                <Quotes className="quote-1" />
                <Quotes className="quote-2" />
              </div>
              <Image
                id="img-1"
                src={img1.src}
                width={300}
                height={260}
                alt="Meme de uma velhinha em cima de uma prancha rosa com o universo de fundo"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cm-container">
            <div className="cm-card cm-card-2">
              <div className="cm-text">
                <p>
                  <span className={montserrat.className}>
                    Com um site as pessoas te encontram… e compram... e voltam e
                    compram de novo.
                  </span>
                  <span className={montserrat.className}>
                    Lembre-se: quem não é visto não é lembrado
                  </span>
                </p>
                <Quotes className="quote-1" />
                <Quotes className="quote-2" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cm-container">
            <div className="cm-card">
              <div className="cm-text">
                <p>
                  <span className={montserrat.className}>
                    Poder ser visto no Google é um sinal de profissionalismo e
                    seriedade.
                  </span>
                  <span className={montserrat.className}>
                    E, é claro, também é um sinal de que você existe!
                  </span>
                </p>
                <Quotes className="quote-1" />
                <Quotes className="quote-2" />
              </div>
              <Image
                id="img-3"
                src={img3.src}
                width={400}
                height={260}
                alt="Meme de uma velhinha em cima de uma prancha rosa com o universo de fundo"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cm-container">
            <div className="cm-card">
              <div className="cm-text">
                <p>
                  <span className={montserrat.className}>
                    Todo mundo tem Instagram e facebook.
                  </span>
                  <span className={montserrat.className}>
                    Agora, ter aquele portfólio bonitão ou uma página cool e
                    interativa na internet é para quem curte autenticidade.
                  </span>
                </p>
                <Quotes className="quote-1" />
                <Quotes className="quote-2" />
              </div>
              <Image
                id="img-4"
                src={img4.src}
                width={300}
                height={300}
                alt="Meme de uma velhinha em cima de uma prancha rosa com o universo de fundo"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default ConvinceMe;
