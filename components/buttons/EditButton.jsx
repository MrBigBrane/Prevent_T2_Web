import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';

export default function EditButton({ table, id, click }) {
    return (
        <IconButton onClick={click} color='info'><EditIcon /></IconButton>
    )
}