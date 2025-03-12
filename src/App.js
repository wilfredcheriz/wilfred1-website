import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // ✅ Added Navigate
import { Box } from "@mui/material";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <Box component="main" sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Routes>
            <Route path="/" element={<Home />} /> {/* ✅ Home is the default route */}
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* ✅ Redirect unknown routes to Home */}
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
