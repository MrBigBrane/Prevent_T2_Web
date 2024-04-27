'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MuiButton from '../MuiButton';

export default function DeleteModal({ classInfo }) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <MuiButton startIcon={<GroupAddIcon />} label="Invite" type='' color="primary" click={handleClickOpen}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Invite Fellow Fitness Members!"}
        </DialogTitle>
        <DialogContent>
            {classInfo.map((row) => {
                return (
                    <DialogContentText key={row[0]} id="alert-dialog-description">
                        Class Name: <b>{row[1]}</b> Join Code: <b>{row[0]}</b>
                    </DialogContentText>
                )
                
            })}
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}