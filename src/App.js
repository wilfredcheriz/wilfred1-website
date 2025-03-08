import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      {/* Add margin to prevent content from being hidden under the fixed navbar */}
      <Box sx={{ marginTop: 8 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;