'use client'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function BasicTextFields({ id, label, variant, name, defaultValue, type, required, rows, ...props }) {
    const [input, setInput] = useState(defaultValue)

    const handleChange = (event) => {
      setInput(event.target.value);
    };


  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={id}
        label={label}
        value={input}
        onChange={handleChange}
        variant={variant}
        name={name}
        type={type}
        required={required ? required : null}
        multiline
        rows={rows}
        {...props}
      />
    </Box>
  );
}