import React from 'react';
import { ThemeProvider } from 'styled-components';
import {BrowserRouter, Route} from 'react-router-dom'

import Home from './pages/Home';
import GlobalStyle from './styles/global';
import Theme from './styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" component={Home}/> 
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
