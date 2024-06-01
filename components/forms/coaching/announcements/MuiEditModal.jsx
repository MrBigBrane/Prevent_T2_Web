'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import EditButton from '../../../buttons/EditButton';
import Announcements from './Announcements'

export default function FormDialog({ rowId, title, announcement }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <EditButton click={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Announcement</DialogTitle>
        <DialogContent>
          <Announcements rowId={rowId} title={title} announcement={announcement} click={handleClose}/>
        </DialogContent> 
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}