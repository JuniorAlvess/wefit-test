import styled from 'styled-components';

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.white};
  gap: 24px;
  padding: 24px;
  border-radius: 4px;

  max-width: 1048px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Summary = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  button {
    width: 173px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;

    button,
    div {
      width: 100%;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  b {
    color: ${({ theme }) => theme.colors.neutralGray};
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-weight: ${({ theme }) => theme.font.extraBold};
  }

  strong {
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: ${({ theme }) => theme.font.sizes.extraLarge};
    font-weight: ${({ theme }) => theme.font.extraBold};
    margin-right: 15px;
  }
`;
