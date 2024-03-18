import { Component, ErrorInfo } from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

import { IErrorBoundaryProps, IErrorBoundaryState } from '../types/ErrorBoundary';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 24px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: ${({ theme }) => theme.font.extraBold};
`;

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): IErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container>
          <Title>Algo deu errado :(</Title>
          <Button
            text="Recarregar"
            onClick={() => window.location.reload()}
            style={{ width: '173px' }}
          />
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
