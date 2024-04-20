'use client';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function BasicSelect({ name, field, field1, field2, field3, defaultValue }) {
  const [attendance, setAttendance] = useState(defaultValue);

  const handleChange = (event) => {
    setAttendance(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="label">{field}</InputLabel>
        <Select
          labelId="label"
          id="attendance"
          value={attendance}
          label="Attendance"
          onChange={handleChange}
          name={name}
        >
          <MenuItem value={field1}>{field1}</MenuItem>
          <MenuItem value={field2}>{field2}</MenuItem>
          <MenuItem value={field3}>{field3}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}