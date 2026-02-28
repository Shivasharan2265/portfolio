import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  TextField,
  Paper,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';

const ContactPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  height: '100%',
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: '#f3f4f6',
  color: theme.palette.primary.main,
  marginRight: theme.spacing(1),
  width: '48px',
  height: '48px',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
  },
}));

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    color: '#1f2937',
    backgroundColor: '#f9fafb',
    '& fieldset': {
      borderColor: '#e5e7eb',
    },
    '&:hover fieldset': {
      borderColor: '#2563eb',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2563eb',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#6b7280',
    '&.Mui-focused': {
      color: '#2563eb',
    },
  },
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  position: 'relative',
  display: 'inline-block',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -8,
    left: 0,
    width: '60px',
    height: '4px',
    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    borderRadius: '2px',
  },
}));

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <Box 
      component="section" 
      id="contact"
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: '#f9fafb',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionTitle variant="h2" sx={{ '&::after': { left: '50%', transform: 'translateX(-50%)' } }}>
            Get In Touch
          </SectionTitle>
          <Typography variant="body1" sx={{ mt: 3, maxWidth: '600px', mx: 'auto' }}>
            Have a project in mind? Let's work together to create something amazing
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <ContactPaper elevation={0}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Let's Talk
              </Typography>
              
              <Typography variant="body2" paragraph sx={{ mb: 4, color: '#6b7280' }}>
                I'm always excited to hear about new projects and opportunities. 
                Feel free to reach out through any of these channels.
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}>
                    <EmailIcon sx={{ color: '#2563eb' }} />
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary">Email</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>sruthi.design@email.com</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box sx={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}>
                    <PhoneIcon sx={{ color: '#2563eb' }} />
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary">Phone</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>+91 98765 43210</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    width: '48px', 
                    height: '48px', 
                    borderRadius: '50%', 
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}>
                    <LocationOnIcon sx={{ color: '#2563eb' }} />
                  </Box>
                  <Box>
                    <Typography variant="caption" color="text.secondary">Location</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>Bangalore, India</Typography>
                  </Box>
                </Box>
              </Box>
              
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Follow Me
              </Typography>
              
              <Box>
                <SocialIconButton href="https://github.com" target="_blank">
                  <GitHubIcon />
                </SocialIconButton>
                <SocialIconButton href="https://linkedin.com" target="_blank">
                  <LinkedInIcon />
                </SocialIconButton>
                <SocialIconButton href="https://twitter.com" target="_blank">
                  <TwitterIcon />
                </SocialIconButton>
              </Box>
            </ContactPaper>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <ContactPaper elevation={0}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Send Me a Message
              </Typography>
              
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <StyledTextField
                      fullWidth
                      label="Your Email"
                      variant="outlined"
                      type="email"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Subject"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <StyledTextField
                      fullWidth
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{ mt: 2 }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </ContactPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;