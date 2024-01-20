import { Container } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import img1 from "../../../public/velhota.jpg";
import img3 from "../../../public/google.jpg";
import img4 from "../../../public/drake.jpg";
import img6 from "../../../public/me-solta.jpg";

import { montserrat } from "@/lib/fonts";
import Quotes from "@/icons/Quotes";
import Image from "next/image";
import Link from "next/link";

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
                alt="Paginá principal do Google com o meme do Dicaprio no filme Django no lugar dos doi 'o' da logo"
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
                alt="Meme do Drake, rejeitando o facebook e instagram e dizendo sim para 'meu site'"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cm-container">
            <div className="cm-card cm-card-5">
              <div className="cm-text">
                <p>
                  <span className={montserrat.className}>
                    É bom ter o seu cantinho na internet e poder contar a sua
                    história e seus valores do jeitinho que você quiser.
                  </span>
                  <span className={montserrat.className}>
                    Você pode dar a sua cara a ele e contar comigo para dar
                    aquela maquiada ;)
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
                    Eu sei que você não quer ficar para trás e nem viver como
                    viviam os antigos Maias e Astecas.
                  </span>
                  <span className={montserrat.className}>
                    Ter um site é essencial para se destacar nos dias de hoje.
                    Portanto...
                  </span>
                </p>
                <Quotes className="quote-1" />
                <Quotes className="quote-2" />
              </div>
              <Image
                id="img-6"
                src={img6.src}
                width={360}
                height={240}
                alt="Meme de uma mulher num quadro antigo segurando um alienzinho"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="cm-container">
            <div className="cm-card cm-card-7">
              <div className="cm-text">
                <p>
                  <span className={montserrat.className}>
                    Joga uma mensagem lá no meu WhatsApp pra a gente descobrir
                    como te colocar no mundo digital.
                  </span>
                  <span className={montserrat.className}>
                    Meus preços são super amigaveis e meu método de trabalho é
                    no amor :)
                  </span>
                </p>
                <Quotes className="quote-1" />
                <Quotes className="quote-2" />
              </div>
              <Link href="#">Dar um alô</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default ConvinceMe;
