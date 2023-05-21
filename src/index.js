import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red, deepPurple } from '@mui/material/colors';

import App from './App';
import './index.css';


const theme = createTheme({
  palette: {
    primary:{
      main: red[900],
    },
    secondary: {
      main: deepPurple[900], 
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

