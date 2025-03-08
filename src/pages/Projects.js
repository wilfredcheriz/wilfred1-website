import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, Container } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bendingMachineImage from "../assets/bending_machine.jpg";
import smartFactoryImage from "../assets/smart_factory.jpg";

const projects = [
  {
    title: "Design and Simulation of a Semi-Automatic Bending Machine",
    image: bendingMachineImage,
    description: `Developed and simulated a semi-automatic bending machine to enhance precision and efficiency in metal forming.
    - Utilized SolidWorks and ANSYS for CAD modeling and structural analysis.
    - Integrated automation principles to improve bending accuracy and reduce manual effort.
    - Conducted feasibility studies and material selection to ensure durability and cost-effectiveness.
    - Improved efficiency in industrial fabrication by reducing manual workload and increasing consistency.`,
    technologies: ["SolidWorks", "ANSYS", "Automation", "Structural Analysis"],
  },
  {
    title: "IoT-Based Smart Factory System (In Progress)",
    image: smartFactoryImage,
    description: `Initiating the development of a real-time monitoring system for factory environments using MATLAB and Python.
    - Designing a framework for predictive maintenance by analyzing real-time data (temperature, vibration, pressure).
    - Exploring automation techniques to enhance industrial efficiency and maintenance scheduling.
    - The system aims to minimize downtime by implementing machine learning algorithms for predictive analytics.`,
    technologies: ["MATLAB", "Python", "IoT", "Machine Learning"],
  },
];

const Projects = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 2 }}>
      <Card sx={{ width: "100%", padding: 2, boxShadow: 3, borderRadius: 3 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", fontFamily: "Arial, sans-serif" }}
        >
          Projects
        </Typography>
        <Slider {...sliderSettings}>
          {projects.map((project, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: "100%",
                boxShadow: 3,
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.03)" },
                margin: "auto",
              }}
            >
              <CardMedia component="img" height="250" image={project.image} alt={project.title} />
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
          ))}
        </Slider>
      </Card>
    </Container>
  );
};

export default Projects;
