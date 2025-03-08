import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import profilePic from "../assets/profile.jpg";
import { useMediaQuery } from "@mui/material";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [greeting, setGreeting] = useState("");

  // Detect Android screens (Mobile View)
  const isAndroid = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Good Morning ☀️"); // Changed emoji to a simple sun
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Good Afternoon 🌞");
    } else {
      setGreeting("Good Evening 🌙");
    }
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#2c3e50", padding: 1 }}>
      <Toolbar>
        {/* Profile Picture */}
        <img 
          src={profilePic} 
          alt="Profile Pic" 
          style={{ width: 40, height: 40, borderRadius: "50%", marginRight: 10 }} 
        />

        {/* Greeting Message */}
        <Typography variant="h6" sx={{ flexGrow: 1, color: "white" }}>
          {greeting}
        </Typography>

        {/* Show buttons on Desktop */}
        {!isAndroid ? (
          <Box>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/resume">Resume</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" component={Link} to="/services">My Services</Button>
          </Box>
        ) : (
          // Show hamburger menu on Android
          <IconButton color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/resume" onClick={toggleDrawer(false)}>
            <ListItemText primary="Resume" />
          </ListItem>
          <ListItem button component={Link} to="/projects" onClick={toggleDrawer(false)}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button component={Link} to="/services" onClick={toggleDrawer(false)}>
            <ListItemText primary="Services" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
