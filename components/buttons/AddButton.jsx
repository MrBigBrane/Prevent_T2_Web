'use client';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import Link from 'next/link';

export default function AddButton({ page, click }) {

    return (
        <IconButton color="success" onClick={click}>
            <AddCircleOutlineIcon />
        </IconButton>
  
    );
}