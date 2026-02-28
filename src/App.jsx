// App.js
import React, { useEffect } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography, Container } from '@mui/material';
import getTheme from './theme/theme';
import { ThemeProvider, useThemeMode } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import TechnicalSkills from './sections/TechnicalSkills';
import LatestWorks from './sections/LatestWorks';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const AppContent = () => {
  const { mode } = useThemeMode();
  const theme = getTheme(mode);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh' }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        
        <LatestWorks />
        <TechnicalSkills />
        <Contact />
        
      <Footer mode={mode} />
      </Box>
    </MuiThemeProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;