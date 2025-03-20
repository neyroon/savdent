// Tabs.jsx - основной контейнер
import React, { useEffect, useState } from "react";
import { Tab } from "./tab";
import { TabContent } from "./tab-content";
import { Swiper, SwiperSlide } from "swiper/react";
import { FormPopup } from "../form-popup/form-popup";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("popular");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1280);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const elements = [
    {
      label: "Популярные",
      name: "popular",
      content: [
        {
          name: "Осмотр, диагностика, консультация",
          value:
            "Получите распечатку снимка выших зубов, что даст понимание состояния зубов, плана лечения и стоимости",
          contain: "Определение причинного зуба, составление плана лечения (5-15 минут)",
          price: "Бесплатно",
        },
        {
          name: "Простое удаление зуба",
          value: "Быстрое и безболезненное решение проблемы",
          contain: "Удаление зуба под местной анестезией",
          price: "от 2,000 руб",
        },
        {
          name: "Лечение зуба и установка пломбы",
          value: "Быстрое устранение от легкой до ночной боли",
          contain: "Лечение воспаления нерва зуба",
          price: "от 3,500 руб",
        },
        {
          name: "Установка коронки",
          value: "Доступное и прочное восстановление зуба",
          contain: "Блестящий металл с напылением золота",
          price: "от 3,500 руб",
        },
        {
          name: "Профессиональная гигиена полости рта (комплекс)",
          value: "Удаляет зубной налёт и предотвращает заболевания десен, сохраняя здоровье зубов на долгие годы",
          contain: "Ультразвуковая чистка, AIR-FLOW, реминерализирующая капа с биозащитой",
          price: "от 4,500 руб",
        },
        {
          name: "Установка импланта",
          value: "Восстановление жевательной функции",
          contain: "Корейская имплантационная система",
          price: "от 50,000 руб",
        },
      ],
    },
    {
      label: "Терапия",
      name: "therapy",
      content: [
        {
          name: "Осмотр, диагностика, консультация",
          value:
            "Получите распечатку снимка выших зубов, что даст понимание состояния зубов, плана лечения и стоимости",
          contain: "Определение причинного зуба, составление плана лечения (5-15 минут)",
          price: "Бесплатно",
        },
        {
          name: "Простое удаление зуба",
          value: "Быстрое и безболезненное решение проблемы",
          contain: "Удаление зуба под местной анестезией",
          price: "от 2,000 руб",
        },
        {
          name: "Лечение зуба и установка пломбы",
          value: "Быстрое устранение от легкой до ночной боли",
          contain: "Лечение воспаления нерва зуба",
          price: "от 3,500 руб",
        },
        {
          name: "Установка коронки",
          value: "Доступное и прочное восстановление зуба",
          contain: "Блестящий металл с напылением золота",
          price: "от 3,500 руб",
        },
        {
          name: "Профессиональная гигиена полости рта (комплекс)",
          value: "Удаляет зубной налёт и предотвращает заболевания десен, сохраняя здоровье зубов на долгие годы",
          contain: "Ультразвуковая чистка, AIR-FLOW, реминерализирующая капа с биозащитой",
          price: "от 4,500 руб",
        },
        {
          name: "Установка импланта",
          value: "Восстановление жевательной функции",
          contain: "Корейская имплантационная система",
          price: "от 50,000 руб",
        },
      ],
    },
    {
      label: "Ортопедия",
      name: "orthopedics",
      content: [
        {
          name: "Осмотр, диагностика, консультация",
          value:
            "Получите распечатку снимка выших зубов, что даст понимание состояния зубов, плана лечения и стоимости",
          contain: "Определение причинного зуба, составление плана лечения (5-15 минут)",
          price: "Бесплатно",
        },
        {
          name: "Простое удаление зуба",
          value: "Быстрое и безболезненное решение проблемы",
          contain: "Удаление зуба под местной анестезией",
          price: "от 2,000 руб",
        },
        {
          name: "Лечение зуба и установка пломбы",
          value: "Быстрое устранение от легкой до ночной боли",
          contain: "Лечение воспаления нерва зуба",
          price: "от 3,500 руб",
        },
        {
          name: "Установка коронки",
          value: "Доступное и прочное восстановление зуба",
          contain: "Блестящий металл с напылением золота",
          price: "от 3,500 руб",
        },
        {
          name: "Профессиональная гигиена полости рта (комплекс)",
          value: "Удаляет зубной налёт и предотвращает заболевания десен, сохраняя здоровье зубов на долгие годы",
          contain: "Ультразвуковая чистка, AIR-FLOW, реминерализирующая капа с биозащитой",
          price: "от 4,500 руб",
        },
        {
          name: "Установка импланта",
          value: "Восстановление жевательной функции",
          contain: "Корейская имплантационная система",
          price: "от 50,000 руб",
        },
      ],
    },
    {
      label: "Хирургия",
      name: "surgery",
      content: [
        {
          name: "Осмотр, диагностика, консультация",
          value:
            "Получите распечатку снимка выших зубов, что даст понимание состояния зубов, плана лечения и стоимости",
          contain: "Определение причинного зуба, составление плана лечения (5-15 минут)",
          price: "Бесплатно",
        },
        {
          name: "Простое удаление зуба",
          value: "Быстрое и безболезненное решение проблемы",
          contain: "Удаление зуба под местной анестезией",
          price: "от 2,000 руб",
        },
        {
          name: "Лечение зуба и установка пломбы",
          value: "Быстрое устранение от легкой до ночной боли",
          contain: "Лечение воспаления нерва зуба",
          price: "от 3,500 руб",
        },
        {
          name: "Установка коронки",
          value: "Доступное и прочное восстановление зуба",
          contain: "Блестящий металл с напылением золота",
          price: "от 3,500 руб",
        },
        {
          name: "Профессиональная гигиена полости рта (комплекс)",
          value: "Удаляет зубной налёт и предотвращает заболевания десен, сохраняя здоровье зубов на долгие годы",
          contain: "Ультразвуковая чистка, AIR-FLOW, реминерализирующая капа с биозащитой",
          price: "от 4,500 руб",
        },
        {
          name: "Установка импланта",
          value: "Восстановление жевательной функции",
          contain: "Корейская имплантационная система",
          price: "от 50,000 руб",
        },
      ],
    },
    {
      label: "Ортодонтия",
      name: "orthodontics",
      content: [
        {
          name: "Осмотр, диагностика, консультация",
          value:
            "Получите распечатку снимка выших зубов, что даст понимание состояния зубов, плана лечения и стоимости",
          contain: "Определение причинного зуба, составление плана лечения (5-15 минут)",
          price: "Бесплатно",
        },
        {
          name: "Простое удаление зуба",
          value: "Быстрое и безболезненное решение проблемы",
          contain: "Удаление зуба под местной анестезией",
          price: "от 2,000 руб",
        },
        {
          name: "Лечение зуба и установка пломбы",
          value: "Быстрое устранение от легкой до ночной боли",
          contain: "Лечение воспаления нерва зуба",
          price: "от 3,500 руб",
        },
        {
          name: "Установка коронки",
          value: "Доступное и прочное восстановление зуба",
          contain: "Блестящий металл с напылением золота",
          price: "от 3,500 руб",
        },
        {
          name: "Профессиональная гигиена полости рта (комплекс)",
          value: "Удаляет зубной налёт и предотвращает заболевания десен, сохраняя здоровье зубов на долгие годы",
          contain: "Ультразвуковая чистка, AIR-FLOW, реминерализирующая капа с биозащитой",
          price: "от 4,500 руб",
        },
        {
          name: "Установка импланта",
          value: "Восстановление жевательной функции",
          contain: "Корейская имплантационная система",
          price: "от 50,000 руб",
        },
      ],
    },
  ];

  const renderTabContentMobile = (el) => (
    <Swiper spaceBetween={20} slidesPerView={1.3} speed={700} breakpoints={{ 768: { slidesPerView: 2.2 } }}>
      {el.content.map((cEl) => (
        <SwiperSlide key={cEl.name} style={{ height: "auto" }}>
          <div
            key={cEl.name}
            className="px-[20px] py-[25px] h-full group flex flex-col gap-[25px] rounded-[15px] transition-colors duration-200 bg-white border-1 border-transparent hover:border-[rgba(184,156,76,0.40)]"
          >
            <div className="flex flex-col gap-[5px]">
              <span className="text-[16px] leading-[140%] text-gray-border ">Название услуги</span>
              <span className="text-[16px] leading-[140%] text-text-main ">{cEl.name}</span>
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-[16px] leading-[140%] text-gray-border ">Ценность</span>
              <span className="text-[16px] leading-[140%] text-text-main ">{cEl.value}</span>
            </div>
            <div className="flex flex-col gap-[5px]">
              <span className="text-[16px] leading-[140%] text-gray-border ">Что входит</span>
              <span className="text-[16px] leading-[140%] text-text-main ">{cEl.contain}</span>
            </div>
            <div className="flex justify-between mt-auto">
              <span className="text-[16px] leading-[140%] text-cl-main bg-bg border-1 border-gray-line w-[109px] flex justify-center py-[8px] rounded-[20px] transition-colors duration-200 group-hover:text-green-main">
                {cEl.price}
              </span>
              <button
                className="text-[16px] font-medium text-white leading-[140%] transition-colors duration-200 bg-[#7FCE41B2] group-hover:bg-green-main py-[8px] px-[14px] rounded-full"
                onClick={() => setIsModalOpen(true)}
              >
                Записаться
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );

  const renderTabContentDes = (el) => (
    <>
      {el.content.map((cEl) => (
        <div
          key={cEl.name}
          className="px-[30px] py-[25px] group flex gap-[10px] min-h-[119px] justify-between items-start rounded-[15px] transition-colors duration-200 bg-white border-1 border-transparent hover:border-[rgba(184,156,76,0.40)]"
        >
          <span className="text-[16px] leading-[140%] text-text-main w-[271px]">{cEl.name}</span>
          <span className="text-[16px] leading-[140%] text-text-main w-[350px]">{cEl.value}</span>
          <span className="text-[16px] leading-[140%] text-gray-border w-[310px]">{cEl.contain}</span>
          <span className="text-[16px] leading-[140%] text-cl-main bg-bg border-1 border-gray-line w-[109px] flex justify-center py-[8px] rounded-[20px] transition-colors duration-200 group-hover:text-green-main">
            {cEl.price}
          </span>
          <button
            className="text-[16px] cursor-pointer font-medium text-white leading-[140%] transition-colors duration-200 bg-[#7FCE41B2] group-hover:bg-green-main py-[8px] px-[14px] rounded-full"
            onClick={() => setIsModalOpen(true)}
          >
            Записаться
          </button>
        </div>
      ))}
    </>
  );

  return (
    <>
      <div className="flex md:flex-row flex-col gap-[20px] md:gap-[50px]">
        <h2 className="text-[20px] md:text-[26px] font-semibold leading-[140%] shrink-0">Предоставляем услуги</h2>
        <div className="w-full md:w-[calc(100%-332px)] tabs">
          <Swiper
            spaceBetween={10}
            slidesPerView={2.6}
            speed={700}
            breakpoints={{ 1280: { slidesPerView: 5, spaceBetween: 20 }, 768: { slidesPerView: 3 } }}
            className="mr-[-20px]! :md:mr-[-15px]! xl:mr-0!"
          >
            <div className="flex gap-[10px]">
              {elements.map((el) => (
                <SwiperSlide key={el.name} style={{ height: "auto" }}>
                  <Tab
                    key={el.name}
                    label={el.label}
                    active={activeTab === el.name}
                    onClick={() => handleTabClick(el.name)}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
      <div className="relative mt-[50px] md:mt-[70px]">
        <div className="xl:flex hidden justify-between px-[30px] mb-[20px]">
          <span className="text-[16px] leading-[140%] font-medium text-text-main w-[271px]">Название услуги</span>
          <span className="text-[16px] leading-[140%] font-medium text-text-main w-[350px]">Ценность</span>
          <span className="text-[16px] leading-[140%] font-medium text-text-main w-[310px]">Что входит</span>
          <span className="text-[16px] leading-[140%] font-medium text-text-main w-[103px]">Стоимость</span>
          <span className="text-[16px] leading-[140%] font-medium text-text-main w-[100px]"></span>
        </div>
        {elements.map((el) => (
          <TabContent key={el.name} active={activeTab === el.name}>
            <div className="xl:flex flex-col gap-[10px] mr-[-20px] md:mr-0">
              {isMobile ? renderTabContentMobile(el) : renderTabContentDes(el)}
            </div>
          </TabContent>
        ))}
      </div>
      {isModalOpen && <FormPopup isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Tabs;
