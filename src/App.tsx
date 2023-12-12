import React from 'react';
import './i18n';
import GlobalStyle from './Styles/Global';
import HomePage from './Pages/Home';

const App: React.FC = () => (
  <div>
    <HomePage />
    <GlobalStyle />
  </div>
);

export default App;
