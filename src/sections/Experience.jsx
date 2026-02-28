import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";
import BeingMashServices from "../assets/bms.png"
import Sharnbasva from "../assets/sb.png"

const MotionTimelineItem = motion(TimelineItem);

const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
  backgroundColor: theme.palette.divider,
  width: "2px",
}));

const ExperienceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: "16px",
  border: `1px solid ${theme.palette.divider}`,
  transition: "all 0.3s ease",
  position: "relative",
  "&:hover": {
    transform: "translateY(-4px)",
    borderColor: theme.palette.secondary.main,
    boxShadow: theme.shadows[2],
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: 700,
  marginBottom: theme.spacing(1),
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
}));

const experiences = [
  {
    period: "Dec 2024 - Present",
    title: "React Developer",
    company: "BeingMash Services",
    location: "Karnataka, India",
    type: "Full-time",
    icon: <WorkIcon />,
    description:
      "Leading design initiatives for enterprise products, managing a team of 5 designers, and establishing design systems.",
  },
  {
    period: "Feb 2024 - Dec 2024",
    title: "Full-stack Developer Intern",
    company: "BeingMash Services",
    location: "Karnataka, India",
    type: "Internship",
    icon: <WorkIcon />,
    description:
      "Designed and shipped multiple features for B2B SaaS products, resulting in 40% increase in user engagement.",
  },
  {
    period: "2020 - 2024",
    title: "B.Tech (ECE)",
    company: "Sharnbasva University",
    location: "Karnataka, India",
    type: "Education",
    icon: <SchoolIcon />,
    description:
      "Focused on Embedded Systems and Software Engineering fundamentals. Graduated with a strong foundation in problem-solving.",
  },
];

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      component="section"
      id="experience"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: "background.default",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <SectionTitle variant="h2">Experience & Education</SectionTitle>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            My professional journey and academic background
          </Typography>
        </Box>

        <Timeline position={isMobile ? "right" : "alternate"}>
          {experiences.map((exp, index) => (
            <MotionTimelineItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {!isMobile && (
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "secondary.main" }}
                  >
                    {exp.period}
                  </Typography>
                </TimelineOppositeContent>
              )}

              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: "primary.main",
                    p: 1.5,
                    boxShadow: `0 0 0 4px ${theme.palette.background.default}`,
                  }}
                >
                  {exp.icon}
                </TimelineDot>
                {index !== experiences.length - 1 && (
                  <StyledTimelineConnector />
                )}
              </TimelineSeparator>

              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <ExperienceCard elevation={0}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1,
                      gap: 2,
                      flexWrap: "wrap",
                    }}
                  >
                    {index === 1 ? (
                      <>
                        {/* LEFT SIDE (Internship) */}
                        <Chip
                          label={exp.type}
                          size="small"
                          sx={{
                            backgroundColor:
                              theme.palette.mode === "dark"
                                ? "rgba(203, 167, 124, 0.1)"
                                : "rgba(45, 48, 71, 0.05)",
                            color: "secondary.main",
                            fontWeight: 600,
                            borderRadius: "6px",
                          }}
                        />

                        {/* RIGHT SIDE (Title) */}
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 700, textAlign: "right" }}
                        >
                          {exp.title}
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                          {exp.title}
                        </Typography>

                        <Chip
                          label={exp.type}
                          size="small"
                          sx={{
                            backgroundColor:
                              theme.palette.mode === "dark"
                                ? "rgba(203, 167, 124, 0.1)"
                                : "rgba(45, 48, 71, 0.05)",
                            color: "secondary.main",
                            fontWeight: 600,
                            borderRadius: "6px",
                          }}
                        />
                      </>
                    )}
                  </Box>

                  {isMobile && (
                    <Typography
                      variant="caption"
                      color="text.secondary"
                      fontWeight={600}
                      sx={{ display: "block", mb: 1 }}
                    >
                      {exp.period}
                    </Typography>
                  )}

                  <Typography
                    variant="subtitle2"
                    sx={{ color: "primary.light", fontWeight: 400, mb: 1 }}
                  >
                    {exp.company}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: index === 1 ? "flex-end" : "flex-start",
                      mb: 2,
                    }}
                  >
                    <LocationOnIcon
                      sx={{
                        fontSize: "0.9rem",
                        color: "text.disabled",
                        mr: 0.5,
                      }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      {exp.location}
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {exp.description}
                  </Typography>
                </ExperienceCard>
              </TimelineContent>
            </MotionTimelineItem>
          ))}
        </Timeline>
      </Container>
    </Box>
  );
}

export default Experience;
