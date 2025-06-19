import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2C66BC',
        },
        background: {
            default: '#f7f7f7',
        },
    },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <App />
      </ThemeProvider>
  </StrictMode>,
)
