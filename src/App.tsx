import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import Theme from './styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <> 
      </>
    </ThemeProvider>
  );
}

export default App;
