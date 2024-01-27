import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import ConvinceMeCard from "../ConvinceMeCard";
import convince from "@/utils/convince";
import usePopup from "@/hooks/usePopup";

function ConvinceMe() {
  const { getPopup, setPopup } = usePopup();

  const popup = getPopup(1);

  const handlePopup = (target: EventTarget) => {
    const element = target as HTMLElement;

    if (element.classList.contains("close")) {
      setPopup(1, "close");
      document.documentElement.style.overflow = "auto";
    }
    return;
  };

  return (
    <Container
      className={popup ? "active" : ""}
      onClick={({ target }) => handlePopup(target)}
      data-lenis-prevent
    >
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {convince.map(({ id, text, img }, index) => (
          <SwiperSlide key={id}>
            <ConvinceMeCard
              id={id}
              text={text}
              img={img}
              link={index + 1 === convince.length ? true : false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default ConvinceMe;
