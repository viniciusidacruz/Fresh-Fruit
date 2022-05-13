import styled from "styled-components";

interface StyledProps {
  activeIndex: number;
  index: number;
}

export const Container = styled.div<StyledProps>`
  display: ${({ activeIndex, index }) =>
    index === activeIndex ? "inline-block" : "none"};
  max-width: 1920px;
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 850ms;
`;
