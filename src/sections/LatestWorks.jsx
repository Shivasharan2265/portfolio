import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Styled Components
const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '20px',
  margin: '15px', // Spacing for slider items
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-10px)',
    borderColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[2],
  },
}));

const StyledCardMedia = styled(CardMedia)({
  height: 220,
  position: 'relative',
});

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));

const projects = [
  {
    title: 'Bamboo - Ecommerce',
    description: 'A premium lifestyle e-commerce platform built with MERN stack featuring seamless checkout.',
    image: 'https://via.placeholder.com/600x400/2D3047/FFFFFF?text=Bamboo+Store',
    tech: ['React', 'Node.js', 'Redux'],
    demo: '#',
    code: '#'
  },
  {
    title: 'Question Bank Portal',
    description: 'Internal management system for educational institutions to generate and manage dynamic test papers.',
    image: 'https://via.placeholder.com/600x400/E0A458/FFFFFF?text=Question+Bank',
    tech: ['Next.js', 'MySQL', 'Material UI'],
    demo: '#',
    code: '#'
  },
  {
    title: 'School ERP System',
    description: 'Comprehensive enterprise resource planning software for schools covering attendance to fee management.',
    image: 'https://via.placeholder.com/600x400/419D78/FFFFFF?text=School+ERP',
    tech: ['React', 'Express', 'MongoDB'],
    demo: '#',
    code: '#'
  },
  {
    title: 'Online Exam App',
    description: 'Cross-platform mobile application for real-time competitive examinations with proctoring features.',
    image: 'https://via.placeholder.com/600x400/2D3047/FFFFFF?text=Exam+App',
    tech: ['React Expo', 'Firebase', 'Native Base'],
    demo: '#',
    code: '#'
  },
  {
    title: 'AI Learn',
    description: 'Adaptive learning platform using AI to personalize educational content based on student performance.',
    image: 'https://via.placeholder.com/600x400/CBA77C/FFFFFF?text=AI+Learn',
    tech: ['Python', 'React', 'OpenAI API'],
    demo: '#',
    code: '#'
  },
  {
    title: 'CA Management CRM',
    description: 'Client relationship management tool tailored for Chartered Accountants to track audits and filings.',
    image: 'https://via.placeholder.com/600x400/1A1A1A/FFFFFF?text=CA+CRM',
    tech: ['MERN Stack', 'Socket.io', 'AWS'],
    demo: '#',
    code: '#'
  },
];

function LatestWorks() {
  const theme = useTheme();

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Box 
      component="section" 
      id="works"
      sx={{ 
       
        backgroundColor: 'background.default',
        overflow: 'hidden' // Prevents slider horizontal scroll
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <SectionTitle variant="h2">Latest Works</SectionTitle>
          <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}>
            A curated selection of my most recent development projects and digital solutions.
          </Typography>
        </Box>

        <Box sx={{ mx: -2 }}> {/* Negative margin to align slider cards with container */}
          <Slider {...settings}>
            {projects.map((project, index) => (
              <Box key={index} sx={{ pb: 5 }}> {/* Bottom padding for shadows/dots */}
                <ProjectCard elevation={0}>
                  <StyledCardMedia
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: 'text.primary' }}>
                      {project.title}
                    </Typography>
                    
                    <Typography variant="body2" sx={{ mb: 3, color: 'text.secondary', height: '60px', overflow: 'hidden' }}>
                      {project.description}
                    </Typography>

                    <Box sx={{ mb: 3, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.tech.map((t, i) => (
                        <Chip 
                          key={i} 
                          label={t} 
                          size="small" 
                          variant="filled"
                          sx={{ 
                            fontSize: '0.7rem',
                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Button 
                        variant="contained" 
                        size="small"
                        color="primary"
                        startIcon={<LaunchIcon />}
                        href={project.demo}
                      >
                        Live
                      </Button>
                      <IconButton 
                        size="small" 
                        href={project.code}
                        sx={{ border: `1px solid ${theme.palette.divider}` }}
                      >
                        <GitHubIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  </CardContent>
                </ProjectCard>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
}

export default LatestWorks;