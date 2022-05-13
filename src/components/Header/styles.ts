import styled from "styled-components";

import { CgEnter } from "react-icons/cg";
import { GoSignOut } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface ChangeBackgroundProps {
  haveBackground: boolean;
}

export const Content = styled.header<ChangeBackgroundProps>`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  z-index: 999;

  height: 4rem;
  display: flex;
  align-items: center;

  background-color: ${({ haveBackground }) => haveBackground && 'rgba(0, 0, 0, 0.8)'};

  transition: all 0.8s;
`;

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Enter = styled.div<ChangeBackgroundProps>`
  display: flex;
  align-items: center;

  cursor: pointer;

  span {
    margin-right: 10px;

    font-weight: ${({ theme }) => theme.FONTS.WEIGHT.BOLD};
    color: ${({ theme, haveBackground }) => haveBackground ? theme.COLORS.SHAPE : theme.COLORS.DARK};
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

export const Cart = styled(AiOutlineShoppingCart)<ChangeBackgroundProps>`
  font-size: 2rem;

  color: ${({ theme, haveBackground }) => haveBackground ? theme.COLORS.SHAPE : theme.COLORS.DARK};
`;

export const EnterIcon = styled(CgEnter)<ChangeBackgroundProps>`
  font-size: 2rem;

  color: ${({ theme, haveBackground }) => haveBackground ? theme.COLORS.SHAPE : theme.COLORS.DARK};
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

export const SignOutIcon = styled(GoSignOut)<ChangeBackgroundProps>`
  color: ${({ theme, haveBackground }) => haveBackground ? theme.COLORS.SHAPE : theme.COLORS.DARK};
  font-size: 1.5rem;
`;
