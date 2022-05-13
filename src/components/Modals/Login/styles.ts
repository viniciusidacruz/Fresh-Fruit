import styled from 'styled-components'

import { IoMdClose } from 'react-icons/io'
import { FiGithub } from 'react-icons/fi'

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;

  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.div`
  position: relative;
  z-index: 9999;

  width: 800px;

  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.COLORS.SHAPE};

  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
`

export const GroupLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  border-radius: 10px 0 0 10px;

  background-color: ${({ theme }) => theme.COLORS.DARK};
`

export const GroupRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`

export const CloseModal = styled(IoMdClose)`
  position: absolute;
  top: 10px;
  right: 10px;

  cursor: pointer;

  font-size: ${({ theme }) => theme.FONTS.SIZES.MEDIUM};
`

export const Or = styled.div`
  color: ${({ theme }) => theme.COLORS.DARK};

  font-weight: ${({ theme }) => theme.FONTS.WEIGHT.BOLD};
  font-size: ${({ theme }) => theme.FONTS.SIZES.REGULAR};
  text-align: center;

  margin-bottom: 1rem;
`

export const ButtonIcon = styled.button`
  background-color: #171515;

  height: 3rem;
  width: 49%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  margin: 0 auto;

  span {
    margin-left: 1rem;
    color: ${({ theme }) => theme.COLORS.SHAPE};
  }
`

export const Icon = styled(FiGithub)`
  color: ${({ theme }) => theme.COLORS.SHAPE};
  font-size: 1.5rem;
`