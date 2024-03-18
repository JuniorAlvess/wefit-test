import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: 'image productInfo quantity subtotal';
  grid-template-columns: 91px 189px 1fr 1fr;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    grid-template-areas: 'image productInfo productInfo' 'image quantity subtotal';
    grid-template-columns: 64px 1fr;
    gap: 16px;
  }
`;

export const ProductInfo = styled.div`
  grid-area: productInfo;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 16px;

  margin-left: 16px;

  @media (max-width: 768px) {
    padding-right: 32px;
    margin-left: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  grid-area: image;
  width: 91px;
  margin-right: 16px;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 64px;
  }
`;

export const Title = styled.p`
  grid-area: title;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.extraBold};
`;

export const Quantity = styled.div`
  grid-area: quantity;
  display: flex;
  align-items: center;
  gap: 11px;

  span {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-weight: ${({ theme }) => theme.font.regular};

    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 3.5px 26.5px;
  }
`;

export const Subtotal = styled.div`
  grid-area: subtotal;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 17px;

  @media (max-width: 768px) {
    strong {
      display: flex;
      flex-direction: column;
      align-items: center;

      &::before {
        content: 'SUBTOTAL';
        color: ${({ theme }) => theme.colors.neutralGray};
        font-size: ${({ theme }) => theme.font.sizes.small};
        font-weight: ${({ theme }) => theme.font.extraBold};
      }
    }

    button {
      position: absolute;
      top: 2px;
      right: 0;
    }
  }

  @media (max-width: 395px) {
    button {
      right: -17px;
    }
  }
`;

export const Price = styled.strong`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.font.sizes.base};
  font-weight: ${({ theme }) => theme.font.extraBold};
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  outline: none;

  svg {
    cursor: pointer;
    transition: filter 0.3s ease-in-out;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
