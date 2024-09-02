import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface HeaderProps {
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const theme = useTheme();

  const handleCommunityClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    window.open('https://discord.gg/8FYAb37z', '_blank', 'noopener,noreferrer');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
          MLProject
        </Typography>
        <Button color="inherit" component={Link} to="/dashboard">Dashboard</Button>
        <Button color="inherit" component={Link} to="/all-paths">All Paths</Button>
        <Button 
          color="inherit" 
          component="a" 
          href="https://discord.gg/P79fcekeap"
          onClick={handleCommunityClick}
        >
          Community
        </Button>
        <Button color="inherit" component={Link} to="/contribute">Contribute</Button>
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
          {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;