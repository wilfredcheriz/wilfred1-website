import React from "react";
import { Typography, Card, CardContent, Button, Link, Box } from "@mui/material";
import { VideoCall, Email, Phone } from "@mui/icons-material";

const Contact = () => {
  const handleScheduleCall = () => {
    window.open("https://calendly.com/wilfredcheriz/30min", "_blank");
  };

  return (
    <Box sx={{
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#e5e7eb", // optional background
      p: 0,
      m: 0,
    }}>
      <Card sx={{
        width: "100%",
        maxWidth: "600px",
        textAlign: "center",
        p: 3,
        borderRadius: 4,
        backgroundColor: "#f3f4f6",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        m: 2
      }}>
        <CardContent>
          <Box sx={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "8px",
            padding: "10px",
            mb: 2
          }}>
            <Typography variant="h4" gutterBottom>
              Contact Me
            </Typography>
          </Box>
          <Typography variant="body1" sx={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 1
          }}>
            <Email color="primary" />
            <Link href="mailto:wilfredwere99@gmail.com" color="inherit" underline="hover">
              wilfredwere99@gmail.com
            </Link>
          </Typography>
          <Typography variant="body1" sx={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mt: 1
          }}>
            <Phone color="primary" />
            <Link href="tel:+254745738916" color="inherit" underline="hover">
              +254 745 738 916
            </Link>
          </Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<VideoCall />}
            sx={{ mt: 3, borderRadius: 2 }}
            onClick={handleScheduleCall}
          >
            Schedule a Video Call
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Contact;
