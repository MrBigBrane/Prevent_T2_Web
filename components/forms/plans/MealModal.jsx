'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import MealPlan from './MealPlan';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import MuiButton from '@/components/buttons/MuiButton';

export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MuiButton startIcon={<LibraryAddIcon />} label="Add Meal Plan" type='' color="secondary" click={handleClickOpen} />
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add Meal Plan</DialogTitle>
        <DialogContent>
          <MealPlan click={handleClose}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
