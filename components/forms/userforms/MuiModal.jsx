'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import ActivityForm from './ActivityForm'
import EditButton from '../../buttons/EditButton';
import CoachForm from './CoachForm'
import AddButton from '../../buttons/AddButton';
import MealPlan from '../plans/meals/MealPlan';

export default function MuiModal({ edit, title, rowId, field1, field2, field3, field4, search, ...props }) {
  
  const [open, setOpen] = useState(search);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {edit ? (
        <EditButton click={handleClickOpen} {...props} />
      ) : (
        <AddButton click={handleClickOpen} {...props} />
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title ? title : "Lifestyle Coach Log"}</DialogTitle>
        <DialogContent>
          {title == "Meal Plan" && (
            <MealPlan
              mealType={field1}
              item={field2}
              amount={field3}
              calories={field4}
              rowId={rowId}
              click={handleClose}
            />
          )}
          {title && title !== "Meal Plan" && (
            <ActivityForm
              field1={field1}
              field2={field2}
              field3={field3}
              field4={field4}
              rowId={rowId}
              click={handleClose}
            />
          )}
          {!title && (
            <CoachForm
              field1={field1}
              field2={field2}
              field3={field3}
              date={field4}
              rowId={rowId}
              click={handleClose}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
