import React from "react";
import { Typography, Container, Button, Card, CardContent, CardMedia, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Email, Phone, VideoCall } from "@mui/icons-material";
import profilePic from "../assets/profile.jpg";
import bendingMachineImage from "../assets/bending_machine.jpg";
import smartFactoryImage from "../assets/smart_factory.jpg";
import About from "./About";
import Services from "./Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
// Project Data
const projects = [
  {
    title: "Design and Simulation of a Semi-Automatic Bending Machine",
    image: bendingMachineImage,
    description: `Developed and simulated a semi-automatic bending machine to enhance precision and efficiency in metal forming.`,
    technologies: ["SolidWorks", "ANSYS", "Automation", "Structural Analysis"],
  },
  {
    title: "IoT-Based Smart Factory System (In Progress)",
    image: smartFactoryImage,
    description: `Initiating the development of a real-time monitoring system for factory environments using MATLAB and Python.`,
    technologies: ["MATLAB", "Python", "IoT", "Machine Learning"],
  },
];

const Home = () => {
  const navigate = useNavigate();

  // Slider settings
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
    <Container sx={{ textAlign: "center", mt: 5 }}>
      {/* Header Section */}
      <motion.div 
        id="home" 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{
            color: ["#ff5733", "#33ff57", "#3357ff", "#ff33a1", "#ffd700"],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            Welcome to My Digital Space
          </Typography>
        </motion.div>
        <Typography variant="h6">Crafting Innovation in Engineering & Web Development</Typography>
      </motion.div>

      {/* About Section */}
      <About />

      {/* Service Section */}
      <Services/>
      {/* Projects Section */}
      <Projects/>
    

      {/* Contact Section */}
      <Contact/>
    </Container>
  );
};

export default Home;
