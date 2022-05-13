import { createContext, useState } from "react";

import { ModalContextProps, ModalProviderProps } from "./types";

export const ModalContext = createContext({} as ModalContextProps);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(!showModal);

  return (
    <ModalContext.Provider value={{ handleCloseModal, showModal }}>
      {children}
    </ModalContext.Provider>
  );
};
