import React from "react";
import { Box, Container, Typography, IconButton, Stack, Divider } from "@mui/material";
import { styled, keyframes } from "@mui/material/styles";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import TerminalIcon from '@mui/icons-material/Terminal';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.5); opacity: 0.4; }
  100% { transform: scale(1); opacity: 1; }
`;

const FooterWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: theme.palette.mode === 'dark' ? '#050505' : '#F8F7F4',
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const LiveDot = styled(Box)(() => ({
  width: '6px',
  height: '6px',
  borderRadius: '50%',
  backgroundColor: '#4caf50',
  animation: `${pulse} 2s infinite`,
}));

const SocialIconButton = styled(motion(IconButton))(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: '8px',
  '&:hover': {
    color: theme.palette.secondary.main,
    background: 'transparent',
  },
}));

const Footer = () => {
  return (
    <FooterWrapper component="footer">
      <Container maxWidth="lg">
        <Stack 
          direction={{ xs: 'column', md: 'row' }} 
          justifyContent="space-between" 
          alignItems="center"
          spacing={3}
        >
          {/* Brand & Status */}
          <Stack direction="row" alignItems="center" spacing={2}>
           <TerminalIcon sx={{ fontSize: '0.9rem' }} />
            <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
              shivasharan ~ % status --optimized
            </Typography>
          </Stack>

         

          {/* Social Links */}
          <Stack direction="row" spacing={1}>
            {[
              { icon: <GitHubIcon fontSize="small" />, link: "#" },
              { icon: <LinkedInIcon fontSize="small" />, link: "#" },
              { icon: <TwitterIcon fontSize="small" />, link: "#" }
            ].map((social, i) => (
              <SocialIconButton 
                key={i} 
                href={social.link}
                whileHover={{ y: -3 }}
              >
                {social.icon}
              </SocialIconButton>
            ))}
          </Stack>
        </Stack>

     
         
       
      </Container>
    </FooterWrapper>
  );
};

export default Footer;