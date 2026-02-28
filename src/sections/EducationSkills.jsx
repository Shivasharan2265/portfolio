import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  LinearProgress,
  Chip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const EducationCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  height: '100%',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
}));

const SkillProgress = styled(LinearProgress)(() => ({
  height: 8,
  borderRadius: 4,
  backgroundColor: '#e5e7eb',
  '& .MuiLinearProgress-bar': {
    borderRadius: 4,
    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
  },
}));

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

const education = [
  {
    year: '2014 - 2016',
    degree: 'Master of Design (M.Des)',
    institution: 'National Institute of Design',
    description: 'Specialized in Interaction Design and User Experience.',
  },
  {
    year: '2010 - 2014',
    degree: 'Bachelor of Fine Arts',
    institution: 'College of Art',
    description: 'Major in Visual Communication with distinction.',
  },
  {
    year: '2008 - 2010',
    degree: 'Certification in UI/UX',
    institution: 'Design Bootcamp',
    description: 'Intensive program focused on modern design tools and methodologies.',
  },
];

const skills = [
  { name: 'UI Design', level: 95 },
  { name: 'UX Research', level: 90 },
  { name: 'Prototyping', level: 92 },
  { name: 'Design Systems', level: 88 },
  { name: 'User Testing', level: 85 },
  { name: 'Interaction Design', level: 90 },
];

const tools = [
  'Figma', 'Adobe XD', 'Sketch', 'Framer', 
  'InVision', 'Principle', 'Photoshop', 'Illustrator'
];

function EducationSkills() {
  return (
    <Box 
      component="section" 
      id="education"
      sx={{ 
        py: { xs: 8, md: 12 },
        backgroundColor: '#f9fafb',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SectionTitle variant="h2" sx={{ '&::after': { left: '50%', transform: 'translateX(-50%)' } }}>
            Education & Skills
          </SectionTitle>
          <Typography variant="body1" sx={{ mt: 3, maxWidth: '600px', mx: 'auto' }}>
            My academic background and professional expertise
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {/* Education Section */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                mb: 3,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: '#1f2937',
                fontWeight: 600,
              }}
            >
              <SchoolIcon sx={{ color: '#2563eb' }} />
              Education
            </Typography>
            
            {education.map((edu, index) => (
              <EducationCard key={index} sx={{ mb: 3 }} elevation={0}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <MenuBookIcon sx={{ color: '#2563eb', mr: 1 }} />
                  <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 600 }}>
                    {edu.year}
                  </Typography>
                </Box>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                  {edu.institution}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  {edu.description}
                </Typography>
              </EducationCard>
            ))}
          </Grid>
          
          {/* Skills Section */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                mb: 3,
                color: '#1f2937',
                fontWeight: 600,
              }}
            >
              Technical Skills
            </Typography>
            
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                backgroundColor: '#ffffff',
                borderRadius: '16px',
              }}
            >
              {/* Skill Bars */}
              {skills.map((skill, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {skill.name}
                    </Typography>
                    <Typography variant="body2" color="primary" sx={{ fontWeight: 600 }}>
                      {skill.level}%
                    </Typography>
                  </Box>
                  <SkillProgress 
                    variant="determinate" 
                    value={skill.level}
                  />
                </Box>
              ))}
              
              {/* Tools */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                  Tools I Use
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {tools.map((tool, index) => (
                    <Chip
                      key={index}
                      label={tool}
                      sx={{
                        backgroundColor: '#f3f4f6',
                        color: '#1f2937',
                        '&:hover': {
                          backgroundColor: '#2563eb',
                          color: '#ffffff',
                        },
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default EducationSkills;