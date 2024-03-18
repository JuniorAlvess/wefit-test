import styled from 'styled-components';

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.white};
  gap: 24px;
  padding: 64px 0 102px;
  border-radius: 4px;

  max-width: 1048px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 64px;

    p {
      width: 200px;
      text-align: center;
    }
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: ${({ theme }) => theme.font.extraBold};
`;

export const ImageContainer = styled.div``;
