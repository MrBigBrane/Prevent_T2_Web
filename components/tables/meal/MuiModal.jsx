'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import EditButton from '../../buttons/EditButton';
import MealPlan from '@/components/forms/plans/meals/MealPlan';

export default function FormDialog({ rowId, field1, field2, field3, field4, ...props }) {
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <EditButton
        click={handleClickOpen}
        {...props}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Meal Plan</DialogTitle>
        <DialogContent>
          <MealPlan
            mealType={field1}
            item={field2}
            amount={field3}
            calories={field4}
            rowId={rowId}
            click={handleClose}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}