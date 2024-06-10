'use client';
import DeleteIcon from '@mui/icons-material/Delete';
import removeClass from '../../../../lib/coach/class/removeClass';
import { Button, IconButton } from '@mui/material';

export default function DeleteButton({ rowId }) {
    function handleClick() {
        removeClass(rowId);
    }

    return (
        <IconButton onClick={handleClick} color="warning"><DeleteIcon /></IconButton>
    )
}

export function RemoveButton({ click, ...props }) {

    return (
      <Button onClick={click} variant="outlined" color="error" {...props}>
        Remove Class
      </Button>
    );
}

export function DeleteButtonIcon({ click, ...props }) {
    return (
        <IconButton onClick={click} color="warning" {...props}><DeleteIcon /></IconButton>
    )
}