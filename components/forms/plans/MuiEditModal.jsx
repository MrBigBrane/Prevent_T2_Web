'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import EditButton from '../../buttons/EditButton';
import MealPlan from './MealPlan'

export default function FormDialog({ title, rowId, details }) {
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
        <DialogTitle>Meal Plan</DialogTitle>
        <DialogContent>
          <MealPlan title={title} rowId={rowId} details={details} click={handleClose}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}