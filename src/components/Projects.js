import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Box } from "@mui/material";
import bendingMachineImage from "../assets/bending_machine.jpg"; // Ensure you add this image
import smartFactoryImage from "../assets/smart_factory.jpg"; // Ensure you add this image

const projects = [
  {
    title: "Design and Simulation of a Semi-Automatic Bending Machine",
    image: bendingMachineImage,
    description: `Developed and simulated a semi-automatic bending machine to enhance precision and efficiency in metal forming.
    - Utilized **SolidWorks and ANSYS** for CAD modeling and structural analysis.
    - Integrated **automation principles** to improve bending accuracy and reduce manual effort.
    - Conducted **feasibility studies and material selection** to ensure durability and cost-effectiveness.
    - Improved efficiency in **industrial fabrication** by reducing manual workload and increasing consistency.`,
    technologies: ["SolidWorks", "ANSYS", "Automation", "Structural Analysis"],
  },
  {
    title: "IoT-Based Smart Factory System (In Progress)",
    image: smartFactoryImage,
    description: `Initiating the development of a real-time monitoring system for factory environments using **MATLAB and Python**.
    - Designing a framework for **predictive maintenance** by analyzing real-time data (temperature, vibration, pressure).
    - Exploring **automation techniques** to enhance industrial efficiency and maintenance scheduling.
    - The system aims to minimize downtime by implementing **machine learning algorithms** for predictive analytics.`,
    technologies: ["MATLAB", "Python", "IoT", "Machine Learning"],
  },
];

const Projects = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={4} justifyContent="bottom">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={5} key={index}>
            <Card sx={{ maxWidth: 500, boxShadow: 3, borderRadius: 3, transition: "0.3s", "&:hover": { transform: "scale(1.03)" } }}>
              <CardMedia component="img" height="200" image={project.image} alt={project.title} />
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="body2" fontWeight="bold" color="primary">
                  Technologies: {project.technologies.join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
