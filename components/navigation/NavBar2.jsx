'use client';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MuiLinkMenu from './menu/MuiLinkMenu'
import MenuItem from '@mui/material/MenuItem';
import SpaIcon from '@mui/icons-material/Spa';
import { useState } from 'react';
import LinkButton2 from '../buttons/linkbuttons/LinkButton2';
import Link from 'next/link';

function ResponsiveAppBar({ user, coachCopy, authButton }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <SpaIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <Link href="/">NRIVA DPP</Link>
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {user ? null : <Link href="/">
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Home</Typography>
            </MenuItem>
          </Link>}
          <Link href={user ? "/dashboard" : "/login"}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">User Dashboard</Typography>
            </MenuItem>
          </Link>
          {coachCopy[0] ? (
            <Link href="/coaches">
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Coaches Dashboard</Typography>
              </MenuItem>
            </Link>
          ) : null}
          <Link href="/resources">
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Resources</Typography>
            </MenuItem>
          </Link>
          <Link href="/aboutus">
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">About Us</Typography>
            </MenuItem>
          </Link>
        </Menu>
      </Box>
      <SpaIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        <Link href="/">NRIVA DPP</Link>
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {user ? null : <LinkButton2
          label="Home"
          sx={{ my: 2, color: "white", display: "block" }}
          href="/"
        >
          Home
        </LinkButton2>}
        <LinkButton2
          label="User Dashboard"
          sx={{ my: 2, color: "white", display: "block" }}
          href={user ? "/dashboard" : "/login"}
        >
          User Dashboard
        </LinkButton2>
        {coachCopy[0] ? (
          <LinkButton2
            variant="text"
            label="Coaches Dashboard"
            sx={{ my: 2, color: "white", display: "block" }}
            href="/coaches"
          >
            Coaches Dashboard
          </LinkButton2>
        ) : // <LinkButton2 variant="text"label ="Become a Coach" sx={{ my: 2, color: 'white', display: 'block' }} href={user ? "/dashboard/becomecoach" : "/login"}>Become a Coach</LinkButton2>
        null}
        <LinkButton2
          label="Resources"
          sx={{ my: 2, color: "white", display: "block" }}
          href="/resources"
        >
          Resources
        </LinkButton2>
        <LinkButton2
          label="About Us"
          sx={{ my: 2, color: "white", display: "block" }}
          href="/aboutus"
        >
          About Us
        </LinkButton2>
        {/*START_DEV_ONLY */}
        <LinkButton2 label="Dev" sx={{ my: 2, color: 'white', display: 'block' }} href="/testing">Dev</LinkButton2>
        {/*END_DEV_ONLY */}
      </Box>

      {/* <Box sx={{ flexGrow: 0 }}>
            {authButton}
          </Box> */}
    </>
  );
}
export default ResponsiveAppBar;