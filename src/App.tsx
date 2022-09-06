import { useState } from 'react'

import './App.css';
import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "./components/header"
import Footer from "./components/footer"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3f50b5',
      light: '#757ce8',      
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f44336',
      light: '#ff7961',      
      dark: '#ba000d',
      contrastText: '#fff',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#43a047',
      light: '#76d275',
      dark: '#00701a',
    },
    secondary: {
      main: '#00ab08',
      light: '#26d701',
      dark: '#016e06',
    },
  },
});

function App() {
  const [themeSelect, setTheme] = useState(true)
  return (
    <ThemeProvider theme={themeSelect ? darkTheme : theme}>
      <CssBaseline />

      <ResponsiveAppBar themeSelect={themeSelect} setTheme={setTheme} />
      <Container sx={{pt: 8,
            pb: 6,}}>
        <Outlet />
      </Container>
      <Footer />
    </ThemeProvider >
  );
}

export default App;
