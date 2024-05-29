'use client';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import InsightsIcon from '@mui/icons-material/Insights';
import ViewListIcon from '@mui/icons-material/ViewList';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Link from 'next/link';
import { Button } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

const drawerWidth = 240;

function ResponsiveDrawer({ main, ...props }) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const drawer = (
    <Box overflow={"auto"}>
      <List
        subheader={
          <ListSubheader id="nested-list-subheader">
            Activities
          </ListSubheader>
        }
      >
        {[
          ["Activity Stats", "/dashboard"],
          ["View Activities", "/dashboard/activities"],
          ["Add Activity", "/dashboard/activities/addactivity"],
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
      <List subheader={
        <ListSubheader id="nested-list-subheader">
          Coach Logs
        </ListSubheader>
      }>
        {[
          ["Weight Stats", "/dashboard/weightstats"],
          ["View Coach Log", "/dashboard/coachlog"],
          ["Add Coach Log", "/dashboard/coachlog/addcoachlog"],
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
      <List subheader={
        <ListSubheader id="nested-list-subheader">
          Meal Plans
        </ListSubheader>
      }>
        {[
          ["Meal Plans", "/dashboard/plans/mealplan"],
          ["Add Meal Plan", "/dashboard/plans/mealplan/addmealplan"],
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link href={text[1]} style={{ width: "100%" }}>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <RestaurantIcon />}
                  {index === 1 && <AddBoxIcon />}
                </ListItemIcon>
                <ListItemText primary={text[0]} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List subheader={
        <ListSubheader id="nested-list-subheader">
          Action Plans
        </ListSubheader>
      }>
        {[
          ["Action Plans", "/dashboard/plans/actionplan"],
          ["Add Action Plan", "/dashboard/plans/actionplan/addactionplan"],
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link href={text[1]} style={{ width: "100%" }}>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <DirectionsRunIcon />}
                  {index === 1 && <AddBoxIcon />}
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
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Box display={{ xs: "block", sm: "block", md: "none" }} sx={{ position: "absolute", top: 64 }}>
          <Button onClick={toggleDrawer(true)}>Menu</Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {drawer}
          </Drawer>
        </Box>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100%", // Set the height here
              position: "fixed", // Ensure it does not push content
              top: 64, // Adjust as necessary, assuming a fixed AppBar height },
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {main}
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;