import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Chip,
  Stack,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import TerminalIcon from "@mui/icons-material/Terminal";
import { AnimatePresence } from "framer-motion";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import IconButton from "@mui/material/IconButton";
import totalQ from "../../assets/totalQ.png";
import printQ from "../../assets/printQ.png";
import rec2 from "../../assets/rec2.mov";

// --- Styled Components ---
const MotionBox = motion(Box);
const MotionPaper = motion(Paper);
const MotionGrid = motion(Grid);

const GradientText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontWeight: 800,
}));

const InfoCard = styled(MotionPaper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  background:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.02)"
      : "rgba(45, 48, 71, 0.02)",
  borderRadius: "24px",
  border: `1px solid ${theme.palette.divider}`,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-8px)",
    borderColor: theme.palette.secondary.main,
  },
}));
const SliderImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "550px",
  borderRadius: "24px",
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down("md")]: {
    height: "300px",
  },
  "& img, & video": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

const TechBadge = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(1, 2),
  borderRadius: "12px",
  backgroundColor: theme.palette.background.subtle,
  border: `1px solid ${theme.palette.divider}`,
  "& svg": { fontSize: "1.2rem" },
}));

// --- Animations ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function QuestionBank() {
  const screenshots = [
    {
      title: "System Demo",
      desc: "Live recording of question paper generation workflow.",
      url: rec2,
      type: "video",
    },
    {
      title: "Smart Dashboard",
      desc: "Analytics on question distribution across subjects.",
      url: totalQ,
      type: "image",
    },
    {
      title: "LaTeX Editor",
      desc: "Real-time math equation rendering.",
      url: printQ,
      type: "image",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );
  };

  return (
    <Box sx={{ bgcolor: "background.default", pb: 10 }}>
      {/* Hero Section */}
      <Box sx={{ py: { xs: 10, md: 15 }, borderColor: "divider" }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item size={{ xs: 12, md: 7 }}>
              <MotionBox initial="hidden" animate="visible" variants={fadeInUp}>
                <Chip
                  label="Enterprise SaaS"
                  color="primary"
                  sx={{ mb: 2, fontWeight: 700 }}
                />
                <GradientText
                  variant="h1"
                  sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" }, mb: 2 }}
                >
                  Question Bank Portal
                </GradientText>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{ mb: 4, lineHeight: 1.6 }}
                >
                  A sophisticated Exam Management System designed for scale,
                  supporting thousands of educators in generating standardized
                  academic content instantly.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" size="large">
                    Live Demo
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<TerminalIcon />}
                  >
                    View Docs
                  </Button>
                </Stack>
              </MotionBox>
            </Grid>
            <Grid item size={{ xs: 12, md: 5 }}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                sx={{ position: "relative" }}
              >
                {/* Visual representation of the tech stack */}
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: "20px",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    System Architecture
                  </Typography>
                  <Stack spacing={1.5}>
                    <TechBadge>
                      <CheckCircleOutlineIcon color="success" /> React Frontend
                      (SPA)
                    </TechBadge>
                    <TechBadge>
                      <CheckCircleOutlineIcon color="success" /> Node.js Express
                      API
                    </TechBadge>
                    <TechBadge>
                      <CheckCircleOutlineIcon color="success" /> MongoDB
                      Aggregations
                    </TechBadge>
                    <TechBadge>
                      <CheckCircleOutlineIcon color="success" /> MathJax / LaTeX
                      Engine
                    </TechBadge>
                  </Stack>
                </Paper>
                <Box
                  sx={{
                    position: "absolute",
                    top: -20,
                    right: -20,
                    width: "100%",
                    height: "100%",
                    bgcolor: "secondary.main",
                    opacity: 0.1,
                    borderRadius: "20px",
                    zIndex: 1,
                  }}
                />
              </MotionBox>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -5 }}>
        {/* Problem vs Solution Section */}
        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <InfoCard>
              <Typography
                variant="h4"
                color="error.main"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                The Problem
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Educational institutions struggle with fragmented question
                storage, inconsistent paper formatting, and manual errors while
                typing complex mathematical equations. Collaboration between
                teachers is often unorganized and slow.
              </Typography>
            </InfoCard>
          </Grid>
          <Grid item size={{ xs: 12, md: 6 }}>
            <InfoCard>
              <Typography
                variant="h4"
                color="success.main"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                The Solution
              </Typography>
              <Typography variant="body1" color="text.secondary">
                A centralized portal that digitizes the entire lifecycle: from
                question entry via LaTeX-enabled editors to one-click PDF
                generation. It ensures data integrity and provides a unified
                "source of truth" for all academic content.
              </Typography>
            </InfoCard>
          </Grid>
        </Grid>

        {/* Detailed Workflow */}
        <Box sx={{ my: 15 }}>
          <Typography
            variant="h3"
            sx={{ textAlign: "center", mb: 8, fontWeight: 700 }}
          >
            How It Works
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                step: "01",
                title: "Structured Ingestion",
                desc: "Questions are categorized by Bloom's Taxonomy (Easy/Medium/Hard) and Topic mapping.",
                icon: <SettingsSuggestIcon fontSize="large" color="primary" />,
              },
              {
                step: "02",
                title: "Smart Filtering",
                desc: "Instant search using RegEx across thousands of questions based on tags or difficulty.",
                icon: (
                  <ScreenSearchDesktopIcon fontSize="large" color="primary" />
                ),
              },
              {
                step: "03",
                title: "Dynamic Generation",
                desc: "Logic-based paper creation ensuring no duplicate questions and adherence to marks distribution.",
                icon: <PictureAsPdfIcon fontSize="large" color="primary" />,
              },
            ].map((item, index) => (
              <Grid item size={{ xs: 12, md: 4 }} key={index}>
                <Box sx={{ textAlign: "center", p: 2 }}>
                  <Typography
                    variant="h2"
                    sx={{ opacity: 0.1, fontWeight: 900 }}
                  >
                    {item.step}
                  </Typography>
                  <Box sx={{ mb: 2 }}>{item.icon}</Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Screenshots Showcase */}
        <Box sx={{ mb: 12 }}>
          <Box sx={{ mb: 15 }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
              sx={{ mb: 4 }}
            >
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  Project Gallery
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Visual walkthrough of the platform interface
                </Typography>
              </Box>

              <Stack direction="row" spacing={1}>
                <IconButton
                  onClick={handlePrev}
                  sx={{ border: "1px solid", borderColor: "divider" }}
                >
                  <ChevronLeftIcon />
                </IconButton>

                <IconButton
                  onClick={handleNext}
                  sx={{ border: "1px solid", borderColor: "divider" }}
                >
                  <ChevronRightIcon />
                </IconButton>
              </Stack>
            </Stack>

            <Box sx={{ position: "relative" }}>
              <AnimatePresence mode="wait">
                <MotionBox
                  key={currentIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <SliderImageContainer>
                    {screenshots[currentIndex].type === "video" ? (
                      <video
                        src={screenshots[currentIndex].url}
                        autoPlay
                        muted
                        loop
                        controls
                      />
                    ) : (
                      <img
                        src={screenshots[currentIndex].url}
                        alt={screenshots[currentIndex].title}
                      />
                    )}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: 4,
                        background:
                          "linear-gradient(transparent, rgba(0,0,0,0.85))",
                        color: "white",
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        {screenshots[currentIndex].title}
                      </Typography>

                      <Typography variant="body1">
                        {screenshots[currentIndex].desc}
                      </Typography>
                    </Box>
                  </SliderImageContainer>
                </MotionBox>
              </AnimatePresence>

              {/* Slider Dots */}
              <Stack
                direction="row"
                spacing={1}
                justifyContent="center"
                sx={{ mt: 3 }}
              >
                {screenshots.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    sx={{
                      width: i === currentIndex ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      bgcolor: i === currentIndex ? "primary.main" : "divider",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>
        {/* Technical Highlights */}
        <Box
          sx={{
            mt: 15,
            p: { xs: 4, md: 8 },
            bgcolor: "background.subtle",
            borderRadius: "30px",
          }}
        >
          <Grid container spacing={6}>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                Technical Highlights
              </Typography>
              <List>
                {[
                  "Optimized MongoDB aggregations for fast recursive fetching of Class-Subject hierarchies.",
                  "Custom MathJax configuration for cross-browser LaTeX consistency.",
                  "React Context for state management across multi-step paper generation wizards.",
                  "Role-based Protected Routes (Admin vs Teacher) using JWT.",
                ].map((text, i) => (
                  <ListItem key={i} disableGutters>
                    <ListItemIcon>
                      <CheckCircleOutlineIcon color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item size={{ xs: 12, md: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                Impact & Scale
              </Typography>
              <Stack spacing={3}>
                <Box>
                  <Typography
                    variant="h3"
                    color="primary.main"
                    sx={{ fontWeight: 800 }}
                  >
                    10,000+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Questions Managed Monthly
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h3"
                    color="secondary.main"
                    sx={{ fontWeight: 800 }}
                  >
                    85%
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Reduction in Paper Creation Time
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default QuestionBank;
