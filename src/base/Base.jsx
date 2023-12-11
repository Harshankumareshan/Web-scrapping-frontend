import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CompareIcon from '@mui/icons-material/Compare';

const Base = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color='inherit'>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 10 }}

          >
            <CompareIcon/>
          </IconButton>
          <Typography color={"black"} variant="h4" component="div" sx={{ flexGrow: 1 }}>
            WEB-SCRAPING KART
          </Typography>
          <Button color="secondary">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Base