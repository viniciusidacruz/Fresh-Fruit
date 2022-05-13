import styled from "styled-components";

import { MdNavigateBefore } from "react-icons/md";
import { MdOutlineNavigateNext } from "react-icons/md";

export const Container = styled.div``;

export const CircleLeft = styled.button`
  cursor: pointer;
  position: absolute;
  left: 1rem;
  top: 50%;
  z-index: 2;
  width: auto;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.DARK};
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.4);
  }
`;

export const Prev = styled(MdNavigateBefore)`
  font-size: 2rem;
  transition: filter 0.2s;
  color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const CircleRight = styled.button`
  cursor: pointer;
  position: absolute;
  right: 1rem;
  top: 50%;
  z-index: 2;
  width: auto;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.DARK};
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.4);
  }
`;

export const Next = styled(MdOutlineNavigateNext)`
  font-size: 2rem;
  transition: filter 0.2s;
  color: ${({ theme }) => theme.COLORS.SHAPE};
`;
