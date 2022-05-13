import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.FONTS.SIZES.SMALL};
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  padding: 1rem;
  border-radius: 0.25rem;
`;
