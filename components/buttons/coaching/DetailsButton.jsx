'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { DeleteButtonIcon } from '../DeleteButton';
import Link from 'next/link';
import LinkButton from '../LinkButton';

export default function DetailsButton({ name, minutes, bmi, viewmore, joindate }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>Details</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Minutes: {minutes}
            <br />
            BMI: {bmi}
            <br />
            Joined: {joindate}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <LinkButton href={viewmore} onClick={handleClose} label={"View More"} variant="text"/>
        </DialogActions>
      </Dialog>
    </>
  );
}