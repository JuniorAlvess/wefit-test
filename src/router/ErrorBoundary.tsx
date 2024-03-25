import { Component, ErrorInfo } from 'react';
import ErrBoundary from '../components/ErrBoundary';

import { IErrorBoundaryProps, IErrorBoundaryState } from '../types/ErrorBoundary';

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
      return <ErrBoundary />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
