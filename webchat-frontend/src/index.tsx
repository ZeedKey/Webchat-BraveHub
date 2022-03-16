import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './components/GlobalStyle';
import { MainLayout } from './components/Layout';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />

    <MainLayout>
      <Home />
    </MainLayout>

  </React.StrictMode>,
  document.getElementById('root')
);