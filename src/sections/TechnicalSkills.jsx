import React from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

// Styled Components consistent with your About.js
const SkillCard = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.03)" : "transparent",
  borderRadius: "16px",
  border: `1px solid ${theme.palette.divider}`,
  transition: "all 0.3s ease",
  textAlign: "center",
  height: "100%",
  "&:hover": {
    borderColor: theme.palette.secondary.main,
    transform: "translateY(-8px)",
    boxShadow: `0 12px 30px -10px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.1)"
    }`,
  },
}));

const SkillLogo = styled("img")({
  width: "60px",
  height: "60px",
  marginBottom: "16px",
  objectFit: "contain",
});

const DotContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "6px",
  marginTop: theme.spacing(2),
}));

const SkillDot = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: active 
    ? "#FF6B35" // The orange color from your screenshot
    : theme.palette.mode === "dark" ? "#333" : "#D1D5DB",
}));

const SectionHeader = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "2.5rem",
  textAlign: "center",
  marginBottom: theme.spacing(6),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const skillsData = [
  { name: "React js", icon: "react", level: 5 },
  { name: "Node js", icon: "nodedotjs", level: 5 },
  { name: "Express js", icon: "express", level: 4 },
  { name: "Mongo DB", icon: "mongodb", level: 4 },
  { name: "React Expo", icon: "expo", level: 5 },
  { name: "Material UI", icon: "mui", level: 5 },
  { name: "Git hub", icon: "github", level: 4 },
  { name: "My SQL", icon: "mysql", level: 4 },
];

const TechnicalSkills = () => {
  return (
    <Box
      component="section"
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeader variant="h2">Technical Skills</SectionHeader>
        </motion.div>

        <Grid container spacing={4}>
          {skillsData.map((skill, index) => (
            <Grid item   size={{ xs: 12, sm: 6, md: 3 }} key={skill.name}>
              <SkillCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillLogo
                  src={`https://cdn.simpleicons.org/${skill.icon}/${
                    skill.icon === "express" ? "888" : "default"
                  }`}
                  alt={skill.name}
                />
                <Typography variant="h6" sx={{ fontWeight: 600, color: "text.primary" }}>
                  {skill.name}
                </Typography>
                
                {/* Skill Rating Dots from Screenshot */}
                <DotContainer>
                  {[...Array(5)].map((_, i) => (
                    <SkillDot key={i} active={i < skill.level} />
                  ))}
                </DotContainer>
              </SkillCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechnicalSkills;