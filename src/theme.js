// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1E1E2F' },  // Dark header/background
    secondary: { main: '#FFD500' },  // Bright accent (TruLight)
    background: { default: '#F7F7F7' },
    text: { primary: '#333333' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h3: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
});

export default theme;
