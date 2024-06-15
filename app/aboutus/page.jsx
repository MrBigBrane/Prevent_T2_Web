import { Typography } from "@mui/material";

import varun from '@/assets/varun.jpg'

export default function AboutUs() {
    return (
        <>
            <Typography variant="h4" style={{ textAlign: "center" }}>About Us</Typography>
            <img src={varun} alt="Varun Thota" />
        </>
    );
}