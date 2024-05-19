'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import MuiButton from '../MuiButton'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import removeUser from '../../../lib/coach/removeUser';

export default function RemoveUserModal({ userId, ...props }) {
    function handleClick() {
        removeUser(userId);
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
      <MuiButton {...props} startIcon={<PersonRemoveIcon />} label="Remove User" type={null} click={handleClickOpen} color="error" />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Remove This User"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
              This Action Cannot Be Undone  
            </DialogContentText>
            
        </DialogContent>
        <DialogActions>
            <MuiButton startIcon={<PersonRemoveIcon/>} label="Remove User" type='' click={handleClick} color="error" />
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}