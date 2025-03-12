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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        boxSizing: "border-box",
        padding: 0,
        backgroundColor: "#f4f4f4",
      }}
    >
      {/* Heading Outside Background */}
      <Typography
  variant="h4" // Change from h3 to h4 (or use h5 for smaller)
  fontWeight="bold"
  sx={{
    textAlign: "center",
    mb: 2, // Space between heading and profile section
    color: "#0C0B0F",
    fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" }, // Responsive font size
  }}
>
  Engineering, Crypto & Code- <br /> My Path to Innovation
</Typography>


      <motion.div variants={sectionVariant} initial="hidden" animate="visible" style={{ width: "100%" }}>
        <Box
          sx={{
            textAlign: "center",
            background: "linear-gradient(to right, rgb(12, 11, 15), rgb(9, 24, 238))",
            padding: "40px 5vw",
            borderRadius: "0",
            color: "#ffffff",
            boxShadow: "0 4px 10px rgba(38, 4, 233, 0.2)",
            width: "100%",
            minWidth: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxSizing: "border-box",
          }}
        >
          {/* Profile Image */}
          <Avatar
            src={profilePic}
            alt="Wilfred Were"
            sx={{ width: 150, height: 150, border: "4px solid white", mb: 2 }}
          />
          <Typography variant="h3" fontWeight="bold">
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
              maxWidth: "800px",
              fontSize: "1.1rem",
              mt: 2,
              wordBreak: "break-word",
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
          <Box sx={{ mt: 4 }}>
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
    </Box>
  );
};

export default About;
