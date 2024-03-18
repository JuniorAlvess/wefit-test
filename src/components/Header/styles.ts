import styled from 'styled-components';

export const Header = styled.header`
  padding: 24px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 24px 0px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: ${({ theme }) => theme.font.extraBold};

  cursor: pointer;
`;

export const ShoppingCartInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    background: none;
    border: none;
    svg {
      width: 40px;
      height: 40px;

      cursor: pointer;
      transition: filter 0.3s ease-in-out;

      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;

export const ShoppingCartInfoGroup = styled.span`
  display: flex;
  flex-direction: column;
`;

export const ShoppingCartInfoText = styled.b`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.semiBold};

  & + b {
    color: ${({ theme }) => theme.colors.neutralGray};
    font-size: ${({ theme }) => theme.font.sizes.small};
    font-weight: ${({ theme }) => theme.font.semiBold};
    text-align: right;
  }
`;
