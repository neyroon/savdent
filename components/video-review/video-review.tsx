import React, { useRef } from "react";
import { Section } from "../section/section";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Curve } from "../icons/curve";
import video1 from "../../assets/video-1.png";
import playImg from "../../assets/play.png";

export const VideoReview = () => {
  const elements = [{ img: video1 }, { img: video1 }, { img: video1 }, { img: video1 }, { img: video1 }];

  const swiperRef = useRef<null | SwiperRef>(null);

  const handleButtonLeftClick = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleButtonRightClick = () => {
    swiperRef.current?.swiper.slideNext();
  };

  return (
    <Section id="reviews">
      <h2 className="text-[20px] md:text-[26px] font-semibold leading-[140%] text-text-main mb-[50px]">Видео-отзывы</h2>
      <div className=" relative mr-[-20px] xl:mr-0">
        <button
          className="hidden xl:flex absolute top-[50%] left-0 w-[50px] h-[50px] justify-center items-center translate-y-[-50%] z-10 rounded-full bg-text-main opacity-30 cursor-pointer backdrop-blur-[4px] hover:opacity-100 transition-opacity duration-200"
          onClick={handleButtonLeftClick}
        >
          <Curve />
        </button>
        <button
          className="hidden xl:flex absolute top-[50%] right-0 w-[50px] h-[50px]  justify-center items-center translate-y-[-50%] z-10 rounded-full bg-text-main opacity-30 cursor-pointer backdrop-blur-[4px] hover:opacity-100 transition-opacity duration-200 scale-[-1]"
          onClick={handleButtonRightClick}
        >
          <Curve />
        </button>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.3}
          speed={700}
          breakpoints={{ 1280: { slidesPerView: 4 }, 768: { slidesPerView: 2.2 } }}
          ref={swiperRef}
        >
          {elements.map((el, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-[15px] h-[450px] relative flex justify-center items-center">
                <img
                  src={el.img}
                  alt="Видео"
                  className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover rounded-[15px]"
                  loading="lazy"
                />
                <img src={playImg} alt="Воспроизвести" className="w-[50px] h-[50px] z-10" loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};
