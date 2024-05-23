'use client';

import { Badge, IconButton } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import Link from "next/link";
import { useState } from "react";

export default function Inbox({ unreadAnnouncements}) {
    const [notifs, setNotifs] = useState(unreadAnnouncements);

    return (
      <Link href="/profile/announcements" onClick={() => setNotifs(0)}>
        <IconButton color="inherit">
          <Badge
            color="secondary"
            badgeContent={notifs ? notifs : null}
          >
            <MailIcon />
          </Badge>
        </IconButton>
      </Link>
    );
}