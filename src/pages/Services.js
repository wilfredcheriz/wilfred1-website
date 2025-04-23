import React from 'react';
import { Box, Typography, Grid, Button, styled, useTheme } from '@mui/material';
import EngineeringIcon from '@mui/icons-material/Engineering';
import WebIcon from '@mui/icons-material/Web';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import { motion } from 'framer-motion';

// Gradient text for modern look
const GradientTitle = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(45deg, #6a11cb 30%, #2575fc 90%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
}));

// Neumorphic-style card
const GradientCard = styled(motion.div)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  padding: theme.spacing(2),
  background: theme.palette.mode === 'light'
    ? 'linear-gradient(135deg, #ffffff 0%, #f3f7ff 100%)'
    : 'linear-gradient(135deg, #1b1b1b 0%, #2c2c2c 100%)',
  boxShadow: theme.palette.mode === 'light'
    ? '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.7)'
    : '8px 8px 16px rgba(0,0,0,0.7), -8px -8px 16px rgba(50,50,50,0.5)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const services = [
  {
    title: 'Engineering & Technical Services',
    description: [
      'Creating 3D models and performing structural analysis with SolidWorks, AutoCAD, and ANSYS.',
      'CNC Programming & optimized machine operations for enhanced manufacturing throughput.',
    ],
    icon: <EngineeringIcon sx={{ fontSize: 48 }} />,  
  },
  {
    title: 'Tech & Software Services',
    description: [
      'Responsive web development using React.js,Next.js and modern JavaScript frameworks.',
      'Automation scripts, simulations, and predictive models with Python & MATLAB.',
    ],
    icon: <WebIcon sx={{ fontSize: 48 }} />,  
  },
  {
    title: 'Blockchain & Web3 Services',
    description: [
      'Hands-on crypto & DeFi education: from basics to advanced trading strategies.',
      'Weekly livestream tutorials and community workshops for 10K+ traders.',
      'Personalized mentorship tailored to your goals. DM for details.',
    ],
    icon: <DeveloperModeIcon sx={{ fontSize: 48 }} />,  
    actions: [
      { label: 'Join Weekly Livestream', url: 'https://www.gate.io/live/video/171e44d157baae05466167e06389c51a?ref=BgdCBw8N' },
      { label: 'Watch Tutorials', url: 'https://youtu.be/Xa-tWtCIlms?si=ElagKcMOMvN2_V5X' },
      { label: 'DM for Personal Guide classes', url: 'https://wa.me/qr/MGV7SXK4TUEHP1' },
      { label: 'Meetup Highlights', url: 'https://x.com/Cheriz_wilfred/status/1807201469994549321' },
    ],
  },
];

const Services = () => {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.background.default, py: 12, px: 2 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <GradientTitle variant="h3">
          My Services
        </GradientTitle>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {services.map((svc, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4}>
            <GradientCard
              whileHover={{ scale: 1.05, boxShadow: '0px 16px 32px rgba(0,0,0,0.2)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {svc.icon}
              <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
                {svc.title}
              </Typography>
              <Box sx={{ mt: 1 }}>
                {svc.description.map((line, i) => (
                  <Typography key={i} variant="body2" sx={{ mt: 0.5, color: theme.palette.text.secondary }}>
                    {line}
                  </Typography>
                ))}
              </Box>
              {svc.actions && (
                <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                  {svc.actions.map((act, i) => (
                    <Button
                      key={i}
                      component="a"
                      href={act.url}
                      target="_blank"
                      variant="contained"
                      sx={{ borderRadius: 2 }}
                    >
                      {act.label}
                    </Button>
                  ))}
                </Box>
              )}
            </GradientCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
