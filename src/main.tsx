import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Globale.css';
import App from './App.tsx';
import { ThemeProvider } from '@material-tailwind/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
