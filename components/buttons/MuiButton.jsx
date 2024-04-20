import { Button } from "@mui/material";

export default function MuiButton({ startIcon, label, type }) {
    return (
      <Button type={type} variant="contained" startIcon={startIcon}>
        {label}
      </Button>
    );
}