import React from "react";
import { Container, Typography, Divider, Box, Paper, Grid } from "@mui/material";
import { motion } from "framer-motion";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import CodeIcon from "@mui/icons-material/Code";
import PeopleIcon from "@mui/icons-material/People";
import PsychologyIcon from "@mui/icons-material/Psychology";

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

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
            <Typography variant="h5" fontWeight="bold" color="#34495e" display="flex" alignItems="center">
              <EngineeringIcon sx={{ mr: 1, color: "#1976d2" }} /> Profile
            </Typography>
            <Typography mt={1}>
              A highly motivated Mechanical Engineering Technologist with expertise in CAD design (AutoCAD, SolidWorks), 
              industrial automation, and predictive maintenance. Additionally skilled in Python, MATLAB, and Machine Learning, 
              with a strong passion for Web Development and Blockchain technologies.
            </Typography>
          </Box>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={sectionVariant} initial="hidden" animate="visible">
          <Box sx={{ mt: 4, padding: 2, backgroundColor: "#f7f9fc", borderRadius: 2 }}>
            <Typography variant="h5" fontWeight="bold" color="#34495e" display="flex" alignItems="center">
              <SchoolIcon sx={{ mr: 1, color: "#d32f2f" }} /> Education
            </Typography>
            <Typography mt={1}>
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
            <Typography variant="h5" fontWeight="bold" color="#34495e" display="flex" alignItems="center">
              <WorkIcon sx={{ mr: 1, color: "#ff9800" }} /> Professional Experience
            </Typography>
            <Typography mt={2}>
  <strong>Kenya Ports Authority - Mechanical Engineering Intern (2023)</strong>
  <br />
  - Performed preventive and corrective maintenance on terminal cargo handling equipment, ensuring operational efficiency.  
  <br />
  - Worked with Ship-to-Shore Gantry Cranes (STS), Rail-Mounted Gantries (RMG), Rubber-Tyred Gantries (RTG), Mobile Harbor Cranes (MHC), Spreaders, and Mobile Plant Equipment.  
  <br />
  - Conducted inspections, troubleshooting, and repairs of heavy machinery components to minimize downtime.  
  <br />
  - Assisted in mechanical workshop tasks, including diagnostics, part replacements, and system optimization.  
  <br />
  - Gained hands-on experience in technical documentation, equipment servicing, and safety procedures.  
  <br />
  - Collaborated with senior engineers and technicians to enhance learning and problem-solving skills.  
  <br />
  <strong>Key Achievements:</strong>  
  <br />
  ✔ Assisted in troubleshooting critical equipment failures, improving system uptime.  
  <br />
  ✔ Developed a deeper understanding of mechanical systems, automation, and heavy equipment operation in large-scale industrial settings.  
</Typography>

<Typography mt={2}>
  <strong>Crater Automobiles Ltd - Mechanical Engineering Intern (2022)</strong>
  <br />
  - Gained hands-on experience in hand-cutting and forming tools, lathe machine operations, and metal joining techniques.  
  <br />
  - Assisted in the repair and servicing of petrol and diesel engine vehicles, diagnosing mechanical issues and implementing corrective actions.  
  <br />
  - Worked with workshop machines for fabrication and component adjustments.  
  <br />
  - Learned and applied automotive maintenance procedures, ensuring vehicle efficiency and performance.  
  <br />
  - Collaborated with experienced technicians to understand engine performance optimization and workshop safety standards.  
  <br />
  <strong>Key Achievements:</strong>  
  <br />
  ✔ Contributed to repairing and maintaining various vehicle models, gaining expertise in automotive mechanics.  
  <br />
  ✔ Developed strong troubleshooting and problem-solving skills while working on real-world mechanical systems.  
</Typography>

          </Box>
        </motion.div>


        {/* Projects Section */}
        <motion.div variants={sectionVariant} initial="hidden" animate="visible">
          <Box sx={{ mt: 4, padding: 2, backgroundColor: "#f7f9fc", borderRadius: 2 }}>
            <Typography variant="h5" fontWeight="bold" color="#34495e" display="flex" alignItems="center">
              <CodeIcon sx={{ mr: 1, color: "#8e44ad" }} /> Projects
            </Typography>
            <Typography mt={2}>
              <strong>Design and Simulation of Semi-Automatic Bending Machine</strong>
              <br />
              - Developed and simulated a semi-automatic bending machine for enhanced precision and efficiency in metal forming.
              <br />
              - Utilized SolidWorks and ANSYS for CAD modeling and structural analysis to optimize design performance.
              <br />
              - Integrated automation principles to improve bending accuracy and reduce manual effort.
              <br />
              - Conducted feasibility studies and material selection to ensure durability and cost-effectiveness.
            </Typography>
            <Typography mt={2}>
              <strong>IoT-Based Smart Factory System (In Progress)</strong>
              <br />
              - Initiating the development of a real-time monitoring system for factory environments using MATLAB and Python.
              <br />
              - Designing a framework for predictive maintenance by analyzing temperature, vibration, and pressure data.
              <br />
              - Exploring automation techniques to improve industrial efficiency and maintenance scheduling.
            </Typography>
          </Box>
        </motion.div>

        {/* References Section */}
        <motion.div variants={sectionVariant} initial="hidden" animate="visible">
          <Box sx={{ mt: 4, padding: 2, backgroundColor: "#f7f9fc", borderRadius: 2 }}>
            <Typography variant="h5" fontWeight="bold" color="#34495e" display="flex" alignItems="center">
              <PeopleIcon sx={{ mr: 1, color: "#c0392b" }} /> References
            </Typography>
            <Typography mt={2}>
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
