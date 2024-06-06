'use client';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function BasicSelect({ name, field, field1, field2, field3, field4, field5, field6, field7, field8, field9, defaultValue, required, hidden, ...props }) {
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
          fullWidth
          style={{ width: "97%" }}
        >
          <MenuItem value={field1}>{field1}</MenuItem>
          <MenuItem value={field2}>{field2}</MenuItem>
          {field3 ? <MenuItem value={field3}>{field3}</MenuItem> : null}
          {field4 ? <MenuItem value={field4}>{field4}</MenuItem> : null}
          {field5 ? <MenuItem value={field5}>{field5}</MenuItem> : null}
          {field6 ? <MenuItem value={field6}>{field6}</MenuItem> : null}
          {field7 ? <MenuItem value={field7}>{field7}</MenuItem> : null}
          {field8 ? <MenuItem value={field8}>{field8}</MenuItem> : null}
          {field9 ? <MenuItem value={field9}>{field9}</MenuItem> : null}
        </Select>
      </FormControl>
    </Box>
    }
    
    </>
    
    
  );
}