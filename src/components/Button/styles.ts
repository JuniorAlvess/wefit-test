import styled from 'styled-components';

export const Button = styled.button<{ $success?: boolean }>`
  width: 100%;
  background: ${({ theme }) =>
    (props) =>
      props.$success ? theme.colors.button.bgColorGreen : theme.colors.button.bgColorBlue};

  color: ${({ theme }) => theme.colors.button.textColor};
  font-weight: ${({ theme }) => theme.font.extraBold};
  font-size: ${({ theme }) => theme.font.sizes.small};
  text-align: center;

  padding: 11px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: filter 0.3s;
  line-height: 16.34px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  span {
    display: flex;
    align-items: center;
    gap: 3.4px;

    font-size: ${({ theme }) => theme.font.sizes.small};
    font-weight: ${({ theme }) => theme.font.regular};
  }

  &:hover {
    filter: brightness(0.8);
  }

  &:disabled {
    filter: brightness(0.8);
    cursor: not-allowed;
  }
`;
