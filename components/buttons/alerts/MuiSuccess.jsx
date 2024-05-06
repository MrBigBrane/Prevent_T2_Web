'use client';

import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

export default function SimpleAlert({ children, severity }) {
  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {children}
      </Alert>
    </Snackbar>
  );
}