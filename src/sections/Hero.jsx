// sections/Hero.js
import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import DownloadIcon from "@mui/icons-material/Download";
import InteractiveSquares from "./InteractiveSquares";
import { useThemeMode } from "../context/ThemeContext";

// Styled components with motion
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const MotionButton = motion(Button);
const MotionIconButton = motion(IconButton);

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  backgroundColor: theme.palette.background.default,
  transition: "background-color 0.3s ease",
  padding: theme.spacing(2, 0), // Added vertical padding for mobile
}));

const GlassCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    textAlign: "center", // Center text on mobile
  },
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(59, 130, 246, 0.1)" : "#ffffff",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 4px 12px rgba(0, 0, 0, 0.3)"
      : "0 4px 12px rgba(0,0,0,0.05)",
  "&:hover": {
    transform: "translateY(-4px)",
    color: theme.palette.primary.main,
    backgroundColor:
      theme.palette.mode === "dark" ? "rgba(59, 130, 246, 0.2)" : "#ffffff",
  },
  transition: "all 0.3s ease",
}));

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const nameVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

const skillVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
      type: "spring",
      stiffness: 200,
    },
  }),
};

const GradientText = styled("span")(({ theme }) => ({
  display: "inline-block",
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));

const buttonVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: { scale: 0.95 },
};

const socialIconVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 1 + custom * 0.1,
      type: "spring",
      stiffness: 200,
    },
  }),
  hover: {
    y: -5,
    rotate: 5,
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

function Hero() {
  const theme = useTheme();
  const { mode } = useThemeMode();
  const isDarkMode = mode === "dark";

  const skills = ["React.js", "Node.js", "Express.Js", "Mysql", "MongoDB"];

  return (
    <HeroSection>
      <InteractiveSquares
        squareSize={50}
        borderColor={
          isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)"
        }
        hoverFillColor={
          isDarkMode ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.03)"
        }
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <GlassCard>
              <MotionBox
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <MotionTypography
                  variant="h1"
                  variants={itemVariants}
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    color: theme.palette.text.primary,
                    // Responsive Font Size
                    fontSize: { xs: "2.5rem", sm: "3.0rem", md: "3.0rem" },
                  }}
                >
                  I'm{" "}
                  <motion.span
                    variants={nameVariants}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <GradientText>Shivasharan</GradientText>
                  </motion.span>
                </MotionTypography>

                <MotionTypography
                  variant="h4"
                  variants={itemVariants}
                  sx={{
                    fontWeight: 500,
                    color: theme.palette.text.secondary,
                    mb: 3,
                    // Responsive Font Size
                    fontSize: { xs: "1.25rem", sm: "1.25rem", md: "1.25rem" },
                  }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                >
                  Full-Stack Developer
                </MotionTypography>

                <MotionTypography
                  variants={itemVariants}
                  sx={{
                    mb: 4,
                    color: theme.palette.text.secondary,
                    fontSize: { xs: "0.9rem", sm: "1.1rem" },
                    maxWidth: { xs: "100%", md: "500px" },
                    fontWeight: 500,
                    mx: { xs: "auto", md: 0 }, // Center text block on mobile
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      justifyContent: { xs: "center", md: "flex-start" },
                    }}
                  >
                    {skills.map((skill, index) => (
                      <React.Fragment key={skill}>
                        {index > 0 && (
                          <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                          >
                            {" • "}
                          </motion.span>
                        )}
                        <motion.span
                          custom={index}
                          variants={skillVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover={{
                            scale: 1.1,
                            color: theme.palette.primary.main,
                            transition: { duration: 0.2 },
                          }}
                          style={{
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            position: "relative",
                            display: "inline-block",
                            cursor: "default",
                          }}
                        >
                          | {skill}
                        </motion.span>
                      </React.Fragment>
                    ))}
                  </Box>
                </MotionTypography>

                <MotionBox
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" }, // Column on mobile
                    gap: 2,
                    mb: 5,
                    justifyContent: { xs: "center", md: "flex-start" },
                    alignItems: "center",
                  }}
                  variants={itemVariants}
                >
                  <MotionButton
                    variant="contained"
                    size="large"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    sx={{
                      borderRadius: "12px",
                      px: 4,
                      width: { xs: "100%", sm: "auto" }, // Full width on mobile
                      position: "relative",
                      overflow: "hidden",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                        transform: "translateX(-100%)",
                      },
                      "&:hover::after": {
                        transform: "translateX(100%)",
                        transition: "transform 0.8s ease",
                      },
                    }}
                  >
                    Latest Work
                  </MotionButton>

                  <MotionButton
                    variant="outlined"
                    size="large"
                    startIcon={<DownloadIcon />}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    sx={{
                      borderRadius: "12px",
                      px: 4,
                      width: { xs: "100%", sm: "auto" }, // Full width on mobile
                      backgroundColor: isDarkMode ? "transparent" : "#fff",
                      borderColor: isDarkMode
                        ? "rgba(59, 130, 246, 0.5)"
                        : undefined,
                      "&:hover": {
                        backgroundColor: isDarkMode
                          ? "rgba(59, 130, 246, 0.08)"
                          : "#fff",
                        borderColor: isDarkMode
                          ? "rgba(59, 130, 246, 0.8)"
                          : undefined,
                      },
                    }}
                  >
                    Resume
                  </MotionButton>
                </MotionBox>

                <MotionBox
                  sx={{
                    display: "flex",
                    gap: 1,
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                  variants={itemVariants}
                >
                  {[
                    {
                      Icon: GitHubIcon,
                      url: "https://github.com/Shivasharan2265",
                      delay: 0,
                    },
                    {
                      Icon: LinkedInIcon,
                      url: "https://www.linkedin.com/in/shivasharan26",
                      delay: 1,
                    },
                  
                  ].map((social, index) => (
                    <MotionIconButton
                      key={index}
                      custom={index}
                      variants={socialIconVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      whileTap={{ scale: 0.9 }}
                      onClick={() => window.open(social.url, "_blank")}
                      sx={{
                        backgroundColor: isDarkMode
                          ? `rgba(59, 130, 246, 0.1)`
                          : "#ffffff",
                      }}
                    >
                      <social.Icon />
                    </MotionIconButton>
                  ))}
                </MotionBox>
              </MotionBox>
            </GlassCard>
          </Grid>
        </Grid>
      </Container>

      {/* Floating particles - Hidden on mobile to keep UI clean */}
      <Box
        component={motion.div}
        sx={{
          position: "absolute",
          bottom: { xs: 20, md: 50 },
          right: { xs: 20, md: 50 },
          width: { xs: 100, md: 200 },
          height: { xs: 100, md: 200 },
          pointerEvents: "none",
          zIndex: 1,
          display: { xs: "none", sm: "block" }, // Optional: Hide on mobile to improve performance
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: theme.palette.primary.main,
              opacity: 0.3,
              left: i * 40,
              top: Math.sin(i) * 20,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </Box>
    </HeroSection>
  );
}

export default Hero;
