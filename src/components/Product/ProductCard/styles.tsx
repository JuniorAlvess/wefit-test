import styled from 'styled-components';

export const Container = styled.li`
  background: ${({ theme }) => theme.colors.white};
  width: clamp(19rem, 21vw, 21.16rem);

  padding: 16px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  list-style: none;

  border: 1px solid ${({ theme }) => theme.colors.neutralGray};

  @media (max-width: 768px) {
    max-width: 400px;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  width: 147px;

  img {
    width: 100%;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.extraBold};
`;

export const Price = styled.strong`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.font.sizes.base};
  font-weight: ${({ theme }) => theme.font.semiBold};
`;
