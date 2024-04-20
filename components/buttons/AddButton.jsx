'use client';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import Link from 'next/link';

export default function AddButton({ page }) {

    return (
      <Link href={page}>
        <IconButton color="success">
            <AddCircleOutlineIcon />
        </IconButton>
      </Link>
    );
}