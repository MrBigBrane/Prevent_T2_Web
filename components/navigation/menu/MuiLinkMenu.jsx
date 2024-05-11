import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { useState } from 'react';

export default function BasicMenu({ user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={{ my: 2, color: 'white', display: 'block' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Plans
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link href={user ? "/dashboard/mealplan" : "/login"} ><MenuItem onClick={handleClose}>Meal Plan</MenuItem></Link>
        <Link href={user ? "/dashboard/actionplan" : "/login"} ><MenuItem onClick={handleClose}>Action Plan</MenuItem></Link>
      </Menu>
    </div>
  );
}