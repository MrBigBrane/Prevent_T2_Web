'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import leaveClass from '@/lib/coach/leaveClass'
import MuiButton from '../MuiButton'
import LogoutIcon from '@mui/icons-material/Logout';

export default function LeaveClassModal() {
    function handleClick() {
        leaveClass();
    }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MuiButton startIcon={<LogoutIcon />} label="Leave Class" type={null} click={handleClickOpen} color="error" />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Leave Current Class"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
              This Action Cannot Be Undone  
            </DialogContentText>
            
        </DialogContent>
        <DialogActions>
            <MuiButton startIcon={<LogoutIcon />} label="Leave Class" type='' click={handleClick} color="error" />
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}