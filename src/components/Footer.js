import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { LinkedIn, Twitter, Email } from "@mui/icons-material";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1", "#ffd700"];

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 3,
        backgroundColor: "#2c3e50",
        color: "white",
        textAlign: "center",
        position: "relative",
        bottom: 0,
        left: 0,
      }}
    >
      {/* Call-to-Action Section */}
      <motion.div
        animate={{
          color: colors, // Animate through colors
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
          Let's Build Something Amazing Together!
        </Typography>
      </motion.div>

      <Button
        href="mailto:wilfredwere99@gmail.com"
        variant="contained"
        color="primary"
        sx={{
          fontWeight: "bold",
          px: 3,
          py: 1,
          textTransform: "none",
          borderRadius: "20px",
          backgroundColor: "#1DA1F2",
          "&:hover": { backgroundColor: "#0d8bd9" },
        }}
      >
        Contact Me
      </Button>

      {/* Social Links */}
      <Box sx={{ mt: 2 }}>
        <IconButton
          href="https://linkedin.com/in/wilfred-were-381310259"
          target="_blank"
          sx={{ color: "#0A66C2", mx: 1, "&:hover": { color: "#084182" } }}
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton
          href="https://twitter.com/Cheriz_wilfred"
          target="_blank"
          sx={{ color: "#1DA1F2", mx: 1, "&:hover": { color: "#0d8bd9" } }}
        >
          <Twitter fontSize="large" />
        </IconButton>
        <IconButton
          href="mailto:wilfredwere99@gmail.com"
          sx={{ color: "#EA4335", mx: 1, "&:hover": { color: "#c22e2e" } }}
        >
          <Email fontSize="large" />
        </IconButton>
      </Box>

      {/* Copyright */}
      <Typography variant="body2" sx={{ mt: 2, opacity: 0.8 }}>
        &copy; {new Date().getFullYear()} Wilfred Were | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
