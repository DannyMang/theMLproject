import React from 'react';
import { Container, Typography, Link, List, ListItem, ListItemText, Paper, Box } from '@mui/material';

const Contribute: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" gutterBottom sx={{ mt: 4 }}>
        Contribute to Our Project
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Join the Community
        </Typography>
        <Typography paragraph>
          We're excited to have you join our open-source project! Here's how you can get involved:
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="GitHub Repository" 
              secondary={
                <Link href="https://github.com/DannyMang/theMLproject" target="_blank" rel="noopener noreferrer">
                  https://github.com/DannyMang/theMLproject
                </Link>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Discord Community" 
              secondary={
                <Link href="https://discord.gg/P79fcekeap" target="_blank" rel="noopener noreferrer">
                  https://discord.gg/P79fcekeap
                </Link>
              }
            />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          How to Contribute
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="1. Fork the Repository"
              secondary="Start by forking the project repository to your GitHub account."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="2. Clone Your Fork"
              secondary="Clone your forked repository to your local machine."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="3. Create a New Branch"
              secondary="Create a new branch for your contribution."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="4. Make Your Changes"
              secondary="Implement your changes or additions to the project."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="5. Commit Your Changes"
              secondary="Commit your changes with a clear and descriptive commit message."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="6. Push to Your Fork"
              secondary="Push your changes to your forked repository on GitHub."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="7. Create a Pull Request"
              secondary="Open a pull request from your fork to the main project repository."
            />
          </ListItem>
        </List>
      </Paper>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Good Practices for Open Source Contributions
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Read the Contributing Guidelines"
              secondary="Always read and follow the project's contributing guidelines if available."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Start Small"
              secondary="Begin with small contributions like fixing typos or small bugs to familiarize yourself with the project."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Communicate"
              secondary="Discuss your planned contributions with the community before starting work."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Write Good Commit Messages"
              secondary="Use clear and descriptive commit messages that explain what changes were made and why."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Keep Your PR Small and Focused"
              secondary="Each pull request should address a single issue or feature to make review easier."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Be Patient and Respectful"
              secondary="Maintainers are often volunteers. Be patient and respectful in your interactions."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Test Your Changes"
              secondary="Ensure your changes don't break existing functionality and add tests if applicable."
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Update Documentation"
              secondary="If your changes affect how the project is used, update the documentation accordingly."
            />
          </ListItem>
        </List>
      </Paper>

      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="body1">
          Thank you for your interest in contributing to our project. Your efforts help make this project better for everyone!
        </Typography>
      </Box>
    </Container>
  );
};

export default Contribute;