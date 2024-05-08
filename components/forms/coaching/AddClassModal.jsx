'use client';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
export default function FormDialog({ form, title, opening, close }) {
  return (
    <>
      <Dialog
        open={opening}
        onClose={close}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {form}
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}