import React, { useState } from "react";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ title, children, isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" onClick={handleClose}>
          <div
            className="absolute inset-0 bg-gray-600 opacity-60"
            // Добавляем затемнение с полупрозрачностью
          ></div>
          <div className="flex min-h-screen items-center justify-center px-4 py-4" onClick={(e) => e.stopPropagation()}>
            <div
              className="relative w-full max-w-2xl overflow-hidden rounded-[30px] bg-white shadow-2xl dark:bg-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-[40px] md:px-[100px] py-[20px] md:py-[80px]">{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
