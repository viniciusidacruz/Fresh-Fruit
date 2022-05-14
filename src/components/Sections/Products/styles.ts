import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 1440px;
  width: 100%;

  padding: 0 2rem;
  margin: 3rem auto 0 auto;
`;

export const HeaderProducts = styled.div`
  text-align: center;

  position: relative;

  margin-bottom: 2rem;

  & > h1 {
    color: ${({ theme }) => theme.COLORS.GREEN_300};
    
    font-size: ${({  theme }) => theme.FONTS.SIZES.MEDIUM};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHT.BLACK};
  }

  & > h3 {
    color: ${({ theme }) => theme.COLORS.DARK};

    font-size: ${({ theme }) => theme.FONTS.SIZES.SMALL};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHT.REGULAR};
  }

  &:after {
    content: "";

    display: block;
    margin: 0.5rem auto 0 auto;
    
    width: 80px;
    height: 3px;

    background-color: ${({ theme }) => theme.COLORS.GREEN_300};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;