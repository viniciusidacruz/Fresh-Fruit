import styled from "styled-components";

import { CgEnter } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";

export const Content = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 4rem;
  display: flex;
  align-items: center;
`;

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Enter = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  span {
    margin-right: 10px;

    font-weight: ${({ theme }) => theme.FONTS.WEIGHT.BOLD};
    color: ${({ theme }) => theme.COLORS.DARK};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const GroupImage = styled.div`
  position: relative;

  > div {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    top: -8px;
    right: -10px;
    background-color: ${({ theme }) => theme.COLORS.ORANGE_400};
    position: absolute;

    span {
      font-size: 12px;
      color: white;
      position: absolute;
      left: 6px;
      top: 1px;
    }
  }
`;

export const Cart = styled(AiOutlineShoppingCart)`
  font-size: 2rem;
`;

export const EnterIcon = styled(CgEnter)`
  font-size: 2rem;
`;

export const GroupPriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span:last-child {
    color: ${({ theme }) => theme.COLORS.ORANGE_400};
  }
`;

export const Logout = styled.button`
  background-color: transparent;
  position: relative;
  margin-left: 2rem;
`;

export const SignOutIcon = styled(GoSignOut)`
  color: ${({ theme }) => theme.COLORS.DARK};
  font-size: 1.5rem;
`;
