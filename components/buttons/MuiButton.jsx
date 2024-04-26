import { Button } from "@mui/material";

export default function MuiButton({ startIcon, label, type, click }) {
    return (
      <Button type={type} variant="contained" startIcon={startIcon} onClick={click}>
        {label}
      </Button>
    );
}