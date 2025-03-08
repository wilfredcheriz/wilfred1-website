import React from "react";
import { Container, Typography, Box, Avatar, Button } from "@mui/material";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; // Ensure the profile picture is in the assets folder

// Animation Variants
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: 0,
        backgroundColor: "#f4f4f4", // Light background for contrast
      }}
      >
      <Container maxWidth="md">
        {/* Rounded Background Section */}
        <motion.div variants={sectionVariant} initial="hidden" animate="visible">
          <Box
            sx={{
              textAlign: "center",
              background: "linear-gradient(to right, rgb(12, 11, 15), rgb(9, 24, 238))",
              padding: 0,
              borderRadius: "20px", // Rounded corners
              color: "#ffffff",
              boxShadow: "0 4px 10px rgba(38, 4, 233, 0.2)", // Soft shadow effect
            }}
          >
            {/* Profile Image */}
            <Avatar
              src={profilePic}
              alt="Wilfred Were"
              sx={{ width: 150, height: 150, margin: "auto", border: "4px solid white" }}
            />
            <Typography variant="h3" fontWeight="bold" mt={2}>
              Wilfred Were
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Mechanical Engineering Technologist | CAD Designer | Web Developer | Blockchain Expert 
            </Typography>

            {/* About Text */}
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                maxWidth: 800,
                margin: "auto",
                fontSize: "1.1rem",
                mt: 2,
              }}
            >
              Passionate about innovation, I specialize in CAD design, mechanical systems, industrial automation, and predictive maintenance. 
              With expertise in AutoCAD, SolidWorks, ANSYS, and CNC programming, I bring efficiency to engineering solutions.  
              <br />
              <br />
              I’m also skilled in Python, MATLAB, and JavaScript, combining engineering and technology to build IoT-powered smart systems. 
              My hands-on experience includes cargo handling equipment maintenance, automotive machining, and lathe operations.  
              <br />
              <br />
              Always eager to learn, innovate, and solve complex problems, I thrive at the intersection of engineering and software development to create efficient, smart, and scalable solutions.
            </Typography>

            {/* Resume Button */}
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff9800",
                  color: "white",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#e68900" },
                }}
                href="/resume"
              >
                View My Resume
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;
