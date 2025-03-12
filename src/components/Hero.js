import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg.jpg"; // Ensure the image exists in src/assets/

const Hero = () => {
  return (
    <Box
      sx={{
        width: "100vw", 
        height: "20vh", 
        minHeight: "300px", 
        background: `url(${heroBg}) center/cover no-repeat`,
        position: "relative",
        color: "white",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.5)", 
        },
      }}
    >
      <Container sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{
              color: ["#ff9800", "#00bcd4", "#4caf50", "#e91e63", "#ff9800"],
            }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          >
            <Typography variant="h4" fontWeight="bold">
              Welcome to My Digital Space
            </Typography>
          </motion.div>

          <Typography variant="h6" sx={{ opacity: 0.9, mt: 1 }}>
            Crafting Innovation in Engineering, Web Development & Blockchain
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                fontWeight: "bold",
                px: 3,
                py: 1,
                fontSize: "1rem",
                backgroundColor: "#ff9800",
                "&:hover": { backgroundColor: "#e68900" },
              }}
              href="#about"
            >
              Learn More
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
