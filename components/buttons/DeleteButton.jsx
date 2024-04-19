'use client';
import DeleteIcon from '@mui/icons-material/Delete';
import deleter from '../serverfunctions/delete'

export default function DeleteButton(table, rowId, page) {
    function handleClick() {
        deleter(table, rowId, page);
    }

    return (
        <button onClick={handleClick}><DeleteIcon /></button>
    )
}