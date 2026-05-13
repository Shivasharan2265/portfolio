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
import { useNavigate } from 'react-router-dom';
import exam from "../assets/exam-app.png"
import erp from "../assets/erp-web.png"
import qb from "../assets/qb-web.png"
import bamboo from "../assets/bamboo.png"


// Styled Components
const ProjectCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '20px',
  margin: '10px', // Reduced margin for mobile
  border: `1px solid ${theme.palette.divider}`,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-10px)',
    borderColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[4],
  },
  [theme.breakpoints.down('sm')]: {
    margin: '5px', // Even tighter on mobile
    '&:hover': {
      transform: 'none', // Disable hover lift on mobile for better UX
    },
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 220,
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    height: 180, // Slightly shorter images on mobile
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  // Responsive Font Size
  fontSize: "2rem",
  [theme.breakpoints.up('md')]: {
    fontSize: "3rem",
  },
}));

const projects = [
  {
    title: 'Exam App',
    description: 'Advanced online examination platform with real-time test monitoring, OMR support, and performance analytics.',
    image: exam, // ✅ use imported image
    tech: ['React', 'Firebase', 'MUI'],
    demo: '/exam-app',
    code: '#'
  },
  // {
  //   title: 'Bamboo Ecommerce',
  //  description: 'Modern eCommerce platform for bamboo products with seamless product browsing, cart management, and secure checkout.',
  //   image: bamboo, // ✅ use imported image
  //   tech: ['React', 'Node.js', 'Mongo DB'],
  //   demo: '/question-bank',
  //   code: '#'
  // },
  {
    title: 'Question Bank',
    description: 'Dynamic permission-based system for managing and generating exam papers with advanced filters, templates, and LaTeX support.',
    image: qb, // ✅ use imported image
    tech: ['React', 'Node.js', 'MySQL'],
    demo: '/question-bank',
    code: '#'
  },
  {
    title: 'School ERP',
    description: 'Complete institutional management system covering student records, fee management, and staff payroll.',
    image: erp, // ✅ use imported image
    tech: ['React', 'Node.js', 'PostgreSQL'],
    demo: '/erp',
    code: '#'
  }
];

function LatestWorks() {
  const theme = useTheme();
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: projects.length > 3,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false, // Hide arrows on mobile to prevent layout shift
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          centerMode: true, // Shows a peek of next/prev cards
          centerPadding: '20px',
        }
      }
    ]
  };

  return (
    <Box 
      component="section" 
      id="works"
      sx={{ 
        py: { xs: 6, md: 10 }, // Responsive padding
        backgroundColor: 'background.default',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
          <SectionTitle variant="h2">Latest Works</SectionTitle>
          <Typography 
            variant="body1" 
            sx={{ 
              mt: 2, 
              color: 'text.secondary', 
              maxWidth: '600px', 
              mx: 'auto',
              px: 2 // Padding for mobile text wrapping
            }}
          >
            A curated selection of my most recent development projects and digital solutions.
          </Typography>
        </Box>

        <Box sx={{ mx: { xs: -1, sm: -2 } }}> 
          <Slider {...settings}>
            {projects.map((project, index) => (
              <Box key={index} sx={{ pb: 5, px: 1 }}> 
                <ProjectCard elevation={0}>
                  <StyledCardMedia
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent sx={{ p: { xs: 2, sm: 3 }, flexGrow: 1 }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 700, 
                        mb: 1, 
                        color: 'text.primary',
                        fontSize: { xs: '1.25rem', sm: '1.5rem' } 
                      }}
                    >
                      {project.title}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 2, 
                        color: 'text.secondary', 
                        // Maintain consistent height or use minHeight
                        minHeight: '45px', 
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}
                    >
                      {project.description || "Project details coming soon. Stay tuned for more updates."}
                    </Typography>

                   

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                      <Button 
                        variant="contained" 
                        size="medium"
                        disableElevation
                        color="primary"
                        startIcon={<LaunchIcon />}
                        onClick={() => navigate(project.demo)}
                        sx={{ borderRadius: '10px', textTransform: 'none' }}
                      >
                        View 
                      </Button>
                      <IconButton 
                        size="medium" 
                        href={project.code}
                        target="_blank"
                        sx={{ 
                          border: `1px solid ${theme.palette.divider}`,
                          borderRadius: '10px'
                        }}
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