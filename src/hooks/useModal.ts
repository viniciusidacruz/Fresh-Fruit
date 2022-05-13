import { useContext } from "react"

import { ModalContext } from "contexts/modal"

export const useModal = () => {
  return useContext(ModalContext)
}