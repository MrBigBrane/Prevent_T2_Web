'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import EditButton from '../../../buttons/EditButton';
import MealPlan from './ActionPlan'

export default function FormDialog({ q1, rowId, q2, q3 }) {
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
          <MealPlan q2={q2} q3={q3} rowId={rowId} q1={q1} click={handleClose}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}