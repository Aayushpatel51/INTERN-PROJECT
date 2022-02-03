import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import {withRouter} from 'react-router';

function Navbar(props) {
  const {history} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (newPage) => {
    history.push(newPage);
    setAnchorEl(null);
  };
  const handleButtonClick = (newPage) => {
    history.push(newPage);
  }
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" className='logo' onClick={() => handleButtonClick('/')}>
            VR
          </Typography>
            
              {isMobile ? (
              <>              
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={handleMenu}
                >
                <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/about')}>About</MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/contact')}>Contact Us</MenuItem>
                </Menu>
              </>) 
              : (
                <div className="menu-name">
                  <Button variant="primary" onClick={() => handleButtonClick('/')}>Home</Button>
                  <Button variant="primary" onClick={() => handleButtonClick('/about')}>About</Button>
                  <Button variant="primary" onClick={() => handleButtonClick('/contact')}>Contact Us</Button>
                </div>
              )
              }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default withRouter(Navbar)