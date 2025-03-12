// Navbar.js
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import profilePic from "../assets/profile.jpg";
import { useMediaQuery } from "@mui/material";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [greeting, setGreeting] = useState("");
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const updateGreeting = () => {
      const kenyaTime = new Date().toLocaleString("en-US", { timeZone: "Africa/Nairobi" });
      const currentHour = new Date(kenyaTime).getHours();

      if (currentHour >= 5 && currentHour < 12) {
        setGreeting("Good Morning ☀️");
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting("Good Afternoon 🌞");
      } else {
        setGreeting("Good Evening 🌙");
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#2c3e50", padding: 1 }}>
        <Toolbar>
          <img
            src={profilePic}
            alt="Profile Pic"
            style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 10 }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
            {greeting}
          </Typography>
          {!isMobile ? (
            <Box>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/resume">
                Resume
              </Button>
              <Button color="inherit" component={Link} to="/projects">
                Projects
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
              <Button color="inherit" component={Link} to="/services">
                My Services
              </Button>
            </Box>
          ) : (
            <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#2c3e50", color: "white" } }}
      >
        <List sx={{ width: 250 }}>
          {["Home", "Resume", "Projects", "Contact", "Services"].map((text, index) => (
            <ListItem button component={Link} to={`/${text.toLowerCase()}`} key={index} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary={text} sx={{ color: "white" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
