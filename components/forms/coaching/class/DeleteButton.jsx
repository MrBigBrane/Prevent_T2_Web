'use client';
import DeleteIcon from '@mui/icons-material/Delete';
import removeClass from '../../../../lib/coach/class/removeClass';
import { IconButton } from '@mui/material';

export default function DeleteButton({ rowId }) {
    function handleClick() {
        removeClass(rowId);
    }

    return (
        <IconButton onClick={handleClick} color="warning"><DeleteIcon /></IconButton>
    )
}

export function DeleteButtonIcon({ click, ...props }) {
    return (
        <IconButton onClick={click} color="warning" {...props}><DeleteIcon /></IconButton>
    )
}