import styled from "styled-components";

export const Main = styled.main`
  margin-top: 4rem;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    & > div {
      flex-direction: column;
    }
  }
`;

export const Content = styled.section`
  padding: 2rem;

  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.2);
  border-radius: ${({ theme }) => theme.OTHERS.BORDER};

  width: 68%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;

  border-bottom: 2px solid rgba(0, 0, 0, 0.1);

  height: 200px;

  margin-bottom: 3rem;
`;

export const Info = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & > button {
    margin-left: auto;

    background-color: ${({ theme }) => theme.COLORS.DARK};
    border-radius: ${({ theme }) => theme.OTHERS.BORDER.RADIUS};
    color: ${({ theme }) => theme.COLORS.SHAPE};
    padding: 1rem;
  }
`;

export const Aside = styled.aside`
  width: 30%;
  height: calc(100vh - 8rem);

  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
  border-radius: ${({ theme }) => theme.OTHERS.BORDER};

  & > button {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InfoAside = styled.div`
  span {
    color: ${({ theme }) => theme.COLORS.DARK};
    font-weight: ${({ theme }) => theme.FONTS.WEIGHT.BOLD};
    font-size: ${({ theme }) => theme.FONTS.SIZES.MEDIUM};
  }

  & > ul {
    margin-top: 2rem;
    list-style: none;

    li {
      margin-bottom: 1rem;
    }
  }
`;

export const GenerateBoleto = styled.a`
  background-color: ${({ theme }) => theme.COLORS.DARK};
  color: ${({ theme }) => theme.COLORS.SHAPE};

  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${({ theme }) => theme.OTHERS.BORDER.RADIUS};
`;
