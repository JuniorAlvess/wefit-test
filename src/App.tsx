import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './router/ErrorBoundary';
import AppRoutes from './router/routes';

import Header from './components/Header';

import GlobalProvider from './context';

import styled from 'styled-components';

const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto 24px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 16px;
  }
`;

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <GlobalProvider>
          <Container>
            <Header />
            <AppRoutes />
          </Container>
        </GlobalProvider>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
