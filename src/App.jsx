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
import EducationSkills from './sections/EducationSkills';
import LatestWorks from './sections/LatestWorks';
import Contact from './sections/Contact';

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
        <EducationSkills />
        <Contact />
        
        {/* Modern Footer */}
        <Box
          component="footer"
          sx={{
            py: 6,
            px: 2,
            mt: 'auto',
            backgroundColor: mode === 'dark' ? '#0a0a0a' : '#f8fafc',
            borderTop: `1px solid ${mode === 'dark' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)'}`,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 1,
              background: `linear-gradient(90deg, transparent, ${mode === 'dark' ? '#3b82f6' : '#2563eb'}, transparent)`,
            },
          }}
        >
          <Container maxWidth="lg">
            <Typography 
              variant="body2" 
              sx={{ 
                textAlign: 'center',
                fontSize: '0.95rem',
                color: mode === 'dark' ? '#d1d5db' : 'text.secondary',
              }}
            >
              © {new Date().getFullYear()} Shivasharan. All rights reserved.
            </Typography>
            <Typography 
              variant="caption" 
              sx={{ 
                mt: 1.5, 
                display: 'block',
                textAlign: 'center',
                opacity: 0.7,
                color: mode === 'dark' ? '#9ca3af' : 'text.secondary',
              }}
            >
              Designed & Built with React, MUI, and lots of ☕
            </Typography>
          </Container>
        </Box>
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