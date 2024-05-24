'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import InsightsIcon from '@mui/icons-material/Insights';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Link from 'next/link';

const drawerWidth = 240;

function ResponsiveDrawer({ main, ...props }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleOpen2 = () => {
    setOpen2(true);
  }

  const drawer = (
    <Box overflow={"auto"}>
      <Toolbar />
      <Divider />
      <List>
        {[
          ["Activity Stats", "/dashboard"],
          ["View Activities", "/dashboard/activities"],
          ["Add Activity", "/dashboard/activities?open=true"],
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link href={text[1]} style={{ width: "100%" }}>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <InsightsIcon />}
                  {index === 1 && <ViewListIcon />}
                  {index === 2 && <AddBoxIcon />}
                </ListItemIcon>

                <ListItemText primary={text[0]} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[
          ["Weight Stats", "/dashboard/weightstats"],
          ["View Coach Log", "/dashboard/coachlog"],
          ["Add Coach Log", "/dashboard/coachlog?open=true"],
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link href={text[1]} style={{ width: "100%" }}>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <InsightsIcon />}
                  {index === 1 && <ViewListIcon />}
                  {index === 2 && <AddBoxIcon />}
                </ListItemIcon>
                <ListItemText primary={text[0]} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
     sx={{ display: 'flex'}}
     >
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,
            height: '53%', // Set the height here},
              position: 'fixed', // Ensure it does not push content
              top: 64, // Adjust as necessary, assuming a fixed AppBar height
          }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,
            height: '100%', // Set the height here
              position: 'fixed', // Ensure it does not push content
              top: 64, // Adjust as necessary, assuming a fixed AppBar height },
          }}}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {main}
        <Typography paragraph>
          
        </Typography>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;