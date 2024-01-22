import { Container } from "./styles";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import convince from "@/utils/convince";
import ConvinceMeCard from "../ConvinceMeCard";

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
