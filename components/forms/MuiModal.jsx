'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import ActivityForm from './ActivityForm'
import EditButton from '../buttons/EditButton';
import CoachForm from './CoachForm'
import AddButton from '../buttons/AddButton';
import { LinearProgress, Stack } from '@mui/material';

export default function FormDialog({ edit, title, rowId, field1, field2, field3 }) {
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {edit ? (
        <EditButton click={handleClickOpen} />
      ) : (
        <AddButton click={handleClickOpen} />
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title ? title : "Lifestyle Coach Log"}</DialogTitle>
        <DialogContent>
          {title ? (
            <ActivityForm
              field1={field1}
              field2={field2}
              field3={field3}
              rowId={rowId}
              click={handleClose2}
            />
          ) : (
            <CoachForm
              field1={field1}
              field2={field2}
              field3={field3}
              rowId={rowId}
              click={handleClose2}
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