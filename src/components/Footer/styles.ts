import styled from 'styled-components'

export const Content = styled.footer`
  margin-top: 4rem;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Copy = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK};
  color: ${({ theme }) => theme.COLORS.SHAPE};

  width: 100%;
  
  text-align: center;

padding: 1rem;
`