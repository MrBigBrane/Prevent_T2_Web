'use client'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function BasicTextFields({ id, label, variant, name, defaultValue, type, disabled, required, ...props }) {
    const [input, setInput] = useState(defaultValue)

    const handleChange = (event) => {
      setInput(event.target.value);
    };

  return (
    <>
      <input type='hidden' name={`${name}input`} value={input} onChange={handleChange} />
      {type === 'hidden' ? null : <Box
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
          disabled={disabled ? disabled : false}
          required={required ? required : null}
          {...props}
        />
      </Box>}
    </>
    
  );
}