import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { IconButton } from '@mui/material';

export default function InviteButton({ click }) {
    return (
        <IconButton onClick={click} color='primary'><GroupAddIcon /></IconButton>
    )
}