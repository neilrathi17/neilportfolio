import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// import useDarkMode from 'use-dark-mode';
import AppContext from './AppContext';
import MainApp from './MainApp';
import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/themes';

function App() {
//   window.matchMedia = null;
//   const darkMode = useDarkMode(true);
  const darkMode=false

  return (
    <AppContext.Provider >
      <ThemeProvider theme={darkMode.valueOf ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className="App">
          <BrowserRouter basename={process.env.PUBLIC_URL} >
            <MainApp />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
