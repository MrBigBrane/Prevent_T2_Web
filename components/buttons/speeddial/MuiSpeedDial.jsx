'use client';

import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useState } from 'react';
import AddClassModal from '../../forms/coaching/AddClassModal';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import AddClassCoach from '../../forms/coaching/AddClass';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

export default function SpeedDialTooltipOpen({ classInfo }) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  return (
    <>
        <Backdrop open={open} />
        <Box sx={{ width: '100%', height: 330, transform: 'translateZ(0px)', flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <SpeedDial
            ariaLabel="SpeedDial tooltip example"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
            }}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
        >
            <SpeedDialAction
            icon={<LibraryAddIcon />}
            tooltipTitle="Add Class"
            tooltipOpen
            onClick={handleOpen2}
        />
        <AddClassModal form={<AddClassCoach click={handleClose2} />}title="Add Class" close={handleClose2} opening={open2} />
        <SpeedDialAction
            icon={<GroupAddIcon />}
            tooltipTitle="Invite"
            tooltipOpen
            onClick={handleOpen3}
        />
        <AddClassModal form={classInfo.map((row) => row)} title="Invite Users" close={handleClose3} opening={open3} />
        
            
        </SpeedDial>
        </Box>
    </>
    
  );
}