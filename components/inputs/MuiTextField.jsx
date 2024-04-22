'use client'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function BasicTextFields({ id, label, variant, name, defaultValue, type, disabled }) {
    const [input, setInput] = useState(defaultValue)

  return (
    // <Box
    //   component="form"
    //   sx={{
    //     "& > :not(style)": { m: 1, width: "25ch" },
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
      <TextField
        id={id}
        label={label}
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        variant={variant}
        name={name}
        type={type}
        disabled={disabled ? disabled : false}
      />
    // </Box>
  );
}