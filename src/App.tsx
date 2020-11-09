import React from 'react';
import Header from './components/Header';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#750032',
    },
    secondary: {
      main: '#eaabc0',
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </div>
  );
}

export default App;
