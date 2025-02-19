'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import PasswordChange from './PasswordChange';

export default function PasswordModal({ edit, title, rowId, field1, field2, field3, search, ...props }) {
  
  const [open, setOpen] = useState(search);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleClickOpen} color='success' variant='contained'>Change Password</Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle>Password Change</DialogTitle>
        <DialogContent>
          <PasswordChange click={handleClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}