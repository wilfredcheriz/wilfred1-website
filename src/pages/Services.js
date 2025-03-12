import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WebIcon from "@mui/icons-material/Web";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const services = [
  {
    title: "Engineering & Technical Services",
    description: `- Creating 3D models and performing structural analysis using SolidWorks, AutoCAD, and ANSYS.\n
    - CNC Programming & Machine Operations – Providing CNC programming, lathe operations, and manufacturing process optimization.`,
    icon: <EngineeringIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
  },
  {
    title: "Tech and Software Services",
    description: `- Building responsive websites using html,CSS and JavaScript.\n
    - Python & MATLAB Development – Creating automation scripts, simulations, and machine learning models.`,
    icon: <WebIcon sx={{ fontSize: 50, color: "#d32f2f" }} />,
  },
  {
    title: "Blockchain & Web3 Services",
    description: `- Crypto & Web3 Education – Training individuals and businesses on blockchain technology, DeFi, and Crypto trading.`,
    icon: <DeveloperModeIcon sx={{ fontSize: 50, color: "#ff9800" }} />,
  },
];

const Services = () => {
  return (
    <Box
      sx={{
        bgcolor: "#f7f9fc",
        pb: 10,
        pt: 20, // Added top padding to prevent content from being hidden
      }}
    >
      {/* Rounded Title Section */}
      <Box
        sx={{
          bgcolor: "blue",
          color: "white",
          py: 2,
          px: 3,
          textAlign: "center",
          mt: -8,
          mx: "auto",
          maxWidth: 360, // Keeps the heading section neat
          borderRadius: 6, // Added rounded corners
          boxShadow: 3, // Soft shadow for better look
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          My Services
        </Typography>
      </Box>

      <Box sx={{ p: 4 }}>
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 2,
                  textAlign: "center",
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": { boxShadow: 6, transform: "scale(1.05)" },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  {service.icon}
                  <Typography variant="h6" fontWeight="bold" mt={2}>
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    mt={1}
                    color="text.secondary"
                    sx={{ whiteSpace: "pre-line" }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Services;
