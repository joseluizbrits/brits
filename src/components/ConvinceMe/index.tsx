import { Container } from "./styles";
import { Dispatch, SetStateAction } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import convince from "@/utils/convince";
import ConvinceMeCard from "../ConvinceMeCard";

interface IConvinceMe {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

function ConvinceMe({ active, setActive }: IConvinceMe) {
  const handleActive = (target: EventTarget) => {
    const element = target as HTMLElement;

    if (element.classList.contains("close")) {
      document.documentElement.style.overflow = "auto";
      setActive(false);
    }
    return;
  };

  return (
    <Container
      className={active ? "active" : ""}
      onClick={({ target }) => handleActive(target)}
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
