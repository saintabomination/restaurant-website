import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from '@xstyled/styled-components';
import mainTheme from './theme/mainTheme';
import ResetStyles from './theme/resetStyles';
import MainStyle from './theme/mainStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={mainTheme}>
        <ResetStyles />
        <MainStyle />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
