import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutralGray};
`;

export const ColumnsContainer = styled.div`
  display: grid;
  grid-template-areas: 'product quantity subtotal';
  grid-template-columns: 280px 1fr 1fr;

  margin-bottom: 24px;

  @media (max-width: 768px) {
    display: none;
  }

  p:nth-child(1) {
    grid-area: product;
  }
  p:nth-child(2) {
    grid-area: quantity;
  }
  p:nth-child(3) {
    grid-area: subtotal;
  }
`;

export const ColumnName = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.extraBold};
  color: ${({ theme }) => theme.colors.neutralGray};
`;
