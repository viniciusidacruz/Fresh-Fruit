import styled from 'styled-components'
import { RiAddCircleFill } from 'react-icons/ri'

export const Content = styled.div``

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 252px;
  width: 100%;

  margin: 0 auto 2rem auto;
  padding: 10px;

  background-color: white;
  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`

export const Thumbnail = styled.div`
  position: relative;

  img:hover {
    transition: all 0.2s ease;

    transform: scale(1.2);
  }
`

export const Offer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.ORANGE_600};

  position: absolute;
  right: 0;
  top: -1rem;
  z-index: 99;

  border-radius: 0.5rem;

  padding: 0.5rem;

  span {
    color: white;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  h4,
  h5 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  h5 {
    font-weight: normal;
  }
`

export const Prices = styled.div`
  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  s {
    color: ${({ theme }) => theme.COLORS.DARK};
    font-size: ${({ theme }) => theme.FONTS.SIZES.SMALL};
  }

  span:last-child {
    font-size: ${({ theme }) => theme.FONTS.SIZES.SMALL};
  }
`

export const InfoPrice = styled.div`
  display: flex;
  flex-direction: column;
`

export const IconAdd = styled(RiAddCircleFill)`
  font-size: 1.5rem;

  color: ${({ theme }) => theme.COLORS.ORANGE_400};

  &:hover {
    transition: all 0.2s;
    transform: scale(1.2);
  }
`

export const Price = styled.span`
  color: ${({ theme }) => theme.COLORS.ORANGE_400};

  font-weight: ${({ theme }) => theme.FONTS.WEIGHT.BLACK};
  font-size: 1.5rem;
  text-transform: uppercase;
`

export const ProductName = styled.span`
  font-size: ${({ theme }) => theme.FONTS.SIZES.REGULAR};
  font-weight: ${({ theme }) => theme.FONTS.WEIGHT.BLACK};
  
  color: ${({ theme }) => theme.COLORS.DARK};
`;

export const ProductDescription = styled.span`
  font-size: ${({ theme }) => theme.FONTS.SIZES.SMALL};
  font-weight: ${({ theme }) => theme.FONTS.WEIGHT.BLACK};
  
  color: ${({ theme }) => theme.COLORS.DARK};
`;