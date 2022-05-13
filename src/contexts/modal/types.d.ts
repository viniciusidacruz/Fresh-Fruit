import { ReactNode } from "react";

interface ModalContextProps {
  showModal: boolean;
  handleCloseModal: () => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

export { ModalContextProps, ModalProviderProps }