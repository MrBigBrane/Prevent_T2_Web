import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

export default function EditButton({ table, id, click, ...props }) {
    return (
        <IconButton onClick={click} color='info' {...props}><EditIcon /></IconButton>
    )
}