import styled from "styled-components";

interface ChangeBackgroundProps {
  haveBackground: boolean;
}

export const Content = styled.div<ChangeBackgroundProps>`
  cursor: pointer;

  display: flex;
  align-items: center;

  & > span {
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;

    margin-left: 10px;

    color: ${({ theme, haveBackground }) => haveBackground ? theme.COLORS.SHAPE : theme.COLORS.DARK};
  }
`;
