import React from "react";
import { Box } from "@mui/material";
import Hero from "../components/Hero";
import About from "./About";
import Services from "./Services";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const Home = () => {
  return (
    <Box sx={{ width: "100vw", overflowX: "hidden", mt: 5, minHeight: "calc(100vh - 200px)" }}>
      {/* Hero Section */}
      <Box sx={{ width: "100vw" }}>
        <Hero />
      </Box>

      {/* About Section */}
      <Box sx={{ width: "100vw" }}>
        <About />
      </Box>

      {/* Services Section */}
      <Box sx={{ width: "100vw" }}>
        <Services />
      </Box>

      {/* Projects Section */}
      <Box sx={{ width: "100vw" }}>
        <Projects />
      </Box>

      {/* Contact Section */}
      <Box sx={{ width: "100vw" }}>
        <Contact />
      </Box>
    </Box>
  );
};

export default Home;
