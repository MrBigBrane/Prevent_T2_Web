'use client';
import DeleteIcon from '@mui/icons-material/Delete';
import deleter from '../serverfunctions/delete'
import { IconButton } from '@mui/material';

export default function DeleteButton(table, rowId, page) {
    function handleClick() {
        deleter(table, rowId, page);
    }

    return (
        <IconButton onClick={handleClick} color="warning"><DeleteIcon /></IconButton>
    )
}

export function DeleteButtonIcon({ click }) {
    return (
        <IconButton onClick={click} color="warning"><DeleteIcon /></IconButton>
    )
}