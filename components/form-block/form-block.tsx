import React, { useEffect, useState } from "react";
import { Section } from "../section/section";
import zapicImg from "../../assets/zapic.webp";
import { useMask } from "@react-input/mask";
import { Modal } from "../modal/modal";

export const FormBlock = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const inputRef = useMask({
    mask: "+7 (___) ___-__-__",
    replacement: { _: /\d/ },
  });

  useEffect(() => {
    setIsMobile(window.innerWidth < 1280);
  }, []);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Section className="bg-bg md:py-[30px]" id="zapic">
      <div className=" py-[20px] md:py-[40px] px-[20px] xl:px-[60px] bg-white w-full rounded-[30px] flex flex-col md:flex-row-reverse gap-[50px]">
        <img
          src={zapicImg}
          alt="Фотография"
          className="xl:w-[574px] md:w-[329px] h-[251px] object-cover rounded-[30px] xl:h-[451px] md:h-[548px]"
          loading="lazy"
        />
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[10px]">
            <h2 className=" text-[20px] md:text-[22px] xl:text-[30px] font-bold leading-[140%] text-text-main">
              Запишитесь на бесплатную <br /> консультацию у стоматолога
            </h2>
            <span className="text-[14px] md:text-[20px] font-medium leading-[140%] text-text-main">
              Проверим зубы, составим план лечения {!isMobile && <br />} и сориентируем по полной стоимости - бесплатно
            </span>
          </div>

          <form className="flex flex-col gap-[20px] text-[16px]  leading-[140%] text-text-main">
            <input
              type="text"
              className="px-[15px] py-[19px] rounded-[6px] bg-bg placeholder:text-gray-border"
              placeholder="Введите имя"
              required
            />
            <input
              type="tel"
              ref={inputRef}
              className="p-[15px] rounded-[6px] bg-bg placeholder:text-gray-border"
              placeholder="Номер телефона"
            />
          </form>

          <div className="flex flex-col gap-[15px]">
            <div className="flex xl:flex-row flex-col gap-[10px] md:gap-[30px]">
              <button
                className="text-[16px] w-full cursor-pointer md:w-[317px] text-center font-medium text-white leading-[140%] transition-colors duration-200 bg-cl-main hover:bg-cl-main-hover py-[15px] px-[30px] rounded-full"
                onClick={handleClick}
              >
                Записаться
              </button>
              <div className="flex flex-col gap-[2px]">
                <span className="text-gray-border text-[14px] leading-[140%]">Контактный телефон:</span>
                <a href="tel:+79297770474" className="text-text-main  text-[16px] leading-[140%] ">
                  +7 (929) 777-04-74
                </a>
              </div>
            </div>
            <span className="text-gray-border text-[12px] leading-[140%]">
              Нажимая кнопку “Записаться” я соглашаюсь с обработкой персональных данных и политикой конфиденциальности
            </span>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="px-[40px] py-[20px] xl:px-[100px] xl:py-[80px]">
            <p className="mb-[12px] text-text-main text-[20px] md:text-[30px] leading-[140%] font-medium md:font-bold text-center">
              Заявка успешно отправлена!
            </p>
            <p className="mb-[40px] text-text-main text-[14px] md:text-[20px] leading-[140%] font-medium text-center">
              Перезвоним вам в течении 30 минут
            </p>
            <button
              className="text-[16px] w-full  cursor-pointer text-center font-medium text-white leading-[140%] transition-colors duration-200 bg-cl-main hover:bg-cl-main-hover py-[15px] px-[30px] rounded-full"
              onClick={() => setIsModalOpen(false)}
            >
              Вернуться обратно
            </button>
          </div>
        </Modal>
      )}
    </Section>
  );
};
