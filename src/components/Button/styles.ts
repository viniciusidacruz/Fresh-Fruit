import styled from "styled-components";

export const Content = styled.button`
  height: 3rem;
  max-width: 220px;
  width: 100%;

  font-size: 1rem;

  background-color: ${({ theme }) => theme.COLORS.ORANGE_400};
  color: ${({ theme }) => theme.COLORS.DARK};

  border-radius: ${({ theme }) => theme.OTHERS.BORDER.RADIUS};
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.3);
  }
`;
