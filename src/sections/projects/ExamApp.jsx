import React, { useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Stack,
  Button,
  Paper,
  Avatar,
  Card,
  CardContent,
  useTheme,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StorageIcon from "@mui/icons-material/Storage";
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import SecurityIcon from "@mui/icons-material/Security";
import { AnimatePresence } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import SchoolIcon from "@mui/icons-material/School";
import QuizIcon from "@mui/icons-material/Quiz";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AssessmentIcon from "@mui/icons-material/Assessment";
import BarChartIcon from "@mui/icons-material/BarChart";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PsychologyIcon from "@mui/icons-material/Psychology";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import TimelineIcon from "@mui/icons-material/Timeline";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import CreateIcon from "@mui/icons-material/Create";
import HistoryIcon from "@mui/icons-material/History";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

// Dummy images for gallery
const showcaseSlides = [
  {
    title: "Practice Questions with AI Explanation",
    desc: "Solve practice questions and get detailed AI-powered explanations for better understanding",
    url: "https://placehold.co/1200x800/1976d2/white?text=AI+Practice+Questions",
    type: "image",
  },
  {
    title: "Secure Online Exam Mode",
    desc: "Airplane mode required - auto-submits if cheating is detected",
    url: "https://placehold.co/1200x800/2e7d32/white?text=Secure+Exam+Mode",
    type: "image",
  },
  {
    title: "Create Personalized Tests",
    desc: "Build your own custom tests with selected topics and difficulty levels",
    url: "https://placehold.co/1200x800/ed6c02/white?text=Create+Personalized+Tests",
    type: "image",
  },
  {
    title: "Exam Results & Analytics",
    desc: "View detailed results for attended exams with performance metrics",
    url: "https://placehold.co/1200x800/9c27b0/white?text=Exam+Results",
    type: "image",
  },
  {
    title: "Overall Performance Dashboard",
    desc: "Track your strengths and weaknesses across different subjects",
    url: "https://placehold.co/1200x800/0288d1/white?text=Performance+Dashboard",
    type: "image",
  },
  {
    title: "Dark Mode Support",
    desc: "Comfortable viewing experience with dark mode for night studying",
    url: "https://placehold.co/1200x800/37474f/white?text=Dark+Mode",
    type: "image",
  },
];

// Styled Components
const MotionBox = motion(Box);
const GradientBg = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main}08 0%, ${theme.palette.secondary.main}08 100%)`,
  borderRadius: "48px",
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  background: "transparent",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "24px",
  transition: "all 0.3s ease",
  cursor: "pointer",
  height: "100%",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    transform: "translateY(-4px)",
    boxShadow: `0 20px 40px -12px ${theme.palette.primary.main}20`,
  },
}));

const GradientText = styled("span")(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));

const ModuleCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "24px",
  transition: "all 0.3s ease",
  height: "100%",
  border: `1px solid ${theme.palette.divider}`,
  background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: theme.shadows[8],
  },
}));

const TechBadge = styled(Chip)(({ theme }) => ({
  backgroundColor: `${theme.palette.primary.main}10`,
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontSize: "0.75rem",
  borderRadius: "12px",
}));

const SecurityFeatureBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: "16px",
  backgroundColor: `${theme.palette.error.main}08`,
  border: `1px solid ${theme.palette.error.main}30`,
  textAlign: "center",
}));

function ExamApp() {
  const theme = useTheme();
  const showcaseRef = useRef(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const scrollToShowcase = () => {
    showcaseRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % showcaseSlides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + showcaseSlides.length) % showcaseSlides.length
    );
  };

  // Core modules data
  const modules = [
    {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      title: "AI-Powered Practice",
      description:
        "Solve practice questions with intelligent AI explanations that help you understand concepts deeply.",
      features: [
        "AI-generated explanations",
        "Step-by-step solutions",
        "Concept clarification",
        "Similar question suggestions",
      ],
      tech: ["OpenAI API", "React Native", "Expo"],
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: "Secure Online Exams",
      description:
        "High-security exam mode requiring airplane mode, with automatic submission on cheating detection.",
      features: [
        "Airplane mode required",
        "Cheating detection",
        "Auto-submit on violation",
        "Screen lock protection",
      ],
      tech: ["Device Sensors", "Background Detection", "Secure Enclave"],
    },
    {
      icon: <CreateIcon sx={{ fontSize: 40 }} />,
      title: "Personalized Tests",
      description:
        "Create custom tests tailored to your learning needs with specific topics and difficulty levels.",
      features: [
        "Custom topic selection",
        "Difficulty adjustment",
        "Time limit settings",
        "Question count control",
      ],
      tech: ["Dynamic Filtering", "Local Storage", "Async Storage"],
    },
    {
      icon: <AssessmentIcon sx={{ fontSize: 40 }} />,
      title: "Performance Analytics",
      description:
        "Comprehensive insights into your strengths, weaknesses, and overall academic progress.",
      features: [
        "Subject-wise analysis",
        "Strength/weakness identification",
        "Progress tracking",
        "Trend analysis",
      ],
      tech: ["Chart.js", "Data Visualization", "Analytics Engine"],
    },
  ];

  return (
    <Box sx={{ bgcolor: "background.default", overflow: "hidden" }}>
      {/* Hero Section */}
      <Container
        maxWidth="lg"
        sx={{ pt: { xs: 12, md: 12 }, pb: { xs: 6, md: 8 }, mt: 8 }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item size={{ xs: 12, md: 7 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "3.5rem" },
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                <GradientText>Exam App</GradientText>
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{
                  mb: 3,
                  lineHeight: 1.4,
                  fontWeight: 500,
                }}
              >
                AI-Powered Learning & Secure Examination Platform
              </Typography>
              <Typography
                color="text.secondary"
                sx={{
                  mb: 4,
                  lineHeight: 1.6,
                  maxWidth: "90%",
                }}
              >
                Practice with AI explanations, attend secure exams with
                airplane mode enforcement, create personalized tests, and track
                your performance across all subjects.
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToShowcase}
                  sx={{ borderRadius: "12px", px: 4 }}
                >
                  Explore Features
                </Button>
              </Stack>
            </MotionBox>
          </Grid>

          <Grid item size={{ xs: 12, md: 5 }}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "24px",
                  border: `1px solid ${theme.palette.divider}`,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}02, ${theme.palette.secondary.main}02)`,
                }}
              >
                <Grid container spacing={2}>
                  {[
                    {
                      value: "AI",
                      label: "Explanations",
                      icon: <AutoAwesomeIcon />,
                      color: theme.palette.primary.main,
                      bg: `${theme.palette.primary.main}10`,
                    },
                    {
                      value: "100%",
                      label: "Secure Exams",
                      icon: <SecurityIcon />,
                      color: theme.palette.primary.main,
                      bg: `${theme.palette.primary.main}10`,
                    },
                    {
                      value: "24/7",
                      label: "Practice",
                      icon: <QuizIcon />,
                      color: theme.palette.primary.main,
                      bg: `${theme.palette.primary.main}10`,
                    },
                    {
                      value: "Real-time",
                      label: "Analytics",
                      icon: <TimelineIcon />,
                      color: theme.palette.primary.main,
                      bg: `${theme.palette.primary.main}10`,
                    },
                  ].map((item, i) => (
                    <Grid item size={{ xs: 6 }} key={i}>
                      <MotionBox
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.2 }}
                        sx={{
                          p: 3,
                          textAlign: "center",
                          borderRadius: "16px",
                          border: `1px solid ${theme.palette.divider}`,
                          background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${item.bg})`,
                        }}
                      >
                        <Avatar
                          sx={{
                            bgcolor: item.bg,
                            color: item.color,
                            width: 42,
                            height: 42,
                            mx: "auto",
                            mb: 1.5,
                          }}
                        >
                          {item.icon}
                        </Avatar>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 800,
                            color: item.color,
                            lineHeight: 1,
                          }}
                        >
                          {item.value}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.label}
                        </Typography>
                      </MotionBox>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Core Modules Section */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Chip label="Core Features" sx={{ mb: 2 }} />
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
            Complete Exam & Learning Suite
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "600px", mx: "auto" }}
          >
            Everything you need to practice, test, and improve your academic
            performance
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {modules.map((module, index) => (
            <Grid item size={{ xs: 12, md: 6 }} key={index}>
              <ModuleCard elevation={0}>
                <Box sx={{ color: "primary.main", mb: 2 }}>{module.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5 }}>
                  {module.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {module.description}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                  Key Features
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  flexWrap="wrap"
                  useFlexGap
                  sx={{ mb: 2 }}
                >
                  {module.features.map((feature, i) => (
                    <Chip
                      key={i}
                      label={feature}
                      size="small"
                      sx={{
                        bgcolor: `${theme.palette.primary.main}08`,
                        borderRadius: "12px",
                        fontSize: "0.7rem",
                      }}
                    />
                  ))}
                </Stack>
                <Typography variant="subtitle2" fontWeight={600} sx={{ mb: 1 }}>
                  Technical Highlights
                </Typography>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {module.tech.map((tech, i) => (
                    <TechBadge key={i} label={tech} size="small" />
                  ))}
                </Stack>
              </ModuleCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Security Features Highlight */}
      <GradientBg sx={{ py: 8, mb: 12 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              <SecurityIcon sx={{ fontSize: 40, verticalAlign: "middle", mr: 1 }} />
              Enterprise-Grade Security
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Ensuring academic integrity with advanced proctoring features
            </Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item size={{ xs: 12, md: 4 }}>
              <SecurityFeatureBox>
                <WifiOffIcon sx={{ fontSize: 48, color: "error.main", mb: 2 }} />
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Airplane Mode Required
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Exam mode only activates when device is in airplane mode,
                  preventing external communication
                </Typography>
              </SecurityFeatureBox>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <SecurityFeatureBox>
                <VisibilityOffIcon sx={{ fontSize: 48, color: "error.main", mb: 2 }} />
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Cheating Detection
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Advanced algorithms detect tab switching, screen recording,
                  and suspicious behavior
                </Typography>
              </SecurityFeatureBox>
            </Grid>
            <Grid item size={{ xs: 12, md: 4 }}>
              <SecurityFeatureBox>
                <FlightTakeoffIcon sx={{ fontSize: 48, color: "error.main", mb: 2 }} />
                <Typography variant="h6" fontWeight={700} gutterBottom>
                  Auto-Submit on Violation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Exam automatically submits with a security flag if cheating is
                  detected
                </Typography>
              </SecurityFeatureBox>
            </Grid>
          </Grid>
        </Container>
      </GradientBg>

   

     
      {/* Gallery Section */}
      <Container ref={showcaseRef} maxWidth="lg" sx={{ mb: 12 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 4 }}
        >
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
              App Showcase
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Visual walkthrough of key features and functionality
            </Typography>
          </Box>
          <Stack direction="row" spacing={1}>
            <IconButton
              onClick={handlePrev}
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: "12px",
                "&:hover": { bgcolor: "primary.main", color: "white" },
              }}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: "12px",
                "&:hover": { bgcolor: "primary.main", color: "white" },
              }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Stack>
        </Stack>
        <Paper
          elevation={0}
          sx={{
            borderRadius: "32px",
            overflow: "hidden",
            border: `1px solid ${theme.palette.divider}`,
            position: "relative",
          }}
        >
          <AnimatePresence mode="wait">
            <MotionBox
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: { xs: "300px", md: "540px" },
                }}
              >
                <img
                  src={showcaseSlides[currentIndex].url}
                  alt={showcaseSlides[currentIndex].title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: 4,
                    background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                    color: "white",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    {showcaseSlides[currentIndex].title}
                  </Typography>
                  <Typography variant="body2">
                    {showcaseSlides[currentIndex].desc}
                  </Typography>
                </Box>
              </Box>
            </MotionBox>
          </AnimatePresence>

          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            sx={{ py: 2 }}
          >
            {showcaseSlides.map((_, i) => (
              <Box
                key={i}
                onClick={() => setCurrentIndex(i)}
                sx={{
                  width: i === currentIndex ? 24 : 8,
                  height: 4,
                  borderRadius: 2,
                  bgcolor: i === currentIndex ? "primary.main" : "divider",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              />
            ))}
          </Stack>
        </Paper>
      </Container>

      {/* Problem & Solution Section */}
      <Container maxWidth="lg" sx={{ mb: 12 }}>
        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: "32px",
                border: `1px solid ${theme.palette.divider}`,
                height: "100%",
                background: `linear-gradient(135deg, ${theme.palette.error.main}02, transparent)`,
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, mb: 2, color: "error.main" }}
              >
                Student Challenges
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Traditional exam preparation methods come with significant
                limitations.
              </Typography>
              <List>
                {[
                  "Limited access to quality practice questions with explanations",
                  "Exam security concerns and cheating vulnerabilities",
                  "No personalized test creation based on learning needs",
                  "Lack of detailed performance analytics and progress tracking",
                  "No visibility into subject-wise strengths and weaknesses",
                ].map((item, i) => (
                  <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Box sx={{ color: "error.main", fontSize: "1rem" }}>
                        •
                      </Box>
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: "32px",
                border: `1px solid ${theme.palette.divider}`,
                height: "100%",
                background: `linear-gradient(135deg, ${theme.palette.success.main}02, transparent)`,
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, mb: 2, color: "success.main" }}
              >
                Solution Features
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                A comprehensive exam app built with React Native and Expo.
              </Typography>
              <List>
                {[
                  "AI-powered explanations for practice questions",
                  "Secure exam mode with airplane mode requirement and auto-submit",
                  "Create personalized tests with custom topics and difficulty",
                  "Complete exam history with detailed results",
                  "Smart performance analytics identifying strengths and weaknesses",
                  "Dark mode support for comfortable studying",
                ].map((item, i) => (
                  <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleIcon
                        color="success"
                        sx={{ fontSize: "1rem" }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ variant: "body2" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Technical Stack Section */}
      <GradientBg sx={{ py: 8, mb: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Built with React Native & Expo
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Modern mobile technologies powering the Exam App platform
            </Typography>
          </Box>

          <Grid container spacing={3} justifyContent="center">
            {[
              "React Native",
              "Expo Framework",
              "React Navigation",
              "Redux Toolkit",
              "OpenAI API Integration",
              "Async Storage",
              "Chart.js / Victory Native",
              "Device Sensors API",
              "Push Notifications",
              "Dark Mode Support",
              "Secure Enclave",
              "Background Detection",
            ].map((tech, i) => (
              <Grid item key={i}>
                <Chip
                  label={tech}
                  sx={{
                    bgcolor: "background.paper",
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: "20px",
                    py: 2,
                    px: 1,
                    fontSize: "0.85rem",
                    fontWeight: 500,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </GradientBg>

     
    </Box>
  );
}

export default ExamApp;