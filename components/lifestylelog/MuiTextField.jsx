'use'

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({ id, label, variant, name }) {
    const [input, setInput] = React.useState('')

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
      />
    // </Box>
  );
}