// 'use client';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';

export default function AddButton({ click, ...props }) {

    return (
        <IconButton color="success" onClick={click} {...props}>
            <AddCircleOutlineIcon />
        </IconButton>
  
    );
}