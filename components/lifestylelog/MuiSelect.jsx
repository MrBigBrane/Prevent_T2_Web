'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ name }) {
  const [attendance, setAttendance] = React.useState('');

  const handleChange = (event) => {
    setAttendance(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="label">Attendance</InputLabel>
        <Select
          labelId="label"
          id="attendance"
          value={attendance}
          label="Attendance"
          onChange={handleChange}
          name={name}
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
          <MenuItem value={"online"}>Online</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}