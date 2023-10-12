import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.min.css";
import { SingleArticleDetail } from "./SingleArticleDetail";

const SliderRelationNews = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        breakpoints={{
          // when window width is >= 640px

          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <SingleArticleDetail />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export { SliderRelationNews };
