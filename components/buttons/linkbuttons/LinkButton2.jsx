import { Button } from "@mui/material";
import Link from "next/link";

export default function LinkButton2({ href, label }) {
    return (
      <Link href={href}>
        <Button variant="text" sx={{ my: 2, color: 'white', display: 'block' }}>{label}</Button>
      </Link>
    );
}