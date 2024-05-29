'use client';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import { useState } from 'react';
import Link from 'next/link';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import CampaignIcon from '@mui/icons-material/Campaign';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export default function NestedList({ cohortName, code }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <HolidayVillageIcon />
        </ListItemIcon>
        <ListItemText primary={cohortName} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link href={`/coaches/view/${code}class`} style={{ width: "100%" }}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="View Class" />
            </ListItemButton>
          </Link>
          <Link href={`/coaches/${code}student`} style={{ width: "100%" }}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="View Students" />
            </ListItemButton>
          </Link>
          <Link href={`/coaches/view/${code}class/announcements`} style={{ width: "100%" }}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <CampaignIcon />
              </ListItemIcon>
              <ListItemText primary="Announcements" />
            </ListItemButton>
          </Link>
          <Link href={`/coaches/view/${code}class/invite`} style={{ width: "100%" }}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <PersonAddAlt1Icon />
              </ListItemIcon>
              <ListItemText primary="Invite" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </List>
  );
}