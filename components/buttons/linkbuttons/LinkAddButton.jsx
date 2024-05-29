import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton } from '@mui/material';
import Link from 'next/link';

export default function AddButton({ click, ...props }) {

    return (
      <Link href={click} {...props}>
        <IconButton color="success">
          <AddCircleOutlineIcon />
        </IconButton>
      </Link>
    );
}