'use client';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function BasicSelect({ name, field, field1, field2, field3, field4, defaultValue, required, hidden, ...props }) {
  const [attendance, setAttendance] = useState(defaultValue);

  const handleChange = (event) => {
    setAttendance(event.target.value);
  };

  return (
    <>
    <input type='hidden' name={`${name}input`} value={attendance} onChange={handleChange} />
    {hidden === 'hidden' ? null :
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {hidden === 'hidden' ? null : <InputLabel id="label">{field}</InputLabel>}
        <Select
          labelId="label"
          id={name}
          value={attendance}
          label="Attendance"
          onChange={handleChange}
          name={name}
          required={required ? required : null}
          {...props}
        >
          <MenuItem value={field1}>{field1}</MenuItem>
          <MenuItem value={field2}>{field2}</MenuItem>
          <MenuItem value={field3}>{field3}</MenuItem>
          {field4 ? <MenuItem value={field4}>{field4}</MenuItem> : null}
        </Select>
      </FormControl>
    </Box>
    }
    
    </>
    
    
  );
}