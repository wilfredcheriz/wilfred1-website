import React from "react";
import { Container, Typography, Divider, Box, Paper } from "@mui/material";
import { motion } from "framer-motion";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import PeopleIcon from "@mui/icons-material/People";

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Reusable Heading Component with black background and white text
const Heading = ({ icon, text }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      backgroundColor: "black",
      color: "white",
      padding: "8px 16px",
      borderRadius: "5px",
      marginBottom: 2,
    }}
  >
    {icon}
    <Typography variant="h5" fontWeight="bold" sx={{ ml: 1 }}>
      {text}
    </Typography>
  </Box>
);

const Resume = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to right, rgb(47, 42, 87), rgb(64, 59, 104))",
        padding: 0.5,
      }}
    >
      <Paper
        elevation={10}
        sx={{
          maxWidth: 900,
          width: "100%",
          padding: 4,
          borderRadius: 3,
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h4" fontWeight="bold" align="center" color="#2c3e50">
          Wilfred Were
        </Typography>
        <Typography align="center" color="#34495e" mt={1}>
          <strong>Mechanical Engineering Technologist | Web3 Enthusiast</strong>
        </Typography>
        <Divider sx={{ my: 2 }} />

        {/* Profile Section */}
        <motion.div variants={sectionVariant} initial="hidden" animate="visible">
          <Box sx={{ padding: 2, backgroundColor: "#f7f9fc", borderRadius: 2 }}>
            <Heading icon={<EngineeringIcon sx={{ color: "white" }} />} text="Profile" />
            <Typography>
              A highly motivated Mechanical Engineering Technologist with expertise in CAD design (AutoCAD, SolidWorks), 
              industrial automation, and predictive maintenance. Additionally skilled in Python, MATLAB, and Machine Learning, 
              with a strong passion for Web Development and Blockchain technologies.
            </Typography>
          </Box>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={sectionVariant} initial="hidden" animate="visible">
          <Box sx={{ mt: 4, padding: 2, backgroundColor: "#f7f9fc", borderRadius: 2 }}>
            <Heading icon={<SchoolIcon sx={{ color: "white" }} />} text="Education" />
            <Typography>
              <strong>Bachelor of Technology in Mechanical Engineering</strong>
              <br />
              Technical University of Mombasa (TUM)
              <br />
              - Developed expertise in mechanical engineering principles, design, and automation.
              <br />
              - Learned CAD design using AutoCAD and SolidWorks for mechanical components.
              <br />
              - Conducted hands-on training in CNC programming, lathe operations, and machine design.
              <br />
              - Gained experience in MATLAB and IoT for industrial automation and predictive maintenance.
              <br />
              - Engaged in research projects focusing on mechanical innovations and efficiency improvements.
            </Typography>
          </Box>
        </motion.div>

        {/* Experience Section */}
        <motion.div variants={sectionVariant} initial="hidden" animate="visible">
          <Box sx={{ mt: 4, padding: 2, backgroundColor: "#f7f9fc", borderRadius: 2 }}>
            <Heading icon={<WorkIcon sx={{ color: "white" }} />} text="Professional Experience" />
            <Typography>
              <strong>Kenya Ports Authority - Mechanical Engineering Intern (2023)</strong>
              <br />
              - Preventive and corrective maintenance on terminal cargo handling equipment.
              <br />
              - Worked with Ship-to-Shore Gantry Cranes, Rail-Mounted Gantries, and other heavy equipment.
              <br />
              - Assisted in troubleshooting critical failures, improving system uptime.
              <br />
              - Gained hands-on experience in industrial automation and maintenance.
            </Typography>
            <Typography mt={2}>
              <strong>Crater Automobiles Ltd - Mechanical Engineering Intern (2022)</strong>
              <br />
              - Gained experience with lathe machines, metal joining, and vehicle repair.
              <br />
              - Diagnosed and fixed mechanical issues in petrol and diesel engines.
              <br />
              - Learned and applied workshop safety standards and maintenance procedures.
            </Typography>
          </Box>
        </motion.div>

        {/* Projects Section */}
        <motion.div variants={sectionVariant} initial="hidden" animate="visible">
          <Box sx={{ mt: 4, padding: 2, backgroundColor: "#f7f9fc", borderRadius: 2 }}>
            <Heading icon={<CodeIcon sx={{ color: "white" }} />} text="Projects" />
            <Typography>
              <strong>Design and Simulation of Semi-Automatic Bending Machine</strong>
              <br />
              - Developed and simulated a semi-automatic bending machine for improved precision.
              <br />
              - Used SolidWorks and ANSYS for CAD modeling and structural analysis.
            </Typography>
            <Typography mt={2}>
              <strong>IoT-Based Smart Factory System (In Progress)</strong>
              <br />
              - Developing a real-time monitoring system using MATLAB and Python.
              <br />
              - Implementing predictive maintenance using sensor data.
            </Typography>
          </Box>
        </motion.div>

        {/* References Section */}
        <motion.div variants={sectionVariant} initial="hidden" animate="visible">
          <Box sx={{ mt: 4, padding: 2, backgroundColor: "#f7f9fc", borderRadius: 2 }}>
            <Heading icon={<PeopleIcon sx={{ color: "white" }} />} text="References" />
            <Typography>
              <strong>Alice M. Ndawiro</strong>, Managing Director, Kenya Ports Authority
              <br />
              📞 +254709092999
            </Typography>
            <Typography mt={2}>
              <strong>Jackton Oundo</strong>, Workshop Manager, Crater Automobiles Ltd
              <br />
              📞 +254721546463
            </Typography>
          </Box>
        </motion.div>
      </Paper>
    </Box>
  );
};

export default Resume;
