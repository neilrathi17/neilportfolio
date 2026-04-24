import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   body {
     background: ${({ theme }) => theme.background};
     color: ${({ theme }) => theme.color};
     transition: all 0.50s linear;
     font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
  
  /* Custom scrollbar for the new color palette */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }
  
  ::-webkit-scrollbar-thumb {
    background: #fca311ff;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #e5940f;
  }
`;

export default GlobalStyles;
