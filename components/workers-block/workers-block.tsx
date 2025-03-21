import React, { useEffect, useRef, useState } from "react";
import { Section } from "../section/section";
import { Swiper, SwiperRef } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import img1 from "../../assets/elbrus2.webp";
import img2 from "../../assets/worker2.webp";
import img3 from "../../assets/worker3.webp";
import img4 from "../../assets/worker4.webp";
import img5 from "../../assets/worker5.webp";
import { Curve } from "../icons/curve";
import { FormPopup } from "../form-popup/form-popup";
import certImg from "../../assets/cert-preview-1.webp";
import cert1 from "../../assets/pdf/certificate.pdf";

export const WorkersBlock = () => {
  const elements = [
    { img: img1, name: "Эльбрус", kval: "Стоматолог-ортопед", practise: [], withAppointment: true },
    { img: img2, name: "Николай", kval: "Стоматолог-ортопед", practise: [], withAppointment: true },
    { img: img3, name: "Николай", kval: "Стоматолог-ортопед", practise: [] },
    { img: img4, name: "Николай", kval: "Стоматолог-ортопед", practise: [] },
    { img: img5, name: "Николай", kval: "Стоматолог-ортопед", practise: [] },
    { img: img5, name: "Николай", kval: "Стоматолог-ортопед", practise: [] },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const swiperRef = useRef<null | SwiperRef>(null);

  const handleButtonLeftClick = () => {
    swiperRef.current?.swiper.slidePrev();
  };

  const handleButtonRightClick = () => {
    swiperRef.current?.swiper.slideNext();
  };

  const [marginRight, setMarginRight] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 1408) setMarginRight(-((window.innerWidth - 1372) / 2));
    else if (window.innerWidth >= 1280) setMarginRight(-((window.innerWidth - 1280) / 2));
  }, []);

  return (
    <Section className="bg-bg" id="doctors">
      <h2 className="text-[20px] md:text-[26px] font-semibold leading-[140%] text-text-main mb-[50px]">
        Ваши зубы в надежных руках профессионалов
      </h2>
      <div className=" relative mr-[-20px] xl:mr-0" style={marginRight ? { marginRight } : {}}>
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
          slidesPerView={1.2}
          speed={700}
          breakpoints={{ 1280: { slidesPerView: 4.7 }, 768: { slidesPerView: 2.2 } }}
          ref={swiperRef}
        >
          {elements.map((el, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-[15px] bg-white border-1 border-gray-line flex flex-col gap-[20px] p-[20px]">
                <div className="relative">
                  <img
                    src={el.img}
                    alt="Фотография сотрудника"
                    className="w-full h-[288px] object-cover rounded-[15px]"
                    loading="lazy"
                  />
                  {el.withAppointment && (
                    <button
                      className="absolute cursor-pointer right-[20px] top-[20px] text-[16px] font-medium text-cl-main leading-[140%] transition-colors duration-200 bg-white hover:text-text-main py-[8px] px-[20px] rounded-full"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Записаться
                    </button>
                  )}
                </div>
                <div className="flex flex-col gap-[10px]">
                  <span className="text-[16px] text-[#100F10] leading-[140%] text-center">{el.name}</span>
                  <span className="text-[16px] text-[#100F10] leading-[140%] text-center">{el.kval}</span>
                  <span className="text-[16px] text-[#969FA8] leading-[140%] text-center">Образование и практика:</span>
                </div>
                <div className="flex gap-[10px]">
                  <a href={cert1} target="_blank" rel="noreferrer" className="w-full h-[94px] rounded-[5px] block">
                    <img
                      src={certImg}
                      alt="Сертификат"
                      className="w-full h-full object-cover contrast-[0.8] hover:contrast-[0.7] rounded-[5px]"
                    />
                  </a>
                  <a
                    href={cert1}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full h-[94px] block contrast-[0.8] hover:contrast-[0.7]"
                  >
                    <img src={certImg} alt="Сертификат" className="w-full h-full object-cover rounded-[5px]" />
                  </a>
                  <a
                    href={cert1}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full h-[94px] block contrast-[0.8] hover:contrast-[0.7]"
                  >
                    <img src={certImg} alt="Сертификат" className="w-full h-full object-cover rounded-[5px]" />
                  </a>
                  <a
                    href={cert1}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full h-[94px] block contrast-[0.8] hover:contrast-[0.7]"
                  >
                    <img src={certImg} alt="Сертификат" className="w-full h-full object-cover rounded-[5px]" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {isModalOpen && <FormPopup isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </Section>
  );
};
